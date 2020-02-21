import {combineReducers} from "redux";
import productReducer from "./productReducer";
import cart from "./cartReducer";
import seachReducer from './searchReducer'
// import products from "./components/cartData";


// const initState = {
//     items: products,
//     addedItems: [],
//     total: 0
// }


export default combineReducers({
    productReducer,
    cart,
    seachReducer
    
})

