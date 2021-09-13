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

export const ADD_CURRENT_TASK = 'ADD_CURRENT_TASK';
export const CLEAR_CURRENT_TASK = 'CLEAR_CURRENT_TASK';

export const ADD_TASK_ERROR = 'ADD_TASK_ERROR';

export const SAVE_TASK_REQUEST = 'SAVE_TASK_REQUEST';
export const SAVE_TASK_SUCCESS = 'SAVE_TASK_SUCCESS';
export const SAVE_TASK_FAILURE = 'SAVE_TASK_FAILURE';

export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_FAILURE = 'GET_TASKS_FAILURE';

export const SET_TASK_DONE = 'SET_TASK_DONE';

export const REMOVE_TASK_REQUEST = 'REMOVE_TASK_REQUEST';
export const REMOVE_TASK_SUCCESS = 'REMOVE_TASK_SUCCESS';
export const REMOVE_TASK_FAILURE = 'REMOVE_TASK_FAILURE';

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

export const addCurrentTask = text => ({type: ADD_CURRENT_TASK, payload: text});
export const clearCurrentTask = () => ({type: CLEAR_CURRENT_TASK});

export const setAddTaskError = error => ({type: ADD_TASK_ERROR, payload: error});

export  const saveTaskRequest = () => ({type: SAVE_TASK_REQUEST});
export  const saveTaskSuccess = task => ({type: SAVE_TASK_SUCCESS, payload: task});
export  const saveTaskFailure = () => ({type: SAVE_TASK_FAILURE});

export  const getTasksRequest = () => ({type: GET_TASKS_REQUEST});
export  const getTasksSuccess = tasks => ({type: GET_TASKS_SUCCESS, payload: tasks});
export  const getTasksFailure = () => ({type: GET_TASKS_FAILURE});

export const setTaskDone = id => ({type: SET_TASK_DONE, payload: id});

export const removeTaskRequest = id => ({type: REMOVE_TASK_REQUEST, payload: id});
export const removeTaskSuccess = () => ({type: REMOVE_TASK_SUCCESS});
export const removeTaskFailure = () => ({type: REMOVE_TASK_FAILURE});

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
            if (currentCounter === 0) {
                await axiosApi.put('/counter.json', '0');
            } else {
                await axiosApi.put('/counter.json', currentCounter);
            }

            dispatch(saveCounterSuccess());
        } catch (e) {
            dispatch(saveCounterFailure());
        }
    };
};

export const saveTask = () => {
    return async (dispatch, getState) => {
        const currentTask = getState().currentTask;

        if (currentTask) {
            dispatch(saveTaskRequest());

            try {
                await axiosApi.post('/tasks.json', {text: currentTask, done: false});
                dispatch(saveTaskSuccess());
                dispatch(setAddTaskError(''));
                dispatch(getTasks());
                dispatch(clearCurrentTask());
            } catch (e) {
                dispatch(saveTaskFailure());
            }
        } else {
            dispatch(setAddTaskError('* Enter a task'));
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

export const removeTask = (id) => {
    return async (dispatch) => {
        dispatch(removeTaskRequest(id));

        try {
            await axiosApi.delete('/tasks/' + id + '.json');
            dispatch(removeTaskSuccess());
        } catch (e) {
            dispatch(removeTaskFailure());
        }
    };
};