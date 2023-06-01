import {createSlice} from '@reduxjs/toolkit';

import Data from '../constants/data';

let reportsSlice = createSlice({
  name: 'reports',
  initialState: {
    listReports: Data,
  },
  reducers: {
    saveReport(state, action) {
      state.listReports.push(action.payload);
    },
  },
});

export const {saveReport} = reportsSlice.actions;

export default reportsSlice.reducer;
