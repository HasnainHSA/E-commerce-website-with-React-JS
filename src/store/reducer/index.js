import { createStore, combineReducers } from 'redux'
import ProductsReducer from './Product';
import CartReducer from './CartReducer';
const rootReducer = combineReducers({
   ProductsReducer,
   CartReducer
});

const store = createStore(rootReducer);

export default store;

