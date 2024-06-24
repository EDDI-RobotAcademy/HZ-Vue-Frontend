import { ActionContext } from "vuex"
import { Drink, DrinkState } from "./states"
import { AxiosResponse } from "axios"
import axiosInst from "@/utility/axiosInstance"
import { REQUEST_DRINK_LIST_TO_DJANGO, REQUEST_DRINK_TO_DJANGO } from "./mutation-types"

export type DrinkActions = {
    requestDrinkToDjango(
        context: ActionContext<DrinkState, any>, 
        drinkId: number
    ): Promise<void>
    requestDrinkListToDjango(context: ActionContext<DrinkState, any>): Promise<void>
    requestCreateDrinkToDjango(context: ActionContext<DrinkState, unknown>, 
                                imageFormData: FormData): Promise<AxiosResponse>
}

const actions: DrinkActions = {
    async requestDrinkToDjango(
        context: ActionContext<DrinkState, any>, 
        drinkId: number
    ): Promise<void> {

        try {
            const res: AxiosResponse<Drink> = 
                await axiosInst.djangoAxiosInst.get(`/drink/read/${drinkId}`)

            context.commit(REQUEST_DRINK_TO_DJANGO, res.data)
        } catch (error) {
            console.error('requestDrinkToDjango() -> error:', error)
            throw error
        }
    },
    async requestDrinkListToDjango(context: ActionContext<DrinkState, any>): Promise<void> {
        try {
            const res: AxiosResponse<any, any> = await axiosInst.djangoAxiosInst.get('/drink/list/');
            const data: Drink[] = res.data;
            console.log('data:', data)
            context.commit('REQUEST_DRINK_LIST_TO_DJANGO', data);
        } catch (error) {
            console.error('Error fetching drink list:', error);
            throw error
        }
    },
    async requestCreateDrinkToDjango(context: ActionContext<DrinkState, unknown>, 
                                        imageFormData: FormData): Promise<AxiosResponse> {
        try {
            console.log('requestCreateDrinkToDjango()')

            const res: AxiosResponse = await axiosInst.djangoAxiosInst.post(
                '/drink/register', imageFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            console.log('응답 데이터:', res.data)
            return res
        } catch (error) {
            console.error('requestCreateDrinkToDjango():', error)
            throw error
        }
    },
};

export default actions;