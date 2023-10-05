import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './state/store.ts';
import App from './App.tsx';
import { ThemeProvider } from 'convertupleads-theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.Fragment>
        <ThemeProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.Fragment>
);
