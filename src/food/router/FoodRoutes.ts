import FoodListPage from "@/food/pages/list/FoodListPage.vue"
import FoodRegisterPage from "@/food/pages/register/FoodRegisterPage.vue"
import FoodReadPage from "@/food/pages/read/FoodReadPage.vue"

const FoodRoutes = [
    {
        path: '/food/list',
        name: 'FoodListPage',
        component: FoodListPage,
    },
    {
        path: '/food/register',
        name: 'FoodRegisterPage',
        component: FoodRegisterPage,
    },
    {
        path: '/food/read/:foodId',
        name: 'FoodReadPage',
        components: {
            default: FoodReadPage
        },
        props: {
            default: true
        },
    },
]

export default FoodRoutes