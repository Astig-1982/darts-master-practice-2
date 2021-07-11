import { createSelector } from 'reselect';

const getResults = state => state.stats

export const getTheResults = createSelector(
    [getResults], 
    results => results.squareResults
);

export const getAverage = createSelector(
    [getTheResults], 
    results => results.reduce((a,b) => a + b, 0) / results.length
);

// const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length