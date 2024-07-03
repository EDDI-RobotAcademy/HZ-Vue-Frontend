export interface OrderState {
    foodorderList: FoodorderItem[];
    foodorder : FoodorderItem | null
    drinkorderList: DrinkorderItem[];
    drinkorder : DrinkorderItem | null
    
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
    foodorder : null,
    drinkorderList: [],
    drinkorder : null
}

export default state