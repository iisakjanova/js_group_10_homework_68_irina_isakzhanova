import {Button, Grid, makeStyles, Paper, TextField} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    inputBlock: {
        flexGrow: 1,
    },
    addBtn: {
        marginLeft: '10px',
        alignSelf: 'center',
    },
    errorText: {
        color: 'red',
        margin: 0,
    },
}));

const AddTaskForm = props => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Grid container direction="row" component="form">
                <Grid item className={classes.inputBlock} >
                    <TextField
                        variant="outlined"
                        fullWidth
                        name="task"
                        type="text"
                        placeholder="Add new task"
                        value={props.value}
                        onChange={props.onInputChange}
                    />
                </Grid>
                <Grid item className={classes.addBtn}>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={props.onAdd}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
            <p className={classes.errorText}>{props.error}</p>
        </Paper>
    );
};

export default AddTaskForm;