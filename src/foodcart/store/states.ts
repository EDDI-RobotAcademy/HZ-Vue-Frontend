export interface FoodcartState {
    foodcartItemList: FoodcartItem[];
}

export interface FoodcartItem {
    foodId: number;
    foodName: string;
    foodPrice: number;
    quantity: number;
}

const state: FoodcartState = {
    foodcartItemList: [],
}

export default state