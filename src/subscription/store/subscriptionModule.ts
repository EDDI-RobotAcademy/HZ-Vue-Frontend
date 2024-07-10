import actions, { SubscriptionActions } from "./actions";
import state, { SubscriptionState } from "./states";

export interface SubscriptionModule {
    namespaced: true;
    state: SubscriptionState;
    actions: SubscriptionActions;
}

const subscriptionModule: SubscriptionModule = {
    namespaced: true,
    state,
    actions,
};

export default subscriptionModule;
