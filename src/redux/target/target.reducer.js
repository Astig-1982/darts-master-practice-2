const INITIAL_STATE = {
    currentTarget: 19
}

const targetReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_TARGET':
            return {
                ...state, // the rest of the state spread
                currentTarget: action.payload
            }

        default:
            return state;
    };
};

export default targetReducer;

