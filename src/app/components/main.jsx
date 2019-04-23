import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store'
import { history } from '../store/history';
import { ConnectedDashboard } from './Dashboard';
import { ConnectedNavigation } from './Navigation';
import { Router, Route} from 'react-router-dom';
import { ConnectedTaskDetail } from './TaskDetail';

export const Main = () => (
    <div>
        <Router history={history}>
            <Provider store={store}>
                <div>
                    <ConnectedNavigation />
                    <Route exact path='/dashboard' render={ () => (<ConnectedDashboard />)} />
                    <Route exact path='/task/:id' render={ ({match}) => (<ConnectedTaskDetail match={match}/>)} />
                </div>
            </Provider>
        </Router>
    </div>
); 