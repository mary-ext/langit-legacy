import { type SignalizedProfile, mergeSignalizedProfile } from '../cache/profiles.ts';
import { type BskyProfileFollow } from '../types.ts';

export interface ProfilesListPage {
	cursor?: string;
	subject: SignalizedProfile;
	profiles: SignalizedProfile[];
}

export interface PostProfilesListPage {
	cursor?: string;
	profiles: SignalizedProfile[];
}

export const createProfilesListPage = (
	cursor: string | undefined,
	subject: BskyProfileFollow,
	profiles: BskyProfileFollow[],
): ProfilesListPage => {
	const len = profiles.length;
	const arr: SignalizedProfile[] = new Array(len);

	for (let idx = 0; idx < len; idx++) {
		const profile = profiles[idx];
		arr[idx] = mergeSignalizedProfile(profile);
	}

	return {
		cursor,
		subject: mergeSignalizedProfile(subject),
		profiles: arr,
	};
};

export const createPostProfilesListPage = (
	cursor: string | undefined,
	profiles: BskyProfileFollow[],
): PostProfilesListPage => {
	const len = profiles.length;
	const arr: SignalizedProfile[] = new Array(len);

	for (let idx = 0; idx < len; idx++) {
		const profile = profiles[idx];
		arr[idx] = mergeSignalizedProfile(profile);
	}

	return {
		cursor,
		profiles: arr,
	};
};