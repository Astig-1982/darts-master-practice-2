import statsActionTypes from "./stats.types";
import { addTheResults } from "./stats.utils";

const INITIAL_STATE = {
    allSquares: [
        {
            id: 1,
            class: 'first',
        },
        {
            id: 2,
            class: 'second',
        },
        {
            id: 3,
            class: 'third',
        },
        {
            id: 4,
            class: 'fourth',
        },
        {
            id: 5,
            class: 'fifth',
        },
    ],
    squareResults: [],
};

const statsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case statsActionTypes.SET_SQUARE_RESULTS:
            return {
                ...state, 
                squareResults: addTheResults(state.squareResults, action.payload)
            }

        case statsActionTypes.START_A_NEW_GAME:
            return {
                ...state,
                squareResults: []
            }

        default:
            return state;
    };
};

export default statsReducer;

