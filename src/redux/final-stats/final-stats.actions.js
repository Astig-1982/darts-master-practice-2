export const finishTheGame = () => ({
    type: 'FINAL_STATS',
});

export const getTheTarget = theTarget => ({
    type: 'THE_TARGET',
    payload: theTarget
});

export const getTheSetNumber = gameSet => ({
    type: 'THE_SET',
    payload: gameSet
});

export const setTheAverage = finalAverage => ({
    type: 'SET_AVERAGE',
    payload: finalAverage
});

export const pushAllSquareResults = squareResults => ({
    type: 'PUSH_ALL_SQUARE_RESULTS',
    payload: squareResults
});

export const pushSumAllSquareResults = squareResults => ({
    type: 'PUSH_SUM_ALL_SQUARE_RESULTS'
});