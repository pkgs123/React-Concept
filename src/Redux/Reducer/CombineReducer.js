import {combineReducers} from 'redux';
import Reducer from './Reducer';
import EmpReducer from './EmpReducer';

let combineReducer = combineReducers({Reducer:Reducer,EmpReducer:EmpReducer});
export default combineReducer;