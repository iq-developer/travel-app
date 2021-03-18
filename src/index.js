import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./redux/redux";
import {HashRouter} from 'react-router-dom';

import './i18n'
import AppContainer from "./Containers/AppContainer";

ReactDOM.render(
    <HashRouter>
        <Provider store={store} >
            <Suspense fallback={<div>Loading...</div>}>
                <AppContainer  />
            </Suspense>
        </Provider>
    </HashRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
