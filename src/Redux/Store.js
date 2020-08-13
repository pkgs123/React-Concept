import {createStore,applyMiddleware} from 'redux';
import CombineReducer from './Reducer/CombineReducer';
import thunk from 'redux-thunk';

let storeResult = createStore(CombineReducer,applyMiddleware(thunk));

export default storeResult;