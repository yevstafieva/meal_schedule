import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from '../reducers';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            dishes: Dishes
        })
    )
    return store;
};