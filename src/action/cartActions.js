

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const TOTAL_DISCOUNT = "TOTAL_DISCOUNT";
export const TOTAL_QUANTITY = "TOTAL_QUANTITY";


//add cart action
export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        id
    };
};
//remove item action

export const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        id
    };
};
//subtract qt action
export const subtractQuantity = id => {
    return {
        type: SUB_QUANTITY,
        id
    };
};
//add qt action
export const addQuantity = id => {
    return {
        type: ADD_QUANTITY,
        id
    };
};
export const totalDiscount = id => {
    return {
        type: TOTAL_DISCOUNT,
        id
    };
};

export const totalQuantity = id => {
    return {
        type: TOTAL_QUANTITY,
        id
    };
};