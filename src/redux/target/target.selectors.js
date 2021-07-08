import { createSelector } from 'reselect';

const selectTarget = state => state.target;

export const selectCurrentTarget = createSelector(
    [selectTarget], 
    target => target.currentTarget
);

export const allTargets = createSelector(
    [selectTarget],
    target => target.allTargets
)

//export const selectTheTarget = createSelector(
//    [selectCurrentTarget],
//    theTarget => document.querySelector(theTarget).value
//);