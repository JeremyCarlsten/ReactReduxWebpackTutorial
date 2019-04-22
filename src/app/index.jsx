import React from 'react';
import ReactDom from 'react-dom';
import {Main} from './components/main'
import { store } from './store';

ReactDom.render(
    <Main />,
    document.getElementById('app')
)