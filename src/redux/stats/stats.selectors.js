import { createSelector } from 'reselect';

const getResults = state => state.stats

export const getTheResults = createSelector(
    [getResults], 
    results => results.squareResults
);