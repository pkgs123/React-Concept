import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './Redux/Store';
const provider = <Provider store={store}>
    <App/>
</Provider>

ReactDom.render(provider,document.getElementById('root'));