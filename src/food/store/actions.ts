import { ActionContext } from "vuex"
import { Food, FoodState } from "./states"
import { AxiosResponse } from "axios"
import axiosInst from "@/utility/axiosInstance"
import { REQUEST_FOOD_LIST_TO_DJANGO, REQUEST_FOOD_TO_DJANGO } from "./mutation-types"

export type FoodActions = {
    requestFoodToDjango(
        context: ActionContext<FoodState, any>, 
        foodId: number
    ): Promise<void>
    requestFoodListToDjango(context: ActionContext<FoodState, any>): Promise<void>
    requestCreateFoodToDjango(context: ActionContext<FoodState, unknown>, 
                                imageFormData: FormData): Promise<AxiosResponse>
}

const actions: FoodActions = {
    async requestFoodToDjango(
        context: ActionContext<FoodState, any>, 
        foodId: number
    ): Promise<void> {

        try {
            const res: AxiosResponse<Food> = 
                await axiosInst.djangoAxiosInst.get(`/food/read/${foodId}`)

            context.commit(REQUEST_FOOD_TO_DJANGO, res.data)
        } catch (error) {
            console.error('requestFoodToDjango() -> error:', error)
            throw error
        }
    },
    async requestFoodListToDjango(context: ActionContext<FoodState, any>): Promise<void> {
        try {
            const res: AxiosResponse<any, any> = await axiosInst.djangoAxiosInst.get('/food/list/');
            const data: Food[] = res.data;
            console.log('data:', data)
            context.commit('REQUEST_FOOD_LIST_TO_DJANGO', data);
        } catch (error) {
            console.error('Error fetching food list:', error);
            throw error
        }
    },
    async requestCreateFoodToDjango(context: ActionContext<FoodState, unknown>, 
                                        imageFormData: FormData): Promise<AxiosResponse> {
        try {
            console.log('requestCreateFoodToDjango()')

            const res: AxiosResponse = await axiosInst.djangoAxiosInst.post(
                '/food/register', imageFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            console.log('응답 데이터:', res.data)
            return res
        } catch (error) {
            console.error('requestCreateFoodToDjango():', error)
            throw error
        }
    },
};

export default actions;