import finalStatsActionTypes from "./final-stats.types";
import { pushSum } from "./final-stats.utils";

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
            // the action.payload here is the squareResults array from stats.reducer
            // it performed in game-page component
            return {
                ...state, // the rest of the state spread
                allSquareResults: [...state.allSquareResults, action.payload]
            }

        case finalStatsActionTypes.PUSH_SUM_ALL_SQUARE_RESULTS:
            // this calculates the sum of each item (array) of allSquareResults and pushes each sum to sumOfAllSquareResultsItems array
            // it does this by seting the return of pushSum() function to sumOfAllSquareResultsItems array
            return {
                ...state, // the rest of the state spread
                sumOfAllSquareResultsItems: pushSum(state.sumOfAllSquareResultsItems, state.allSquareResults)
            }
    
        default:
            return state;
    };
};

export default finalStatsReducer;