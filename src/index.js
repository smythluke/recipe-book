import React from 'react';
import ReactDOM from 'react-dom';
import AppWithAuth from './AppWithAuth';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
Amplify.configure(awsConfig);

ReactDOM.render(<AppWithAuth />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
