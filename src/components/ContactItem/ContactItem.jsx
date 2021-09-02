import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/actions';
import { Button } from 'UI';

import css from './ContactItem.module.css';

export const ContactItem = ({ name, phone }) => {
    const dispatch = useDispatch();
    return (
        <li className={css.item}>
            <span className={css.span}>
                {name}:{phone}
            </span>
            <Button className="btn" onClick={id => dispatch(deleteContact(id))}>
                Delete
            </Button>
        </li>
    );
};
