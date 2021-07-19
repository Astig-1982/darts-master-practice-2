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