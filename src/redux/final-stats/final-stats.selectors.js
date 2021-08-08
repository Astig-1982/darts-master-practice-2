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
    // this selector returns the item (array) from the allSquareResults wich sum is the heighest

    // it takes the ouput of allSquareResult selector (which is the allSquareResults array) and it applies find() method
    // the find() method will return the item from allSquareResults array whose sum equals the heighest sum from allSumResults array 
    [allSquareResults, allSumResults],  
    (allSquareResults, allSumResults) => allSquareResults.find((item) => {
        return item.reduce(function (a, b) { return a + b; }, 0) === Math.max(...allSumResults)
    }) // basically the output of this selector will be the item found by find() method applied to allSquareResults
);

