import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './styles/App.module.scss';
import phonebookActions from './redux/phonebook/phonebook-actions';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
    static propTypes = {
        dispLoadContacts: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            }),
        ).isRequired,
    };

    componentDidMount() {
        const savedContacts = JSON.parse(localStorage.getItem('contacts'));
        if (savedContacts) {
            this.props.dispLoadContacts(savedContacts);
        }
    }

    componentDidUpdate(prevProps) {
        const { contacts } = this.props;

        if (contacts !== prevProps.contacts) {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
    }

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

const mapStateToProps = state => ({
    contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
    dispLoadContacts: contacts =>
        dispatch(phonebookActions.loadContacts(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
