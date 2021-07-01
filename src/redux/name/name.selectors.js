import { createSelector } from 'reselect';

const selectName = state => state.name;

export const selectTheName = createSelector(
    [selectName], 
    name => name.theName
);