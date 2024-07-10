import { ActionContext } from "vuex"
import { FoodorderItem, DrinkorderItem, OrderState, PurchaseData } from "./states"
import { AxiosResponse } from "axios"
import axiosInst from "@/utility/axiosInstance"
import { SET_PURCHASE_DATA } from "./mutation-types"

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

    requestCreatePurchaseToDjango(
        context: ActionContext<OrderState, any>,
        payload: {
            userToken: string;
            item: {
                foodorderId: number;
                drinkorderId: number;
            }[]
        }
    ): Promise<AxiosResponse>;

    requestReadFoodorderToDjango(
        context: ActionContext<OrderState, any>,
        payload: {
            foodorderId: string
        }
    ): Promise<AxiosResponse>;

    requestReadDrinkorderToDjango(
        context: ActionContext<OrderState, any>,
        payload: {
            drinkorderId: string
        }
    ): Promise<AxiosResponse>;

    requestReadPurchaseToDjango(
        context: ActionContext<OrderState, any>,
        payload: {
            purchaseId: string
        }
    ): Promise<AxiosResponse<PurchaseData>>;
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
    async requestCreatePurchaseToDjango({ state }, payload) {
        try {
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                throw new Error('User token not found');
            }

            console.log('payload:', payload)

            const requestData = {
                userToken,
                payload
            }
            console.log('requestData:', requestData)

            const response =
                await axiosInst.djangoAxiosInst.post('/purchase/create', requestData);
            console.log('response data:', response.data)

            return response.data.purchaseId;
        } catch (error) {
            console.error('Error creating purchase:', error);
            throw error;
        }
    },

    async requestReadFoodorderToDjango({ state }, payload) {
        try {
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                throw new Error('User token not found');
            }

            const { foodorderId } = payload

            const requestData = {
                userToken,
                payload
            }

            const response =
                await axiosInst.djangoAxiosInst.post(`/orders/read/${foodorderId}`, requestData)

            return response.data
        } catch (error) {
            console.error('주문 내역 요청 중 에러:', error)
            throw error
        }
    },

    async requestReadDrinkorderToDjango({ state }, payload) {
        try {
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                throw new Error('User token not found');
            }

            const { drinkorderId } = payload

            const requestData = {
                userToken,
            }

            const response =
                await axiosInst.djangoAxiosInst.post(`/orders/read/${drinkorderId}`, requestData)

            return response.data
        } catch (error) {
            console.error('주문 내역 요청 중 에러:', error)
            throw error
        }
    },
    async requestReadPurchaseToDjango({ state }, payload) {
        try {
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                throw new Error('User token not found');
            }

            const { purchaseId } = payload
            console.log("purchaseId: ", purchaseId)

            const requestData = {
                userToken,
            }

            const response =
                await axiosInst.djangoAxiosInst.post(`/purchase/read/${purchaseId}`, requestData)
            
            console.log("response: ", response)
            console.log("response.data: ", response.data)
            
            // commit(SET_PURCHASE_DATA, response.data)
            return response.data
        } catch (error) {
            console.error('주문 내역 요청 중 에러:', error)
            throw error
        }
    },
};

export default actions;