import targetActionTypes from "./target.types";

const INITIAL_STATE = {
    allTargets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 18, 19, 20, 'Bull'],
    currentTarget: null
}

const targetReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case targetActionTypes.SET_TARGET:
            return {
                ...state, // the rest of the state spread
                currentTarget: action.payload
            }

        default:
            return state;
    };
};

export default targetReducer;