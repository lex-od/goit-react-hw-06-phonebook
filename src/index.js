import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import './styles/global.scss';
import Phonebook from './Phonebook';
import store from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Phonebook />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
