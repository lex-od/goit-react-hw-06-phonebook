import { combineReducers } from 'redux';
import actionTypes from './phonebook-types';

const itemsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_CONTACT:
            return [payload, ...state];
        case actionTypes.DELETE_CONTACT:
            return state.filter(({ id }) => id !== payload);
        default:
            return state;
    }
};

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case actionTypes.CHANGE_FILTER:
            return payload;
        default:
            return state;
    }
};

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});
