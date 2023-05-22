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
        path: "profile/:actor/post/:status",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.post.$status.tsx")),
      },
      {
        path: "profile/:actor/followers",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.followers.tsx")),
      },
      {
        path: "profile/:actor/following",
        component: lazy(() => import("./routes/u.$uid.profile.$actor_.following.tsx")),
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
      {
        path: "search",
        component: lazy(() => import("./routes/u.$uid.search.tsx")),
      },
    ],
  },
  {
    path: "/",
    component: lazy(() => import("./routes/_auth.tsx")),
    children: [
      {
        path: "register",
        component: lazy(() => import("./routes/_auth.register.tsx")),
      },
      {
        path: "login",
        component: lazy(() => import("./routes/_auth.login.tsx")),
      },
    ],
  },
];

export default routes;
