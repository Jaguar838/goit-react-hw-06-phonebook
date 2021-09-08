// Создаем действия(action) для каждого reduser(a).
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('add');

export const deleteContact = createAction('delete');
export const checkUnique = createAction('checkUnique');

export const changeFilter = createAction('changeFilter');
