import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@src/application/App';
import {HelmetProvider} from "react-helmet-async";
import '@src/index.css'
import {CookiesProvider} from "react-cookie";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <CookiesProvider defaultSetOptions={{path: '/'}}>
        <HelmetProvider>
            <App/>
        </HelmetProvider>
    </CookiesProvider>
);
