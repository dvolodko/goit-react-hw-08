import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectNameFilter = (state) => state.filters.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) =>
    contacts.filter((contact) =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(nameFilter.toLowerCase().trim())
    )
);
