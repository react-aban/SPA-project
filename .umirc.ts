import { defineConfig } from "umi";

export default defineConfig({
  routes: [{ path: "/", component: "index" },
    { path: '/users', component: '@/components/users/UserApi' },
    // { path: '/users', component: '@state/api/UserApi.tsx' }

    
  ],
  npmClient: "pnpm",
});
