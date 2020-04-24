import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Dishes } from '../reducers';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            dishes: Dishes
        }),
        { 
            dishes: {
                dish:[],
                nextId:1
            } 
        },
        applyMiddleware(logger, thunk)
    )
    return store;
};