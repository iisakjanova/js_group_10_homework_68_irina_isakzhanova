import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Backdrop, Button, CircularProgress, makeStyles, Typography} from "@material-ui/core";

import {add, decrease, fetchCounter, increase, saveCounter, subtract} from "../../store/actions";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
    },
    number: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Counter = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {counter, loading} = useSelector(state => state);

    useEffect(() =>{
        dispatch(fetchCounter());
    }, [dispatch]);

    const handleIncrease = () => {
        dispatch(increase());
        dispatch(saveCounter());
    };

    const handleDecrease = () => {
        dispatch(decrease());
        dispatch(saveCounter());
    };

    const handleAdd = () => {
        dispatch(add(5));
        dispatch(saveCounter());
    };

    const handleSubtract = () => {
        dispatch(subtract(5));
        dispatch(saveCounter());
    };

    return (
        <div className={classes.root}>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Typography variant="h2" className={classes.number}>{counter}</Typography>
            <Button variant="contained" onClick={handleIncrease} className={classes.button}>Increase</Button>
            <Button variant="contained" onClick={handleDecrease} className={classes.button}>Decrease</Button>
            <Button variant="contained" onClick={handleAdd} className={classes.button}>Increase by 5</Button>
            <Button variant="contained" onClick={handleSubtract} className={classes.button}>Decrease by 5</Button>
        </div>
    );
};

export default Counter;