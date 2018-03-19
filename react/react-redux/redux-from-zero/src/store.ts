import { createStore, combineReducers, StoreEnhancer } from 'redux';

import { RestaurantState, restaurantReducer } from './reducers/restaurant-reducer';
import { LocationState, locationReducer } from './reducers/location-reducer';
import { reducer as formReducer } from 'redux-form';

export interface RootState {
    restaurant: RestaurantState;
    location: LocationState;
}
declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<RootState>; }
}

export const store = createStore(
    combineReducers({
        restaurant: restaurantReducer,
        location: locationReducer,
        form: formReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);