import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = [];

export const addEmployee = createAction(
  'employees/ADD_EMPLOYEE',
  (employee) => ({
    payload: employee,
  }),
);
export const deleteEmployee = createAction(
  'employees/DELETE_EMPLOYEE',
  (id) => ({
    payload: id,
  }),
);

export default createReducer(initialState, (builder) => {
  return builder
    .addCase(addEmployee, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteEmployee, (state, action) => {
      state.filter(({ id }) => id !== action.payload);
    });
});
