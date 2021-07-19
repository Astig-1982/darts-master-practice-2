import finalStatsActionTypes from "./final-stats.types";

const INITIAL_STATE = {
    gamesFinalStats: [],
    allTheStats: {
        theTarget: '',
        theStatsAverage: ''
    }
}

const finalStatsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case finalStatsActionTypes.THE_TARGET:
            return {
                ...state, // the rest of the state spread
                allTheStats: {
                    ...state.allTheStats,
                    theTarget: action.payload
                }
            }

        case finalStatsActionTypes.SET_AVERAGE:
            return {
                ...state, // the rest of the state spread
                allTheStats: {
                    ...state.allTheStats,
                    theStatsAverage: action.payload
                }
            }

        case finalStatsActionTypes.FINAL_STATS:
            return {
                ...state, // the rest of the state spread
                gamesFinalStats: [...state.gamesFinalStats, state.allTheStats]
            }

        default:
            return state;
    };
};

export default finalStatsReducer;