import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store'
import { history } from '../store/history';
import { ConnectedDashboard } from './Dashboard';
import { Router, Route} from 'react-router-dom';

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <Route exact path='/dashboard' render={ () => (<ConnectedDashboard />)} />
        </Provider>
    </Router>
); 