import {fetchProductPending, fetchProductSuccess, fetchProductError} from '../action/productAction';

function fetchProduct() {
    debugger;
    return dispatch => {
        dispatch(fetchProductPending());
        fetch('https://api.myjson.com/bins/qzuzi')
        .then(res => res.json())
        .then(res => {
            console.log(res.json());
            if(res.error) {
                throw(res.error);
            }
            console.log("dfgggggggggggggg",res);
            dispatch(fetchProductSuccess(res.product));
            return res.product;
        })
        .catch(error => {
            dispatch(fetchProductError(error));
        })
    }
}

export default fetchProduct;