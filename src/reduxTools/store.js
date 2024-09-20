import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { persistedCounterReducer } from "./counterSlice";
import { persistedPhonebookReducer } from "./phonebookSlice";

export const store = configureStore({
  reducer: {
    counter: persistedCounterReducer,
    phonebook: persistedPhonebookReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Selectors
export const counterValue = state => state.counter.value;
export const phonebookContacts = state => state.phonebook.contacts;
export const phonebookFilter = state => state.phonebook.filter;
