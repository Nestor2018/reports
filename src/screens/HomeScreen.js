import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

import ReportList from '../components/ReportList';
import FloatingButton from '../components/FloatingButton';
import colors from '../constants/colors';

const DATA = [
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
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First title of the report',
    description:
      'this is the first item in the list of reports to be shown on the home screen of the app to the user to view and select from the list of reports to view the details of the report and to be able to edit the report and to be able to delete the report from the list of reports to be shown on the home screen of the app to the user to view and select from the list of reports to view the details of the report and to be able to edit the report and to be able to delete the report from the list of reports',
    image: 'https://picsum.photos/200/300',
  },
];

const HomeScreen = ({navigation}) => {
  const redirectCreateReport = () => {
    navigation.navigate('create');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incident report</Text>
      <ReportList data={DATA} />
      <FloatingButton press={redirectCreateReport} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    marginBottom: 100,
  },
  title: {
    marginVertical: 20,
    color: colors.blue,
    fontSize: 30,
    textAlign: 'center',
  },
});

export default HomeScreen;
