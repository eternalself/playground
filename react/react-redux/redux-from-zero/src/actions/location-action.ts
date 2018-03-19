export const ADD_LOCATION = 'ADD_LOCATION';
export type ADD_LOCATION = 'ADD_LOCATION';

export interface AddLocationAction {
    type: ADD_LOCATION;
    name: string;
}

export type LocationAction = AddLocationAction;

export function addLocation(name: string): AddLocationAction {
    return {
        type: ADD_LOCATION,
        name: name
    };
}

