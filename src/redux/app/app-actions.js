import actionTypes from './app-types';

export const addContact = contact => ({
    type: actionTypes.ADD_CONTACT,
    payload: contact,
});

export const deleteContact = id => ({
    type: actionTypes.DELETE_CONTACT,
    payload: id,
});

export const changeFilter = value => ({
    type: actionTypes.CHANGE_FILTER,
    payload: value,
});
