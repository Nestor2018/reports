import {createSlice} from '@reduxjs/toolkit';

let reportsSlice = createSlice({
  name: 'reports',
  initialState: {
    listReports: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First title of the report',
        description:
          'this is the first item in the list of reports to be shown on the home screen of the app to the user to view and select from the list of reports to view the details of the report and to be able to edit the report and to be able to delete the report from the list of reports to be shown on the home screen of the app to the user to view and select from the list of reports to view the details of the report and to be able to edit the report and to be able to delete the report from the list of reports',
        image: 'https://picsum.photos/200/300',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First title of the report',
        description:
          'this is the first item in the list of reports to be shown on the home screen of the app to the user to view and select from the list of reports to view the details of the report and to be able to edit the report and to be able to delete the report from the list of reports to be shown on the home screen of the app to the user to view and select from the list of reports to view the details of the report and to be able to edit the report and to be able to delete the report from the list of reports',
        image: 'https://picsum.photos/200/300',
      },
    ],
  },
  reducers: {
    saveReport(state, action) {
      state.listReports.push(action.payload);
    },
  },
});

export const {saveReport} = reportsSlice.actions;

export default reportsSlice.reducer;
