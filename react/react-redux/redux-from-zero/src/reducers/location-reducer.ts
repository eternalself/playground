import { LocationAction, ADD_LOCATION } from './../actions/location-action';

export interface LocationState {
    locations: Models.Location[];
}

const defaultState = {
    locations: [
        {
            id: 1,
            name: 'Hong Kong'
        }
    ]
};

export const locationReducer = (state: LocationState = defaultState, action: LocationAction) => {
    switch (action.type) {
        case ADD_LOCATION:
            return {
                ...state,
                locations: state.locations.concat([{
                    id: Date.now(),
                    name: action.name
                }])
            };
        default:
            return state;
    }

};