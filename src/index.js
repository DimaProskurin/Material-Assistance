import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Header} from "./components/header";
import MainRouter from './routes';
import * as serviceWorker from './serviceWorker';

const render = () => ReactDOM.render(
    <BrowserRouter>
        <div style={{backgroundColor: "#fafbfc"}}>
            <Header/>
            <MainRouter/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
