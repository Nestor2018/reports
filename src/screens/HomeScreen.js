import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

import ReportList from '../components/ReportList';

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
  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <ReportList data={DATA} />
      <Button title="go create" onPress={() => navigation.navigate('create')} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default HomeScreen;
