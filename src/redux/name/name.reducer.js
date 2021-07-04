import nameActionTypes from "./name.types";

const INITIAL_STATE = {
    theName: null
}

const nameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case nameActionTypes.SET_NAME:
            return {
                ...state, // the rest of the state spread
                theName: action.payload
            }

        default:
            return state;
    };
};

export default nameReducer;

