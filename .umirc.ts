import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: '/users', component: '@/pages/users/index' }, 
    { path: '/users/:userId', component: '@/pages/users/index' }, 
    { path: '/posts', component: '@/pages/posts/index' }, 
    { path: '/posts/:postId', component: '@/pages/posts/edit' }, 
  ],
  npmClient: "pnpm",
});
