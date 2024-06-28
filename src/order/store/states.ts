export interface OrderState {
    foodorderList: FoodorderItem[];
    drinkorderList: DrinkorderItem[];
//     loading: boolean;
//     error: string | null;
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

const state: OrderState = {
    foodorderList: [],
    drinkorderList: [],
}

export default state