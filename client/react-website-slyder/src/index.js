import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './sass/index.css'
import { Provider } from "react-redux";
import store from "./components/Form/FormSign/Redux/store"

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);