export const FETCH_PRODUCT_PENDING = 'FETCH_PRODUCT_PENDING';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

export function fetchProductPending() {
    return {
        type: FETCH_PRODUCT_PENDING
    }
}

export function fetchProductSuccess(product) {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        product: product
    }
}

export function fetchProductError(error) {
    return {
        type: FETCH_PRODUCT_ERROR,
        error: error
    }
}