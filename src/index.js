import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import STORE from './components/store';


ReactDOM.render(<App store={STORE}/>, document.getElementById('root'));