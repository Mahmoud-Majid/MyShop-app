import { ActionTypes } from "../constants/action-types"


const initialState = {
    products: [],
    // selectedProduct: {}
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        // case 'SELECTED_PRODUCT':
        //     return {
        //         ...state,
        //         selectedProduct: action.payload
        //     }
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case 'SELECTED_PRODUCT':
            return { ...state, ...payload }
        case 'REMOVE_SELECTED_PRODUCT':
            return {}
        default:
            return state;
    }
}

