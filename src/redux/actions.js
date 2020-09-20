import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/ADD');
export const deleteContact = createAction('contacts/DELETE');
export const filterContacts = createAction('contacts/FILTER');
export const notificationAction = createAction('contacts/NOTIFICATION');
