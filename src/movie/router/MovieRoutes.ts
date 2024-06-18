import MovieListPage from "@/movie/pages/list/MovieListPage.vue"
import MovieRegisterPage from "@/movie/pages/register/MovieRegisterPage.vue"

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
]

export default MovieRoutes