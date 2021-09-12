import {Checkbox, Grid, IconButton, makeStyles, Paper} from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Task.css';

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
    deleteBtn: {
        marginLeft: "auto",
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
                <IconButton className={classes.deleteBtn} onClick={props.onRemove}>
                    <DeleteForeverIcon/>
                </IconButton>
            </Grid>
        </Paper>
    );
};

export default Task;
