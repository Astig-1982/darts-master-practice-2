import { createSelector } from 'reselect';

const selectTarget = state => state.target;

export const selectCurrentTarget = createSelector(
    [selectTarget], 
    target => target.currentTarget
);

export default selectCurrentTarget;

