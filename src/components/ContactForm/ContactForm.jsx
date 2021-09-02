import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, checkUnique } from 'redux/contacts/actions';
import { useForm } from 'react-hook-form';
import { Button } from 'UI';
import css from './ContactForm.module.css';

export function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleChangeForm = ({ target }) => {
        const { name, value } = target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                return;
        }
    };
    const onCheckUnique = name => {
        const isExistContact = !!dispatch(checkUnique(name));
        isExistContact && alert('Contact is already exist');
        return !isExistContact;
    };
    function validateForm() {
        if (!name || !phone) {
            alert('Some field is empty');
            return false;
        }
        return onCheckUnique(name);
    }
    const onSubmit = data => {
        // const { name, phone } = data;
        const isValidateForm = validateForm();
        if (!isValidateForm) return;
        dispatch(addContact(data));
        resetForm();
        console.log('Submit', data, errors);
    };

    const resetForm = () => {
        setName('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                className={css.input}
                type="text"
                placeholder="Enter name"
                {...register('name', {
                    required: true,
                    pattern:
                        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                })}
                value={name}
                onChange={handleChangeForm}
            />
            {errors.name && alert('Name is required.')}

            <input
                className={css.input}
                type="tel"
                placeholder="Enter phone number"
                {...register('phone', {
                    required: true,
                    pattern:
                        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                })}
                value={phone}
                onChange={handleChangeForm}
            />
            {errors.phone && alert('Please enter number for phone.')}

            <Button type="submit">Add Contact</Button>
        </form>
    );
}
