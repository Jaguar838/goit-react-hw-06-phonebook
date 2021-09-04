import React from 'react';
import { useSelector } from 'react-redux';
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
