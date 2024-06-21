export interface FoodState {
    foodList: Food[]
    food: Food | null
}

export interface Food {
    foodId: number
    foodName: string
    foodType: string
    foodDescription: string
    foodPrice: string
    registeredDate: string
    updatedDate: string
}

const state: FoodState = {
    foodList: [],
    food: null,
}

export default state