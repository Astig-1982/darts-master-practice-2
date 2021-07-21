import { createSelector } from 'reselect';

const getResults = state => state.stats

export const getTheResults = createSelector(
    [getResults], 
    results => results.squareResults
);

export const getTheSquares = createSelector(
    [getResults], 
    results => results.allSquares
);

export const getTheValue = createSelector(
    [getResults], 
    results => results.theValue
);

export const getAverage = createSelector(
    [getTheResults], 
    results => { 
        if (results.length) {
            // this function calculates the average of the items in squareResults array and rounds up the result to 1 decimal
            const result = results.reduce((a,b) => a + b, 0) / results.length
            const roundResult = result.toFixed(1)
            return roundResult
        } else {
            // it returns 0 if there are no items in the squareResults array
            return 0
        };
    }
);

// const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length