import { RestaurantAction } from '../actions/restaurant-action';

export interface RestaurantState {
    restaurants: Models.Restaurant[];
}

const defaultState = {
    restaurants: []
};

export const restaurantReducer = (state: RestaurantState = defaultState, action: RestaurantAction) => {
    return state;
};