import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './sass/index.css'
import { Provider } from "react-redux";
import { store, persistor } from "./components/Form/FormSign/Redux/store"
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);