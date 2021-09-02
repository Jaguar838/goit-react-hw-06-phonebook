import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getFilteredContacts } from 'redux/contacts/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
    const visibleContacts = useSelector(getFilteredContacts);
    console.log('visibleContacts', visibleContacts);
    return (
        <ul className={css.contacts}>
            {visibleContacts?.map(({ id, name, phone }) => (
                <ContactItem key={id} name={name} phone={phone} />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.node.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
