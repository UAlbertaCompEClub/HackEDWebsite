import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
//import the custom bootstrap
import './webConfig.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// For IE
require('es6-promise').polyfill();
require('es6-object-assign').polyfill();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
