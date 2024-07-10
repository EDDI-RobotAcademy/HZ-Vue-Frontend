import { ActionContext } from "vuex";
import { Subscription, SubscriptionState } from "./states";
import { AxiosResponse } from "axios";
import axiosInst from "@/utility/axiosInstance";

export type SubscriptionActions = {
    requestCreateNewSubscriptionToDjango(
        context: ActionContext<SubscriptionState, any>,
        subscriptionInfo: {
            startDate: string;
            endDate: string;
            subscription_id: string;
        }
    ): Promise<void>;
};

const actions: SubscriptionActions = {
    async requestCreateNewSubscriptionToDjango(
        context: ActionContext<any, any>,
        subscriptionInfo: {
            startDate: string;
            endDate: string;
            subscription_id: string;
        }
    ): Promise<void> {
        try {
            const userToken = localStorage.getItem("userToken");
            if (!userToken) {
                throw new Error("User token not found");
            }

            const requestData = {
                ...subscriptionInfo,
                userToken,
            };

            await axiosInst.djangoAxiosInst.post(
                "/subscription_manage/register",
                requestData
            );
        } catch (error) {
            console.error("신규 구독 생성 실패:", error);
            throw error;
        }
    },
};

export default actions;
