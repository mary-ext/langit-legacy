// This file is automatically generated, do not edit.

/* eslint-disable */

import { lazy } from "solid-js";
import { type RouteDefinition } from "@solidjs/router";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./routes/_index.tsx")),
  },
  {
    path: "u/:uid",
    component: lazy(() => import("./routes/u.$uid.tsx")),
    children: [
      {
        path: "profile/:actor/post/:status/reposts",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.post.$status.reposts.tsx")),
      },
      {
        path: "profile/:actor/post/:status",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.post.$status._index.tsx")),
      },
      {
        path: "profile/:actor/post/:status/likes",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.post.$status.likes.tsx")),
      },
      {
        path: "profile/:actor/feed/:feed",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.feed.$feed.tsx")),
      },
      {
        path: "profile/:actor/list/:list",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.list.$list.tsx")),
      },
      {
        path: "settings/content-languages",
        component: lazy(() => import("./routes/u.$uid.settings.content-languages.tsx")),
      },
      {
        path: "profile/:actor/followers",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.followers.tsx")),
      },
      {
        path: "you/moderation/mute-lists",
        component: lazy(() => import("./routes/u.$uid.you.moderation.mute-lists.tsx")),
      },
      {
        path: "profile/:actor/follows",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.follows.tsx")),
      },
      {
        path: "settings/explore",
        component: lazy(() => import("./routes/u.$uid.settings.explore._index.tsx")),
      },
      {
        path: "you/moderation/blocked",
        component: lazy(() => import("./routes/u.$uid.you.moderation.blocked.tsx")),
      },
      {
        path: "settings/explore/add",
        component: lazy(() => import("./routes/u.$uid.settings.explore.add.tsx")),
      },
      {
        path: "you/moderation/muted",
        component: lazy(() => import("./routes/u.$uid.you.moderation.muted.tsx")),
      },
      {
        path: "settings/profile",
        component: lazy(() => import("./routes/u.$uid.settings.profile.tsx")),
      },
      {
        path: "explore",
        component: lazy(() => import("./routes/u.$uid.explore._index.tsx")),
      },
      {
        path: "explore/search",
        component: lazy(() => import("./routes/u.$uid.explore.search/route.tsx")),
      },
      {
        path: "profile/:actor",
        component: lazy(() => import("./routes/u.$uid.profile.$actor.tsx")),
        children: [
          {
            path: "with_replies",
            component: lazy(() => import("./routes/u.$uid.profile.$actor.with_replies.tsx")),
          },
          {
            path: "list",
            component: lazy(() => import("./routes/u.$uid.profile.$actor.list._index.tsx")),
          },
          {
            path: "/",
            component: lazy(() => import("./routes/u.$uid.profile.$actor._index.tsx")),
          },
          {
            path: "likes",
            component: lazy(() => import("./routes/u.$uid.profile.$actor.likes.tsx")),
          },
        ],
      },
      {
        path: "notifications",
        component: lazy(() => import("./routes/u.$uid.notifications.tsx")),
      },
      {
        path: "you/invites",
        component: lazy(() => import("./routes/u.$uid.you.invites.tsx")),
      },
      {
        path: "you",
        component: lazy(() => import("./routes/u.$uid.you._index.tsx")),
      },
      {
        path: "compose",
        component: lazy(() => import("./routes/u.$uid.compose.tsx")),
      },
      {
        path: "/",
        component: lazy(() => import("./routes/u.$uid._index.tsx")),
      },
    ],
  },
  {
    path: "/",
    component: lazy(() => import("./routes/_auth.tsx")),
    children: [
      {
        path: "login",
        component: lazy(() => import("./routes/_auth.login.tsx")),
      },
    ],
  },
  {
    path: "r/**",
    component: lazy(() => import("./routes/r.$.tsx")),
  },
];

export default routes;
