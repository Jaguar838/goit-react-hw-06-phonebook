// Создаем глобальный стейт он же store.

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logger } from 'redux-logger';
import contactsReducer from './contacts/reducer';

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReducer),
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
