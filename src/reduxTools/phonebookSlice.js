import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

export const phonebookSlice = createSlice({
  name: "phonebook",
  initialState,
  reducers: {
    addContactToPhonebook: (state, action) => {
      state.contacts.push(action.payload);
    },

    removeContactFromPhonebook: (state, action) => {
      // return state.contacts.filter(contact => contact.id !== action.payload); -  не працює, бо просто повертає відфільтрований масив, але не змінює state.contacts
      // return не оновить лише поле contacts, воно очікує, що ти змінюватимеш стан безпосередньо. Redux Toolkit очікує або явне оновлення стану, або повернення нового об'єкта/масиву як нового стану.
      // тобто якби initialState був масивом, то можна було б змінювати через return:
      // const initialState = [
      //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      // ],

      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload,
      );
    },

    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addContactToPhonebook,
  removeContactFromPhonebook,
  changeFilter,
} = phonebookSlice.actions;

const persistConfig = {
  key: "phonebook",
  storage,
};

export const persistedPhonebookReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer,
);
