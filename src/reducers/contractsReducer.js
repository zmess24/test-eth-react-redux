import objectAssign from 'object-assign';
import initialState from './initialState';

export default function contractsReducer(state = initialState.contracts, action) {
    switch(action.type) {
        default:
            return state;
    }
}