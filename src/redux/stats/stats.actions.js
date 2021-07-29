export const setSquareResults = result => ({
    // this action will bring the class of the square from the the-square component 
    type: 'SET_SQUARE_RESULTS',
    payload: result
});

export const startAnewGame = () => ({
    // this action will empty the squareResults array
    type: 'START_A_NEW_GAME',
});

export const isTheValueNaN = () => ({
    // this action will be executed in the-square component, only if the parseInt(value) of the square is NaN
    type: 'IS_THE_VALUE_NAN'
});