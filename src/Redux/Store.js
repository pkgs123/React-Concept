import {createStore} from 'redux';
import CombineReducer from './Reducer/CombineReducer';

let storeResult = createStore(CombineReducer);

export default storeResult;