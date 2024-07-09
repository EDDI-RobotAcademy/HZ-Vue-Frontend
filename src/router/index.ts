import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeRoutes from "@/home/router/HomeRoutes";
// import BoardRoutes from '@/board/router/BoardRoutes'
import MovieRoutes from "@/movie/router/MovieRoutes";
import AccountRoutes from "@/account/router/AccountRoutes";
import DrinkRoutes from "@/drink/router/DrinkRoutes";
import FoodRoutes from "@/food/router/FoodRoutes";
import AuthenticationRoutes from "@/authentication/router/AuthenticationRoutes";
import CartRoutes from "@/cart/router/CartRoutes";
import SubscriptionRoutes from "@/subscription/router/SubscriptionRoutes";
import OrderRoutes from "@/order/router/OrderRoutes";
import AdminDashBoardRoutes from "@/admin/router/AdminDashBoardRoutes";
import KmeansRoutes from "@/kmeans/router/KmeansRoutes";

// import AuthenticationRoutes from '@/authentication/router/AuthenticationRoutes'

const routes: Array<RouteRecordRaw> = [
    ...HomeRoutes,
    // ...BoardRoutes,
    ...MovieRoutes,
    ...AccountRoutes,
    ...AuthenticationRoutes,
    ...DrinkRoutes,
    ...FoodRoutes,
    ...CartRoutes,
    // ...AuthenticationRoutes,
    ...SubscriptionRoutes,
    ...OrderRoutes,
    ...AdminDashBoardRoutes,
    ...KmeansRoutes,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
