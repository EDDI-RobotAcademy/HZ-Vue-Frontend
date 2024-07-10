export interface SubscriptionState {
    subscription: Subscription | null;
}

export interface Subscription {
    startDate: string;
    endDate: string;
    subscription_id: string;
}

const state: SubscriptionState = {
    subscription: null,
};

export default state;
