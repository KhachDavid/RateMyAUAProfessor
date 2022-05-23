import {combineReducers} from "redux";
import professors from './professors';
import auth from '../reducers/auth';


export default combineReducers({
    professors, auth
});