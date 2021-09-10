import {
    ADD,
    DECREASE,
    FETCH_COUNTER_FAILURE,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS,
    INCREASE,
    SUBTRACT
} from "./actions";

const initialState = {
    counter: 0,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {...state, counter: state.counter + 1};
        case SUBTRACT:
            return {...state, counter: state.counter - action.payload};
        case ADD:
            return {...state, counter: state.counter + action.payload};
        case DECREASE:
            return {...state, counter: state.counter - 1};
        case FETCH_COUNTER_REQUEST:
            return {...state, loading: true};
        case FETCH_COUNTER_SUCCESS:
            return {...state, loading: false, error: null, counter: action.payload};
        case FETCH_COUNTER_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default reducer;