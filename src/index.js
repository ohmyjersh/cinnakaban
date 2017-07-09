import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import {reducer} from './state'

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root'));
registerServiceWorker();
