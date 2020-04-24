import  * as ActionTypes from './ActionTypes';

export const addDish = dish => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.DISH_ADD,
            payload: dish
        })
    }
}

export const deleteDish = dish => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.DISH_DELETE, 
            payload: dish
        })
    }
    
}