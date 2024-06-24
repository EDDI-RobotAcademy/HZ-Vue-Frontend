import MovieListPage from "@/movie/pages/list/MovieListPage.vue"
import MovieRegisterPage from "@/movie/pages/register/MovieRegisterPage.vue"
import MovieReadPage from "@/movie/pages/read/MovieReadPage.vue"

const MovieRoutes = [
    {
        path: '/movie/list',
        name: 'MovieListPage',
        component: MovieListPage,
    },
    {
        path: '/movie/register',
        name: 'MovieRegisterPage',
        component: MovieRegisterPage,
    },
    {
        path: '/movie/read/:movieId',
        name: 'MovieReadPage',
        components: {
            default: MovieReadPage
        },
        props: {
            default: true
        },
    },
]

export default MovieRoutes