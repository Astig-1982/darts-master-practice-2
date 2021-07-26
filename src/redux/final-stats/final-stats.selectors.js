import { createSelector } from 'reselect';

const showStats = state => state.finalStats;

export const showFinalStats = createSelector(
    [showStats], 
    finalStats => finalStats.gamesFinalStats
);

export const allSquareResults = createSelector(
    [showStats], 
    finalStats => finalStats.allSquareResults
);

export const allSumResults = createSelector(
    [showStats], 
    finalStats => finalStats.sumOfAllSquareResultsItems
);

export const theHeighestArray = createSelector(
    [allSquareResults, allSumResults], 
    (allSquareResults, allSumResults) => allSquareResults.find((item) => {
        return item.reduce(function (a, b) { return a + b; }, 0) === Math.max(...allSumResults)
    })
);

//export const theHeighestArray = createSelector(
//    [showStats, allSumResults], 
//    (allSquareResults, allSumResults) => allSquareResults.allSquareResults.find((item) => {
//        return item.reduce(function (a, b) { return a + b; }, 0) === Math.max(...allSumResults)
//    })
//);

