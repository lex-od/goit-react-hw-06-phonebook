import { createStore } from 'redux';

const initialState = {
    contacts: [],
    filter: '',
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'App/addContact':
            return { ...state, contacts: [payload, ...state.contacts] };
        case 'App/deleteContact':
            return {
                ...state,
                contacts: state.contacts.filter(({ id }) => id !== payload),
            };
        case 'App/changeFilter':
            return { ...state, filter: payload };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
