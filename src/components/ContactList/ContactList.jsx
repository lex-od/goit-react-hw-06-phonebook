import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './ContactList.module.scss';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li className={css.contactItem} key={id}>
                <ContactItem id={id} name={name} number={number} />
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const getFilteredContacts = (contacts, filter) => {
    const normFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normFilter),
    );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getFilteredContacts(items, filter),
});

export default connect(mapStateToProps)(ContactList);
