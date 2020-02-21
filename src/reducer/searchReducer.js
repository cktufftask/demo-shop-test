import { SEARCH , FILTER } from '../action/searchAction';
import products from "../components/cartData";


const initialState = {
    items:products,
    addedItems: [],
    total: 0
};


export default function seachReducer(state = initialState, action) {
    console.log(state,"state");
    switch (action.type) {
        case SEARCH: {
            const { value } = action;
            state={...state, items:products}
            const item = state.items.filter((val) => val.name === value);
            return {
                ...state, 
                items: item 
            };
        }
        case FILTER: {
            const { value } = action;
            state={...state, items:products}
            const item = state.items.filter((val) => val.price > value[0] && val.price < value[1]  );
            return {
                ...state, 
                items: item 
            };
        }
        default:
            return state;
    }
}