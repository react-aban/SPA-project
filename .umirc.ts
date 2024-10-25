import { defineConfig } from "umi";

export default defineConfig({
  routes: [{ path: "/", component: "index" },
    { path: '/users', component: '@/components/users/List' },

    
  ],
  npmClient: "pnpm",
});
