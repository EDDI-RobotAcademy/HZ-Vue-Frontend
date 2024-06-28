import { ActionContext } from "vuex"
import { FoodorderItem, DrinkorderItem, OrderState } from "./states"
import { AxiosResponse } from "axios"
import axiosInst from "@/utility/axiosInstance"

export type OrderActions = {
    requestCreateFoodorderToDjango(
        context: ActionContext<OrderState, any>,
        payload: {
            userToken: string;
            items: {
                foodcartItemId: number;
                quantity: number;
                foodorderPrice: number
            }[]
        }
    ): Promise<AxiosResponse>;

    requestCreateDrinkorderToDjango(
        context: ActionContext<OrderState, any>,
        payload: {
            userToken: string;
            items: {
                drinkcartItemId: number;
                quantity: number;
                drinkorderPrice: number
            }[]
        }
    ): Promise<AxiosResponse>;
}

const actions: OrderActions = {
    async requestCreateFoodorderToDjango({ state }, payload) {

        try {
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                throw new Error('User token not found');
            }

            console.log('payload:', payload);
            console.log('userToken:', userToken)

            const requestData = {
                userToken,
                items: payload.items.map(item => ({
                    foodcartItemId: item.foodcartItemId,
                    quantity: item.quantity,
                    foodorderPrice: item.foodorderPrice
                }))
            };
            console.log('requestData:', requestData)

            const response =
                await axiosInst.djangoAxiosInst.post('/foodorders/create', requestData);
            console.log('response data:', response.data)

            return response.data;
        } catch (error) {
            console.error('Error creating foodorder:', error);
            throw error;
        }
    },

    async requestCreateDrinkorderToDjango({ state }, payload) {
        try {
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                throw new Error('User token not found');
            }

            console.log('payload:', payload)

            const requestData = {
                userToken,
                items: payload.items.map(item => ({
                    drinkcartItemId: item.drinkcartItemId,
                    quantity: item.quantity,
                    drinkorderPrice: item.drinkorderPrice
                }))
            };

            const response =
                await axiosInst.djangoAxiosInst.post('/drinkorders/create', requestData);
            console.log('response data:', response.data)

            return response.data;
        } catch (error) {
            console.error('Error creating drinkorder:', error);
            throw error;
        }
    },
};

export default actions;