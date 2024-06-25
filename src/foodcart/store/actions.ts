import { ActionContext } from "vuex"
import {FoodcartItem, FoodcartState} from "./states"
import { AxiosResponse } from "axios"
import axiosInst from "@/utility/axiosInstance"
import { REQUEST_FOODCART_LIST_TO_DJANGO } from "./mutation-types"

export type FoodcartActions = {
    requestAddFoodcartToDjango(
        context: ActionContext<FoodcartState, any>,
        foodcartData: FoodcartItem
    ): Promise<AxiosResponse>;

    requestFoodcartListToDjango(
        context: ActionContext<FoodcartState, any>
    ): Promise<AxiosResponse>;
}

const actions: FoodcartActions = {
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
};

export default actions;