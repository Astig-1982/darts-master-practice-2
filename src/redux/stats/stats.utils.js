export const addTheResults = (squareResults, theClass) => {
    const theSquare = document.querySelector(`.${theClass}`);
    const thePoints = parseInt(theSquare.value);
    return [...squareResults, thePoints]
};