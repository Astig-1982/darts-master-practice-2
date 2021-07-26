export const pushSum = (sumOfAllSquareResultsItems, allSquareResults, theSum) => {
    //this calculates the sum of each item (array) of allSquareResults and pushes each sum to sumOfAllSquareResultsItems array
    allSquareResults.forEach((item) => {
        theSum = item.reduce(function (a, b) { return a + b; }, 0)
    });
    return [...sumOfAllSquareResultsItems, theSum]
};