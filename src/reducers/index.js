import * as ActionTypes from '../actions/ActionTypes'

export const Dishes = (state = {dish: null}, action) => {
    switch (action.type) {
        case ActionTypes.DISH_ADD:
            return {...state, dish: action.payload};
        case ActionTypes.DISH_DELETE:
            return {};
        default: return state;
    }
}
