import actionTypes from './phonebook-types';
import { v4 as uuid } from 'uuid';

const addContact = contact => ({
    type: actionTypes.ADD_CONTACT,
    payload: { id: uuid(), ...contact },
});

const deleteContact = id => ({
    type: actionTypes.DELETE_CONTACT,
    payload: id,
});

const changeFilter = value => ({
    type: actionTypes.CHANGE_FILTER,
    payload: value,
});

const loadContacts = contacts => ({
    type: actionTypes.LOAD_CONTACTS,
    payload: contacts,
});

const phonebookActions = {
    addContact,
    deleteContact,
    changeFilter,
    loadContacts,
};
export default phonebookActions;
