import { resolvePost, resolveProfile, resolveRepository } from './_resolvers.ts';
import { renderPost } from './_renderers/post.ts';

const POST_MATCHER = new URLPattern({ pathname: '/r/profile/:actor/post/:post' });

const appendHead = (response: Response, content: string) => {
	const handler: HTMLRewriterElementContentHandlers = {
		element: (element) => {
			element.append(content, { html: true });
		},
	};

	return new HTMLRewriter().on('head', handler).transform(response);
};

export const onRequest: PagesFunction = async (context) => {
	const { request } = context;

	const response = await context.next();

	try {
		const url = request.url;

		let match: URLPatternURLPatternResult | null;

		if ((match = POST_MATCHER.exec(url))) {
			const { actor, post } = match.pathname.groups;

			const repo = await resolveRepository(actor);
			const profile = await resolveProfile(repo.did);
			const record = await resolvePost(repo.did, post);

			return appendHead(response, renderPost(record, profile, repo));
		}
	} catch (err) {
		console.log(`failed to render preview`);
		console.error(err);
	}

	return response;
};
