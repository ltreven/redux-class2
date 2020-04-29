import { ADD_ITEM, REMOVE_ITEM } from './actions';

// Reducers are pure functions

export function cartReducer (state = [], action) {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
    
        case REMOVE_ITEM:
            // action.payload: {
            //    id: 1,
            //    name: "Platan",
            //    price: 2
            //}
            return state.filter(item => item.id !== action.payload.id);

        default:
            return state;

    }
}
const initialStock = [
    {
        id: 1,
        name: "Platan",
        price: 2
    },
    {
        id: 2,
        name: "Poma",
        price: 3
    },
    {
        id: 3,
        name: "Tomaquet",
        price: 4
    },
    {
        id: 4,
        name: "Pastanaga",
        price: 5
    },
];

export function stockReducer (state = initialStock, action) {
    switch (action.type) {
        case ADD_ITEM:
            return state.filter(item => item.id !== action.payload.id);
    
        case REMOVE_ITEM:
            return [...state, action.payload];

        default:
            return state;
    }
}