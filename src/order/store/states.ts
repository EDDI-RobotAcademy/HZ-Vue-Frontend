export interface OrderState {
    foodorderList: FoodorderItem[];
    foodorder : FoodorderItem | null
    drinkorderList: DrinkorderItem[];
    drinkorder : DrinkorderItem | null
    purchaseData: PurchaseData | null;
}

export interface FoodorderItem {
    foodorderId: number;
    foodcartItemId: number;
    quantity: number;
    foodorderPrice: number;
}

export interface DrinkorderItem {
    drinkorderId: number;
    drinkcartItemId: number;
    quantity: number;
    drinkorderPrice: number;
}

export interface PurchaseData {
    purchase: {
        id: number;
        purchase_date: string;
        account: {
            id: number;
            loginType: string;
            roleType: string;
        };
    };
    foodorder: {
        id: number;
        status: string;
        created_date: string;
    };
    drinkorder: {
        id: number;
        status: string;
        created_date: string;
    };
}

const state: OrderState = {
    foodorderList: [],
    foodorder : null,
    drinkorderList: [],
    drinkorder : null,
    purchaseData: null
}

export default state