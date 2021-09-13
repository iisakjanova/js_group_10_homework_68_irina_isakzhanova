import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Backdrop, CircularProgress, Grid, makeStyles} from "@material-ui/core";

import Task from "../../components/Task/Task";
import {addCurrentTask, getTasks, removeTask, saveDoneTask, saveTask, setTaskDone} from "../../store/actions";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const ToDo = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const loading = useSelector(state => state.loading);
    const currentTask = useSelector(state => state.currentTask);
    const error = useSelector(state => state.addTaskError);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const handleInputChange = text => {
        dispatch(addCurrentTask(text));
    };

    const handleSaveTask = async e => {
       e.preventDefault();
       await dispatch(saveTask());
    };

    const handleCheckTask = id => {
        dispatch(setTaskDone(id));
        dispatch(saveDoneTask(id));
    };

    const handleRemoveTask = async id => {
        await dispatch(removeTask(id));
        dispatch(getTasks());
    };

    return (
        <div className={classes.root}>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <AddTaskForm
                        value={currentTask}
                        error={error}
                        onInputChange={e => handleInputChange(e.target.value)}
                        onAdd={e => handleSaveTask(e)}
                    />
                </Grid>
                {Object.keys(tasks).map(key => (
                    <Grid item key={key}>
                        <Task
                            text={tasks[key].text}
                            done={tasks[key].done}
                            onCheck={() => handleCheckTask(key)}
                            onRemove={() => handleRemoveTask(key)}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ToDo;
