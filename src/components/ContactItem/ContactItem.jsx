import React from 'react';
import { Button } from 'UI';
import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

export const ContactItem = ({ name, phone, onRemove }) => {
    return (
        <li className={css.item}>
            <span className={css.span}>
                {name}:{phone}
            </span>
            <Button className="btn" onClick={onRemove}>
                Delete
            </Button>
        </li>
    );
};
ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};
