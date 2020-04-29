import { createStore, combineReducers } from 'redux';
import { stockReducer, cartReducer } from './reducers';

const allReducers = combineReducers({
    stock: stockReducer,
    cart: cartReducer
});

export const store = createStore(allReducers);

store.subscribe(() => console.log(store.getState()));
