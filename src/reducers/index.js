import * as ActionTypes from '../actions/ActionTypes'

export const Dishes = (state = {dish: [], nextId:1}, action) => {
    switch (action.type) {
        case ActionTypes.DISH_ADD:
            const newDish = {...action.payload, id: state.nextId}
            return {...state, dish: state.dish.concat([newDish]), nextId: state.nextId+1};
        case ActionTypes.DISH_DELETE:
            return {};
        default: return state;
    }
}
