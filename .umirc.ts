import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: '/users', component: '@/pages/users/index' }, 
    { path: '/users/:userId', component: '@/pages/users/index' }, 
    { path: '/posts', component: '@/pages/posts/List' }, 
  ],
  npmClient: "pnpm",
});
