// This file is automatically generated, do not edit.

/* eslint-disable */

import { lazy } from "solid-js";
import { type RouteDefinition } from "@solidjs/router";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./routes/_index/route.tsx")),
  },
  {
    path: "u/:uid",
    component: lazy(() => import("./routes/u.$uid/route.tsx")),
    children: [
      {
        path: "you/moderation/content-filter/labeler/:labeler",
        component: lazy(() => import("./routes/u.$uid.you.moderation.content-filter.labeler.$labeler/route.tsx")),
      },
      {
        path: "you/moderation/keyword-filter/:fid/edit",
        component: lazy(() => import("./routes/u.$uid.you.moderation.keyword-filter.$fid.edit/route.tsx")),
      },
      {
        path: "profile/:actor/post/:status/reposts",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.post.$status.reposts/route.tsx")),
      },
      {
        path: "you/moderation/content-filter",
        component: lazy(() => import("./routes/u.$uid.you.moderation.content-filter._index/route.tsx")),
      },
      {
        path: "you/moderation/content-filter/global",
        component: lazy(() => import("./routes/u.$uid.you.moderation.content-filter.global/route.tsx")),
      },
      {
        path: "you/moderation/keyword-filter",
        component: lazy(() => import("./routes/u.$uid.you.moderation.keyword-filter._index/route.tsx")),
      },
      {
        path: "profile/:actor/post/:status",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.post.$status._index/route.tsx")),
      },
      {
        path: "profile/:actor/lists/:list",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.lists.$list._index/route.tsx")),
      },
      {
        path: "profile/:actor/post/:status/likes",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.post.$status.likes/route.tsx")),
      },
      {
        path: "you/moderation/keyword-filter/add",
        component: lazy(() => import("./routes/u.$uid.you.moderation.keyword-filter.add/route.tsx")),
      },
      {
        path: "profile/:actor/lists/:list/edit",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.lists.$list.edit/route.tsx")),
      },
      {
        path: "you/moderation/lists/self",
        component: lazy(() => import("./routes/u.$uid.you.moderation.lists.self._index/route.tsx")),
      },
      {
        path: "you/moderation/lists/self/new",
        component: lazy(() => import("./routes/u.$uid.you.moderation.lists.self.new/route.tsx")),
      },
      {
        path: "you/moderation/repost-filter",
        component: lazy(() => import("./routes/u.$uid.you.moderation.repost-filter/route.tsx")),
      },
      {
        path: "you/moderation/lists",
        component: lazy(() => import("./routes/u.$uid.you.moderation.lists._index/route.tsx")),
      },
      {
        path: "you/moderation/muted",
        component: lazy(() => import("./routes/u.$uid.you.moderation.muted._index/route.tsx")),
      },
      {
        path: "profile/:actor/feed/:feed",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.feed.$feed/route.tsx")),
      },
      {
        path: "you/moderation/lists/block",
        component: lazy(() => import("./routes/u.$uid.you.moderation.lists.block/route.tsx")),
      },
      {
        path: "profile/:actor/followers",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.followers/route.tsx")),
      },
      {
        path: "you/moderation/lists/mute",
        component: lazy(() => import("./routes/u.$uid.you.moderation.lists.mute/route.tsx")),
      },
      {
        path: "you/moderation/muted/temp",
        component: lazy(() => import("./routes/u.$uid.you.moderation.muted.temp/route.tsx")),
      },
      {
        path: "profile/:actor/follows",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.follows/route.tsx")),
      },
      {
        path: "settings/explore",
        component: lazy(() => import("./routes/u.$uid.settings.explore._index/route.tsx")),
      },
      {
        path: "you/moderation/blocked",
        component: lazy(() => import("./routes/u.$uid.you.moderation.blocked/route.tsx")),
      },
      {
        path: "settings/explore/add",
        component: lazy(() => import("./routes/u.$uid.settings.explore.add/route.tsx")),
      },
      {
        path: "settings/languages",
        component: lazy(() => import("./routes/u.$uid.settings.languages/route.tsx")),
      },
      {
        path: "you/app-passwords",
        component: lazy(() => import("./routes/u.$uid.you.app-passwords/route.tsx")),
      },
      {
        path: "settings/profile",
        component: lazy(() => import("./routes/u.$uid.settings.profile/route.tsx")),
      },
      {
        path: "explore",
        component: lazy(() => import("./routes/u.$uid.explore._index/route.tsx")),
      },
      {
        path: "explore/search",
        component: lazy(() => import("./routes/u.$uid.explore.search/route.tsx")),
      },
      {
        path: "profile/:actor",
        component: lazy(() => import("./routes/u.$uid.profile.$actor/route.tsx")),
        children: [
          {
            path: "lists",
            component: lazy(() => import("./routes/u.$uid.profile.$actor.lists._index/route.tsx")),
          },
          {
            path: "with_replies",
            component: lazy(() => import("./routes/u.$uid.profile.$actor.with_replies/route.tsx")),
          },
          {
            path: "feed",
            component: lazy(() => import("./routes/u.$uid.profile.$actor.feed._index/route.tsx")),
          },
          {
            path: "/",
            component: lazy(() => import("./routes/u.$uid.profile.$actor._index/route.tsx")),
          },
          {
            path: "likes",
            component: lazy(() => import("./routes/u.$uid.profile.$actor.likes/route.tsx")),
          },
          {
            path: "media",
            component: lazy(() => import("./routes/u.$uid.profile.$actor.media/route.tsx")),
          },
        ],
      },
      {
        path: "notifications",
        component: lazy(() => import("./routes/u.$uid.notifications/route.tsx")),
      },
      {
        path: "you/invites",
        component: lazy(() => import("./routes/u.$uid.you.invites/route.tsx")),
      },
      {
        path: "you",
        component: lazy(() => import("./routes/u.$uid.you._index/route.tsx")),
      },
      {
        path: "compose",
        component: lazy(() => import("./routes/u.$uid.compose/route.tsx")),
      },
      {
        path: "/",
        component: lazy(() => import("./routes/u.$uid._index/route.tsx")),
      },
    ],
  },
  {
    path: "/",
    component: lazy(() => import("./routes/_auth/route.tsx")),
    children: [
      {
        path: "login",
        component: lazy(() => import("./routes/_auth.login/route.tsx")),
      },
    ],
  },
  {
    path: "r/**",
    component: lazy(() => import("./routes/r.$/route.tsx")),
  },
];

export default routes;
