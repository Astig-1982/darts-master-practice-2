import { combineReducers } from 'redux';
import finalStatsReducer from './final-stats/final-stats.reducer.js';
import nameReducer from './name/name.reducer.js';
import statsReducer from './stats/stats.reducer.js';
import targetReducer from './target/target.reducer.js';

export default combineReducers({
    target: targetReducer,
    name: nameReducer,
    stats: statsReducer,
    finalStats: finalStatsReducer
});