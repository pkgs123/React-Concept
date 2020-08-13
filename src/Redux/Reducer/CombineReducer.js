import {combineReducers} from 'redux';
import Reducer from './Reducer';
import EmpReducer from './EmpReducer';
import PhotoReducer from './PhotoReducer';
let combineReducer = combineReducers({Reducer:Reducer,EmpReducer:EmpReducer,PhotoReducer:PhotoReducer});
export default combineReducer;