import { For, Match, Switch, createEffect } from 'solid-js';

import type { DID } from '@intrnl/bluesky-client/atp-schema';
import { createMutation, createQuery } from '@intrnl/sq';
import { Title } from '@solidjs/meta';

import { type Collection, getCollectionCursor } from '~/api/utils.ts';

import type { NotificationsPage } from '~/api/models/notifications.ts';
import { updateNotificationsSeen } from '~/api/mutations/update-notifications-seen.ts';
import {
	getNotifications,
	getNotificationsKey,
	getNotificationsLatest,
	getNotificationsLatestKey,
} from '~/api/queries/get-notifications.ts';

import { useParams } from '~/router.ts';

import CircularProgress from '~/components/CircularProgress.tsx';
import VirtualContainer from '~/components/VirtualContainer.tsx';
import button from '~/styles/primitives/button.ts';

import Notification from './Notification.tsx';

const PAGE_SIZE = 30;

const AuthenticatedNotificationsPage = () => {
	const params = useParams('/u/:uid/notifications');

	const uid = () => params.uid as DID;

	const [notifications, { refetch }] = createQuery({
		key: () => getNotificationsKey(uid(), PAGE_SIZE),
		fetch: getNotifications,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

	const [latest, { mutate }] = createQuery({
		key: () => getNotificationsLatestKey(uid()),
		fetch: getNotificationsLatest,
		staleTime: 10_000,
		enabled: () => {
			const $notifications = notifications();

			if (!$notifications || $notifications.pages.length < 1 || !$notifications.pages[0].cid) {
				return false;
			}

			return true;
		},
	});

	const read = createMutation({
		mutate: async () => {
			const date = notifications()?.pages[0]?.date;

			if (!date) {
				return;
			}

			await updateNotificationsSeen(uid(), new Date(date));
		},
		onSuccess: () => refetch(true),
	});

	// We set the initial value of the effect to 0, this is so we can tell that
	// we just mounted this effect.
	createEffect((prev: ReturnType<typeof notifications> | 0) => {
		const next = notifications();

		if (prev !== 0 && next) {
			const pages = next.pages;

			if (pages.length === 1) {
				const page = pages[0];
				const slice = page.slices[0];

				mutate({ cid: page.cid, read: slice?.read ?? true });
			}
		}

		return next;
	}, 0 as const);

	const getNotificationsCid = () => {
		return notifications()?.pages[0].cid;
	};

	const isNotificationsStale = () => {
		const $latest = latest();
		return $latest && $latest.cid !== getNotificationsCid();
	};

	return (
		<div class="flex grow flex-col">
			<Title>Notifications / Langit</Title>

			<div class="sticky top-0 z-10 flex h-13 items-center justify-between gap-4 border-b border-divider bg-background px-4">
				<p class="text-base font-bold">Notifications</p>

				<button
					disabled={read.isLoading || notifications.loading}
					onClick={() => read.mutate(null)}
					class={/* @once */ button({ color: 'outline', size: 'xs' })}
				>
					Mark as read
				</button>
			</div>

			<Switch>
				<Match when={notifications.loading && !notifications.refetchParam}>
					<div
						class="flex h-13 items-center justify-center border-divider"
						classList={{ 'border-b': !!notifications() }}
					>
						<CircularProgress />
					</div>
				</Match>

				<Match when={isNotificationsStale()}>
					<button
						onClick={() => refetch(true)}
						class="flex h-13 items-center justify-center border-b border-divider text-sm text-accent hover:bg-hinted"
					>
						Show new notifications
					</button>
				</Match>
			</Switch>

			<div>
				<For each={notifications()?.pages}>
					{(page) =>
						page.slices.map((slice) => {
							return (
								<VirtualContainer key="notifs" id={/* @once */ '' + slice.date}>
									<Notification uid={uid()} data={slice} />
								</VirtualContainer>
							);
						})
					}
				</For>
			</div>

			<Switch>
				<Match when={notifications.error}>
					<p class="p-4 text-sm">Something went wrong</p>
				</Match>

				<Match when={notifications.loading && notifications.refetchParam}>
					<div class="flex h-13 items-center justify-center">
						<CircularProgress />
					</div>
				</Match>

				<Match when={getCollectionCursor(notifications(), 'cursor')}>
					{(cursor) => (
						<button
							onClick={() => refetch(true, cursor())}
							disabled={notifications.loading}
							class="flex h-13 items-center justify-center text-sm text-accent hover:bg-hinted disabled:pointer-events-none"
						>
							Show more notifications
						</button>
					)}
				</Match>

				<Match when={!notifications.loading}>
					<div class="flex h-13 items-center justify-center">
						<p class="text-sm text-muted-fg">End of list</p>
					</div>
				</Match>
			</Switch>
		</div>
	);
};

export default AuthenticatedNotificationsPage;
