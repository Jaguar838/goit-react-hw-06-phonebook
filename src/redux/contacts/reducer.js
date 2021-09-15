// Создаем отдельные части стейта - reducer(ы).
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';
import { combineReducers } from 'redux';

const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
];
// Прописываем в reducer логику взаимодействия с экшенами, где обработка каждого
//  экшена это свойство обьекта
// ключом являеться имя экшена(в[]), а значением результат вызова анонимной стрелочной ф-и.

const items = createReducer(initialState, {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
    items,
    filter,
});
