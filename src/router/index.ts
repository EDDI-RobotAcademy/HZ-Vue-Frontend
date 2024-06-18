import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomeRoutes from '@/home/router/HomeRoutes'
// import BoardRoutes from '@/board/router/BoardRoutes'
import MovieRoutes from '@/movie/router/MovieRoutes'
// import AccountRoutes from '@/account/router/AccountRoutes'
// import AuthenticationRoutes from '@/authentication/router/AuthenticationRoutes'

const routes: Array<RouteRecordRaw> = [
  ...HomeRoutes,
  // ...BoardRoutes,
  ...MovieRoutes,
  // ...AccountRoutes,
  // ...AuthenticationRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router