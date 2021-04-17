export const addContact = contact => ({
    type: 'App/addContact',
    payload: contact,
});

export const deleteContact = id => ({
    type: 'App/deleteContact',
    payload: id,
});

export const changeFilter = value => ({
    type: 'App/changeFilter',
    payload: value,
});
