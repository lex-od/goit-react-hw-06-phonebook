import { Component } from 'react';
import css from './styles/App.module.scss';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className={css.telBookTitle}>Телефонная книга</h1>
                <ContactForm />

                <h2 className={css.contactsTitle}>Контакты</h2>
                <Filter />
                <ContactList />
            </div>
        );
    }
}

export default App;
