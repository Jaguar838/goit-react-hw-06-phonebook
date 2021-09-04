// Создаем отдельные части стейта - reducer(ы).
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    addContact,
    deleteContact,
    checkUnique,
    changeFilter,
} from './actions';

// Прописывае в reducer логику взаимодействия с экшенами, где обработка каждого
//    экшена это свойство обьекта
// ключом являеться имя экшена(в[]) а значением результат вызова анонимной стрелочной ф-и.

const items = createReducer(
    [
        { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    {
        [addContact]: (state, { payload }) => [...state, payload],
        [deleteContact]: (state, { payload }) =>
            state.filter(({ id }) => id !== payload),
        [checkUnique]: (state, { payload }) =>
            state.find(({ name }) => name === payload),
    },
);

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
});
