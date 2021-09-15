import React, { useState } from 'react';
import { Button, Input } from 'UI';
import toast, { Toaster } from 'react-hot-toast';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/actions';

export function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const [contact, setContact] = useState({ name: '', phone: '' });

    const onCheckUnique = (allContasts, newName) => {
        const isExistContact = allContasts.some(
            contact => contact.name.toLowerCase() === newName.toLowerCase(),
        );
        isExistContact && toast.error(`"${newName}" is already exist`);
        return !isExistContact;
    };
    function validateForm() {
        if (!contact.name || !contact.phone) {
            toast.error('Some field is empty');
            return false;
        }
        return onCheckUnique(contacts, contact.name);
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        const newContact = {
            id: Date.now(),
            ...contact,
        };
        const isValidateForm = validateForm();
        if (!isValidateForm) return;
        dispatch(addContact(newContact));
        resetForm();
        console.log('Submit', newContact);
    };

    const resetForm = () => {
        setContact({ name: '', phone: '' });
    };
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={handleSubmit}>
                <Input
                    name="name"
                    value={contact.name}
                    type="text"
                    onChange={({ target }) =>
                        setContact({ ...contact, name: target.value })
                    }
                    placeholder="Enter name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов."
                    // required
                />

                <Input
                    name="phone"
                    value={contact.phone}
                    type="tel"
                    onChange={({ target }) =>
                        setContact({ ...contact, phone: target.value })
                    }
                    placeholder="Enter phone number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    // required
                />

                <Button type="submit">Add Contact</Button>
            </form>
        </>
        // {errors.name && toast('Name is required.')}
        // {errors.phone && toast('Please enter number for phone.')}
    );
}
