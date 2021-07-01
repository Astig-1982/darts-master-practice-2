const INITIAL_STATE = {
    allTargets: [1,2,3,4,5,6,7,8,9,10],
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

