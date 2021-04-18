import { combineReducers } from 'redux';
import actionTypes from './phonebook-types';

const itemsReducer = (
    state = [
        { id: '1212', name: 'nnnn1', number: 'nmbra1' },
        { id: '3434', name: 'ffff2', number: 'nmbra2' },
        { id: '4545', name: 'name3', number: 'nmbra3' },
    ],
    { type, payload },
) => {
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
