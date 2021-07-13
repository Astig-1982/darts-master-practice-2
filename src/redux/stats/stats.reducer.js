import statsActionTypes from "./stats.types";
import { addTheResults } from "./stats.utils";
import ALL_SQUARES_DATA from "./stats.data";

const INITIAL_STATE = {
    allSquares: ALL_SQUARES_DATA,
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

