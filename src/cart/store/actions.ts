import { ActionContext } from "vuex"
import {FoodcartItem, DrinkcartItem, CartState} from "./states"
import { AxiosResponse } from "axios"
import axiosInst from "@/utility/axiosInstance"
import { REQUEST_FOODCART_LIST_TO_DJANGO } from "./mutation-types"
import { REQUEST_DRINKCART_LIST_TO_DJANGO } from "./mutation-types"

export type CartActions = {
    requestAddFoodcartToDjango(
        context: ActionContext<CartState, any>,
        foodcartData: FoodcartItem
    ): Promise<AxiosResponse>;

    requestFoodcartListToDjango(
        context: ActionContext<CartState, any>
    ): Promise<AxiosResponse>;

    requestAddDrinkcartToDjango(
        context: ActionContext<CartState, any>,
        drinkcartData: DrinkcartItem
    ): Promise<AxiosResponse>;

    requestDrinkcartListToDjango(
        context: ActionContext<CartState, any>
    ): Promise<AxiosResponse>;
}

const actions: CartActions = {
    async requestAddFoodcartToDjango({ commit }, foodcartData: FoodcartItem) {
        try {
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                throw new Error('User token not found');
            }

            const requestData = {
                ...foodcartData,
                userToken
            };

            console.log('requestData:', requestData);

            const response = await axiosInst.djangoAxiosInst.post('/foodcart/register', requestData);
            return response.data;
        } catch (error) {
            console.error('Error adding to foodcart:', error);
            throw error;
        }
    },
    async requestFoodcartListToDjango({ commit }) {
        try {
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                throw new Error('User token not found');
            }

            const requestData = {
                userToken
            };

            console.log('requestFoodcartListToDjango requestData:', requestData);

            const response = await axiosInst.djangoAxiosInst.post('/foodcart/list', requestData);
            return response.data;
        } catch (error) {
            console.error('Error fetching foodcart list:', error);
            throw error;
        }
    },
    async requestAddDrinkcartToDjango({ commit }, drinkcartData: DrinkcartItem) {
        try {
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                throw new Error('User token not found');
            }

            const requestData = {
                ...drinkcartData,
                userToken
            };

            console.log('requestData:', requestData);

            const response = await axiosInst.djangoAxiosInst.post('/drinkcart/register', requestData);
            return response.data;
        } catch (error) {
            console.error('Error adding to drinkcart:', error);
            throw error;
        }
    },
    async requestDrinkcartListToDjango({ commit }) {
        try {
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                throw new Error('User token not found');
            }

            const requestData = {
                userToken
            };

            console.log('requestDrinkcartListToDjango requestData:', requestData);

            const response = await axiosInst.djangoAxiosInst.post('/drinkcart/list', requestData);
            return response.data;
        } catch (error) {
            console.error('Error fetching drinkcart list:', error);
            throw error;
        }
    },
};

export default actions;