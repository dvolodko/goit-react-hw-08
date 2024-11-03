import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const persistContactsConfig = {
  key: 'contacts',
  storage,
};

const persistFiltersConfig = {
  key: 'filters',
  storage,
};

const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReducer
);

const persistedFiltersReducer = persistReducer(
  persistFiltersConfig,
  filtersReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
