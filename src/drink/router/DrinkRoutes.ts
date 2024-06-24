import DrinkListPage from "@/drink/pages/list/DrinkListPage.vue"
import DrinkRegisterPage from "@/drink/pages/register/DrinkRegisterPage.vue"
import DrinkReadPage from "@/drink/pages/read/DrinkReadPage.vue"

const DrinkRoutes = [
    {
        path: '/drink/list',
        name: 'DrinkListPage',
        component: DrinkListPage,
    },
    {
        path: '/drink/register',
        name: 'DrinkRegisterPage',
        component: DrinkRegisterPage,
    },
    {
        path: '/drink/read/:drinkId',
        name: 'DrinkReadPage',
        components: {
            default: DrinkReadPage
        },
        props: {
            default: true
        },
    },
]

export default DrinkRoutes