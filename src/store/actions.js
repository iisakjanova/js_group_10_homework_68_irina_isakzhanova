import axiosApi from "../axiosApi";

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_FAILURE = 'FETCH_COUNTER_FAILURE';

export const SAVE_COUNTER_REQUEST = 'SAVE_COUNTER_REQUEST';
export const SAVE_COUNTER_SUCCESS = 'SAVE_COUNTER_SUCCESS';
export const SAVE_COUNTER_FAILURE = 'SAVE_COUNTER_FAILURE';

export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_FAILURE = 'GET_TASKS_FAILURE';

export const SET_TASK_DONE = 'SET_TASK_DONE';

export const increase = () => ({type: INCREASE});
export const add = value => ({type: ADD, payload: value});
export const decrease = () => ({type: DECREASE});
export const subtract = value => ({type: SUBTRACT, payload: value});

export  const fetchCounterRequest = () => ({type: FETCH_COUNTER_REQUEST});
export  const fetchCounterSuccess = counter => ({type: FETCH_COUNTER_SUCCESS, payload: counter});
export  const fetchCounterFailure = () => ({type: FETCH_COUNTER_FAILURE});

export  const saveCounterRequest = () => ({type: SAVE_COUNTER_REQUEST});
export  const saveCounterSuccess = () => ({type: SAVE_COUNTER_SUCCESS});
export  const saveCounterFailure = () => ({type: SAVE_COUNTER_FAILURE});

export  const getTasksRequest = () => ({type: GET_TASKS_REQUEST});
export  const getTasksSuccess = tasks => ({type: GET_TASKS_SUCCESS, payload: tasks});
export  const getTasksFailure = () => ({type: GET_TASKS_FAILURE});

export const setTaskDone = id => ({type: SET_TASK_DONE, payload: id});

export const fetchCounter = () => {
    return async (dispatch) => {
        dispatch(fetchCounterRequest());

        try {
            const response = await axiosApi.get('/counter.json');

            if (response.data === null) {
                dispatch(fetchCounterSuccess(0));
            } else {
                dispatch(fetchCounterSuccess(response.data));
            }
        } catch (e) {
            dispatch(fetchCounterFailure());
        }
    };
};

export const saveCounter = () => {
    return async (dispatch, getState) => {
        const currentCounter = getState().counter;
        dispatch(saveCounterRequest());

        try {
            await axiosApi.put('/counter.json', currentCounter);
            dispatch(saveCounterSuccess());
        } catch (e) {
            dispatch(saveCounterFailure());
        }
    };
};

export const getTasks = () => {
    return async (dispatch) => {
        dispatch(getTasksRequest());

        try {
            const response = await axiosApi.get('/tasks.json');

            if (response.data === null) {
                dispatch(getTasksSuccess(''));
            } else {
                dispatch(getTasksSuccess(response.data));
            }
        } catch (e) {
            dispatch(getTasksFailure());
        }
    };
};