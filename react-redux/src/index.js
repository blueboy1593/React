import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
// react-redux에서 제공하는 component임
import store from './store';

ReactDOM.render(
    // 이 프로바이더를 통해서 store를 일일히 import할 필요가 없어지는 것. Magic이래....;;
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
