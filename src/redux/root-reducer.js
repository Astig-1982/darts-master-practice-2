import { combineReducers } from 'redux';
import targetReducer from './target/target.reducer.js';

export default combineReducers({
    target: targetReducer
});