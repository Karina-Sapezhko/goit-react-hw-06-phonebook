import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  filterContacts,
  notificationAction,
} from './actions';

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export const notificationReducer = createReducer('', {
  [notificationAction]: (_, { payload }) => payload,
  [addContact]: _state => '',
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
