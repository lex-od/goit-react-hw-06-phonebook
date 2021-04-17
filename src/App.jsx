import { Component } from 'react';
import { connect } from 'react-redux';
import css from './styles/App.module.scss';
import * as actions from './redux/App/appActions';

// import ContactForm from './components/ContactForm';
// import Filter from './components/Filter';
// import ContactList from './components/ContactList';

class App extends Component {
    render() {
        // const { filter } = this.state;
        // const filteredContacts = this.getFilteredContacts();

        return (
            <div className="container">
                <h1 className={css.telBookTitle}>Телефонная книга</h1>
                {/* <ContactForm onSubmit={this.addContact} /> */}

                <h2 className={css.contactsTitle}>Контакты</h2>
                {/* <Filter value={filter} onChange={this.changeFilter} /> */}
                {/* <ContactList
                    contacts={filteredContacts}
                    onDelete={this.deleteContact}
                /> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.items,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispDeleteContact: id => dispatch(actions.deleteContact(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
