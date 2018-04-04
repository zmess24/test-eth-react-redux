import {createStore, compose, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
export const history = createHistory();

function configureStoreProd(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        thunk,
        reactRouterMiddleware
    ];

    return createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares)
    ));
}

const configureStore = configureStoreProd;

export default configureStore;