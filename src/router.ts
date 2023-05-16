
// This file is automatically generated, do not edit.

import { mergeProps, splitProps } from "solid-js";

import {
	A as A_,
	type AnchorProps,
	NavLink as NavLink_,
	type NavLinkProps,
	Navigate as Navigate_,
	type NavigateOptions,
	type NavigateProps,
	useNavigate as useNavigate_,
	useParams as useParams_,
} from "@solidjs/router";

export type PathsWithParams = 
	| "/u/:uid"
	| "/u/:uid/notifications"
	| "/u/:uid/search"
	| "/u/:uid/you";
export type PathsWithoutParams = 
	| "/"
	| "/register"
	| "/login";
export type Paths = PathsWithParams | PathsWithoutParams;

export interface Params {
	"/u/:uid": { "uid": string };
	"/u/:uid/notifications": { "uid": string };
	"/u/:uid/search": { "uid": string };
	"/u/:uid/you": { "uid": string };
}

type NavigateWithParamOptions<P> = P extends number
	? []
	: P extends PathsWithParams
		? [Partial<NavigateOptions> & { params: Params[P] }]
		: [Partial<NavigateOptions> & { params?: never }] | [];

type AnchorWithParamProps<P> =
	& AnchorProps
	& (P extends PathsWithParams ? { href: P; params: Params[P] } : { href: P; params?: never });
type NavigateWithParamProps<P> =
	& NavigateProps
	& (P extends PathsWithParams ? { href: P; params: Params[P] } : { href: P; params?: never });

export const useParams: <P extends PathsWithParams>(path: P) => Params[P] = useParams_ as any;
export const useNavigate = (): <P extends Paths | number>(href: P, ...options: NavigateWithParamOptions<P>) => void => {
	const navigate = useNavigate_();
	return ((path: any, options: any) => {
		if (typeof path === "number") {
			return navigate(path);
		}

		return navigate(options?.params ? generatePath(path, options.params) : path, options);
	}) as any;
};

export const A = <P extends Paths>(props: AnchorWithParamProps<P>) => {
	const [int, ext] = splitProps(props, ['href', 'params'])

	return A_(mergeProps(ext, { get href () { return int.params ? generatePath(int.href, int.params) : int.href; } }))
};
export const Navigate = <P extends Paths>(props: NavigateWithParamProps<P>) => {
	return Navigate_(mergeProps(props, { get href () { return props.params ? generatePath(props.href, props.params) : props.href; } }))
};

export { A as NavLink };

const RE_PARAM = /\/:(\w+)(\??)/g;
const generatePath = (path: string, params: Record<string, string>) =>
	path.replace(RE_PARAM, (_, segment) => (params[segment] ? `/${params[segment]}` : ""));