// Заворачиваем все приложение в файле index.js в компонент Provider и передаем
//    в store через props.
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
