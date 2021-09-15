import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contacts/actions';

export const ContactList = () => {
    const visibleContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();
    const onRemove = id => dispatch(deleteContact(id));
    return (
        <ul className={css.contacts}>
            {visibleContacts?.map(({ id, name, phone }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    phone={phone}
                    onRemove={() => onRemove(id)}
                />
            ))}
        </ul>
    );
};
