import { SET_OPEN } from '../actions/types';

const initiaState = {
    open: false
};

export default (state = initiaState, action) => {
    switch (action.type) {
        case SET_OPEN:
            return {
                ...state,
                open: !state.open,
            };

        default:
            return state;
    }
};
