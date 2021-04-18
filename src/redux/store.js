import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';

const store = configureStore({
    reducer: { contacts: contactsReducer },
    devTools: process.env.NODE_ENV === 'development',
});

export default store;

// import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
