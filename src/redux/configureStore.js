import {createStore, combineReducers, applyMiddleware} from 'redux';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            dishes: null
        })
    )
    return store;
};