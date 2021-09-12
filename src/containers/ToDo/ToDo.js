import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Grid, makeStyles} from "@material-ui/core";

import Task from "../../components/Task/Task";
import {getTasks, removeTask, setTaskDone} from "../../store/actions";
import './ToDo.css';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
    },
}));

const ToDo = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const handleCheckTask = id => {
        dispatch(setTaskDone(id));
    };

    const handleRemoveTask = async id => {
        await dispatch(removeTask(id));
        dispatch(getTasks());
    };

    return (
        <div className={classes.root}>
            <Grid container direction="column" spacing={2}>
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
