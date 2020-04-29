export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

// Action creators
// Return plain JS objects (action)
export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: {
            ...item
        }
    }
}

export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: {
            ...item
        }
    }
}
