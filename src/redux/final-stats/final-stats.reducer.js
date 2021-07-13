import finalStatsActionTypes from "./final-stats.types";

const INITIAL_STATE = {
    gamesFinalStats: []
}

const finalStatsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case finalStatsActionTypes.FINAL_STATS:
            return {
                ...state, // the rest of the state spread
                gamesFinalStats: [...state.gamesFinalStats, action.payload]
            }

        default:
            return state;
    };
};

export default finalStatsReducer;