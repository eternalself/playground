export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export type ADD_RESTAURANT = 'ADD_RESTAURANT';

export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';
export type REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';

export const ADD_TAG_TO_RESTAURANT = 'ADD_TAG_TO_RESTAURANT';
export type ADD_TAG_TO_RESTAURANT = 'ADD_TAG_TO_RESTAURANT';

export const MOVE_LOCATION_OF_RESTAURANT = 'MOVE_LOCATION_OF_RESTAURANT';
export type MOVE_LOCATION_OF_RESTAURANT = 'MOVE_LOCATION_OF_RESTAURANT';

export interface AddRestaurantAction {
    type: ADD_RESTAURANT;
    name: string;
    locationId: number;
    tags: string[];
}

export interface RemoveRestaurantAction {
    type: REMOVE_RESTAURANT;
    id: number;
}

export interface AddTagToRestaurantAction {
    type: ADD_TAG_TO_RESTAURANT;
    id: number;
    tag: string;
}

export interface MoveLocationOfRestaurantAction {
    type: MOVE_LOCATION_OF_RESTAURANT;
    id: number;
    tag: string;
    locationId: number;
}

export type RestaurantAction = AddRestaurantAction | RemoveRestaurantAction
    | AddTagToRestaurantAction | MoveLocationOfRestaurantAction;
