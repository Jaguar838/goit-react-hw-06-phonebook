// Создаем отдельные части стейта - reducer(ы).
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

// Прописывае в reducer логику взаимодействия с экшенами, где обработка каждого
//    экшена это свойство обьекта ключом являеться имя экшена (в []) а значением
//    результат вызова анонимной стрелочной ф-и.

const items = createReducer([], {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
});
