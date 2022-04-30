import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store, persistor } from "./components/Form/FormSign/Redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import { DarkModeContextProvider } from "./components/Context/darkModeContext"

ReactDOM.render(
    <Provider store={store}>
        <DarkModeContextProvider>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </DarkModeContextProvider>
    </Provider>,
    document.getElementById('root')
);