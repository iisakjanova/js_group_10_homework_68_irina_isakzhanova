import React from 'react';
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    toolbar: {
        justifyContent: 'center',
    },
    title: {
        marginRight: '50px',
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

const Layout = ({children}) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/counter">Counter</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/toDo">To do list</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            {children}
        </>
    );
};

export default Layout;