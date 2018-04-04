import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import contractsReducer from './contractsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    contracts: contractsReducer,
    user: userReducer,
    routing: routerReducer
});

export default rootReducer;

