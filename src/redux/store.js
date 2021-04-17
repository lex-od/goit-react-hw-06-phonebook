import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    contacts: {
        items: [],
        filter: '',
    },
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'App/addContact':
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: [payload, ...state.contacts.items],
                },
            };
        case 'App/deleteContact':
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: state.contacts.items.filter(
                        ({ id }) => id !== payload,
                    ),
                },
            };
        case 'App/changeFilter':
            return {
                ...state,
                contacts: { ...state.contacts, filter: payload },
            };
        default:
            return state;
    }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
