import './Task.css';
import {Checkbox, Grid, makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    text: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        margin: 0,
        alignSelf: "center",
    },
}));

const Task = props => {
    const classes = useStyles();
    let labelClassNames = classes.text;

    if (props.done) {
        labelClassNames += ' crossed';
    }

    return (
        <Paper className={classes.root}>
            <Grid container direction="row">
                <Checkbox
                    type="checkbox"
                    onChange={props.onCheck}
                    checked={props.done}
                />
                <p className={labelClassNames}>{props.text}</p>
            </Grid>
        </Paper>
    );
};

export default Task;
