import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './ContactItem.module.scss';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

const ContactItem = ({ id, name, number, dispBtnClick }) => (
    <>
        <span className={css.name}>{name}: </span>
        <span className={css.number}>{number}</span>
        <button
            className={css.deleteContact}
            type="button"
            onClick={() => {
                dispBtnClick(id);
            }}
        >
            Удалить
        </button>
    </>
);

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    dispBtnClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    dispBtnClick: id => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
