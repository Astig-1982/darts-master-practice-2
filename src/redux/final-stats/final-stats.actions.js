export const finishTheGame = () => ({
    type: 'FINAL_STATS',
});

export const setTheAverage = finalAverage => ({
    type: 'SET_AVERAGE',
    payload: finalAverage
});

export const getTheTarget = theTarget => ({
    type: 'THE_TARGET',
    payload: theTarget
});