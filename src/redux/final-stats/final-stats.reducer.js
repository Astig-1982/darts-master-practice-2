import finalStatsActionTypes from "./final-stats.types";

const INITIAL_STATE = {
    gamesFinalStats: [],
    allTheStats: {
        theTarget: '',
        theGameSet: '',
        theStatsAverage: '',
    },
    allSquareResults: [], // this array should contain all squareResults arrays from stats.reducer state
    sumOfAllSquareResultsItems: [] // this array should contain the sums of all squareResults items (the squareResults arrays) contained by allSquareResults array
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

        case finalStatsActionTypes.THE_SET:
            return {
                ...state, // the rest of the state spread
                allTheStats: {
                    ...state.allTheStats,
                    theGameSet: action.payload
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

        case finalStatsActionTypes.PUSH_ALL_SQUARE_RESULTS:
            return {
                ...state, // the rest of the state spread
                allSquareResults: [...state.allSquareResults, action.payload]
            }
    
        default:
            return state;
    };
};

export default finalStatsReducer;