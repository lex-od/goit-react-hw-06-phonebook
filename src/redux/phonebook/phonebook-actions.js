import actionTypes from './phonebook-types';

const addContact = contact => ({
    type: actionTypes.ADD_CONTACT,
    payload: contact,
});

const deleteContact = id => ({
    type: actionTypes.DELETE_CONTACT,
    payload: id,
});

const changeFilter = value => ({
    type: actionTypes.CHANGE_FILTER,
    payload: value,
});

const phonebookActions = { addContact, deleteContact, changeFilter };
export default phonebookActions;
