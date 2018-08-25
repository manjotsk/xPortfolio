import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MainRouter from "./modules/MainRouter";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
