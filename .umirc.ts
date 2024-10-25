import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: '/users', component: '@/components/users/UserApi' }, 
    { path: '/users/:userId', component: '@/components/users/UserApi' }, 
  ],
  npmClient: "pnpm",
});
