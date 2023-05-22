import { type SignalizedPost } from '../cache/posts.ts';
import { multiagent } from '../global.ts';
import { type BskyCreateRecordResponse } from '../types.ts';
import { type DID, getPostId } from '../utils.ts';

import { acquire } from './_locker.ts';

export const repostPost = (uid: DID, post: SignalizedPost) => {
	return acquire(post, async () => {
		const session = multiagent.accounts[uid].session;
		const agent = await multiagent.connect(uid);

		const prev = post.viewer.repost.peek();

		if (prev) {
			await agent.rpc.post({
				method: 'com.atproto.repo.deleteRecord',
				data: {
					collection: 'app.bsky.feed.repost',
					repo: session.did,
					rkey: getPostId(prev),
				},
			});

			post.viewer.repost.value = undefined;
			post.repostCount.value--;
		}
		else {
			const response = await agent.rpc.post({
				method: 'com.atproto.repo.createRecord',
				data: {
					repo: session.did,
					collection: 'app.bsky.feed.repost',
					record: {
						$type: 'app.bsky.feed.repost',
						createdAt: new Date(),
						subject: {
							cid: post.cid,
							uri: post.uri,
						},
					},
				},
			});

			const data = response.data as BskyCreateRecordResponse;

			post.viewer.repost.value = data.uri;
			post.repostCount.value++;
		}
	});
};
