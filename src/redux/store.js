import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './app/app-reducers';

const rootReducer = combineReducers({
    contacts: appReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
