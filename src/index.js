import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunkMiddleware from 'redux-thunk';
import {CssBaseline} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";

import App from './App';
import reducer from './store/reduser';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <CssBaseline />
            <App />
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
