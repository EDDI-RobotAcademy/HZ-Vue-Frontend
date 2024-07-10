export interface CartState {
    foodcartItemList: FoodcartItem[];
    drinkcartItemList: DrinkcartItem[];
}

export interface FoodcartItem {
    foodId: number;
    foodName: string;
    foodPrice: number;
    foodquantity: number;
}

export interface DrinkcartItem {
    drinkId: number;
    drinkName: string;
    drinkPrice: number;
    drinkquantity: number;
}

const state: CartState = {
    foodcartItemList: [],
    drinkcartItemList: []
}

export default state