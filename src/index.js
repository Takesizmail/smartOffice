import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";


import App from './components/App';
import {SmartOfficeApiProvider} from "./components/smart-office-api-context";
import store from "./store/store";
import SmartOfficeApi from "./services/smart-office-api";

const smartOfficeApi = new SmartOfficeApi();

ReactDOM.render(
    <Provider store={store}>
        <SmartOfficeApiProvider value={smartOfficeApi}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SmartOfficeApiProvider>
    </Provider>
    , document.getElementById('root'));

