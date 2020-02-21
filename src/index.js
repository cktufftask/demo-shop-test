import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import   thunk  from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
//import { createBrowserHistory } from "history";
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer,undefined, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter><App/></BrowserRouter>
    </Provider>,
document.getElementById('root'));
