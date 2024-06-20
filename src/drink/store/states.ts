export interface DrinkState {
    drinkList: Drink[]
    drink: Drink | null
}

export interface Drink {
    drinkId: number
    drinkName: string
    drinkType: string
    drinkDescription: string
    drinkPrice: string
    registeredDate: string
    updatedDate: string
}

const state: DrinkState = {
    drinkList: [],
    drink: null,
}

export default state