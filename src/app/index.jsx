import React from 'react';
import ReactDom from 'react-dom';
import {Main} from './components/Main'
import { store } from './store';

ReactDom.render(
    <Main />,
    document.getElementById('app')
)