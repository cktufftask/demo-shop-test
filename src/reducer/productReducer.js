import {FETCH_PRODUCT_PENDING, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR} from '../action/productAction';

const initialState = {
    pending: false,
    items: [],
    error: null
}

export default function productReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCT_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                pending: false,
                items: action.payload
            }
        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getProduct = state => state.items;
export const getProductPending = state => state.pending;
export const getProductError = state => state.error;