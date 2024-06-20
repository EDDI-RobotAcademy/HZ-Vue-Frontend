import { ActionContext } from "vuex"
import { Movie, MovieState } from "./states"
import { AxiosResponse } from "axios"
import axiosInst from "@/utility/axiosInstance"
import { REQUEST_MOVIE_LIST_TO_DJANGO, REQUEST_MOVIE_TO_DJANGO } from "./mutation-types"

export type MovieActions = {
    requestMovieToDjango(
        context: ActionContext<MovieState, any>, 
        movieId: number
    ): Promise<void>
    requestMovieListToDjango(context: ActionContext<MovieState, any>): Promise<void>
    requestCreateMovieToDjango(context: ActionContext<MovieState, unknown>, 
                                imageFormData: FormData): Promise<AxiosResponse>
}

const actions: MovieActions = {
    async requestMovieToDjango(
        context: ActionContext<MovieState, any>, 
        movieId: number
    ): Promise<void> {

        try {
            const res: AxiosResponse<Movie> = 
                await axiosInst.djangoAxiosInst.get(`/movie/read/${movieId}`)

            context.commit(REQUEST_MOVIE_TO_DJANGO, res.data)
        } catch (error) {
            console.error('requestMovieToDjango() -> error:', error)
            throw error
        }
    },
    async requestMovieListToDjango(context: ActionContext<MovieState, any>): Promise<void> {
        try {
            const res: AxiosResponse<any, any> = await axiosInst.djangoAxiosInst.get('/movie/list/');
            const data: Movie[] = res.data;
            console.log('data:', data)
            context.commit('REQUEST_MOVIE_LIST_TO_DJANGO', data);
        } catch (error) {
            console.error('Error fetching movie list:', error);
            throw error
        }
    },
    async requestCreateMovieToDjango(context: ActionContext<MovieState, unknown>, 
                                        imageFormData: FormData): Promise<AxiosResponse> {
        try {
            console.log('requestCreateMovieToDjango()')

            const res: AxiosResponse = await axiosInst.djangoAxiosInst.post(
                '/movie/register', imageFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            console.log('응답 데이터:', res.data)
            return res
        } catch (error) {
            console.error('requestCreateMovieToDjango():', error)
            throw error
        }
    },
};

export default actions;