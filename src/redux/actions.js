import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('tasks/addContact');
export const deleteContact = createAction('tasks/deleteContact');
export const findContact = createAction('tasks/findContact');
