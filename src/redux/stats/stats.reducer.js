import statsActionTypes from "./stats.types";

const INITIAL_STATE = {
    squareResults: []
};

const statsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case statsActionTypes.SET_SQUARE_RESULTS:
            return {
                ...state, // the rest of the state spread
                squareResults: [...state.squareResults, action.payload]
            }

        default:
            return state;
    };
};

export default statsReducer;

