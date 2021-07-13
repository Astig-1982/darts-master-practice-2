import { createSelector } from 'reselect';

const showStats = state => state.finalStats;

export const showFinalStats = createSelector(
    [showStats], 
    finalStats => finalStats.gamesFinalStats
);