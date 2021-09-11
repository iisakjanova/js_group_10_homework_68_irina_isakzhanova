import {
    ADD,
    DECREASE,
    INCREASE,
    SUBTRACT,
    FETCH_COUNTER_FAILURE,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS,
    SAVE_COUNTER_FAILURE,
    SAVE_COUNTER_REQUEST,
    SAVE_COUNTER_SUCCESS,
    GET_TASKS_FAILURE,
    GET_TASKS_REQUEST,
    GET_TASKS_SUCCESS,
}
from "./actions";

const initialState = {
    counter: 0,
    loading: false,
    tasks: {},
    currentTask: ''
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
        case SAVE_COUNTER_REQUEST:
            return {...state, loading: true};
        case SAVE_COUNTER_SUCCESS:
            return {...state, loading: false, error: null};
        case SAVE_COUNTER_FAILURE:
            return {...state, loading: false, error: action.payload};
        case GET_TASKS_REQUEST:
            return {...state, loading: true};
        case GET_TASKS_SUCCESS:
            return {...state, loading: false, error: null, tasks: action.payload};
        case GET_TASKS_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default reducer;