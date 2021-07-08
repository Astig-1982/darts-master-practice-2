import { combineReducers } from 'redux';
import nameReducer from './name/name.reducer.js';
import statsReducer from './stats/stats.reducer.js';
import targetReducer from './target/target.reducer.js';

export default combineReducers({
    target: targetReducer,
    name: nameReducer,
    stats: statsReducer
});