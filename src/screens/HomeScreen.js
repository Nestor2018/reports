import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import ReportList from '../components/ReportList';
import FloatingButton from '../components/FloatingButton';
import colors from '../constants/colors';

const HomeScreen = ({navigation}) => {
  const reports = useSelector(state => state.reports.listReports);
  console.log(reports);

  const redirectCreateReport = () => {
    navigation.navigate('create');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incident report</Text>
      <ReportList data={reports} />
      <FloatingButton press={redirectCreateReport} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    marginBottom: 100,
    minHeight: '100%',
  },
  title: {
    marginVertical: 20,
    color: colors.blue,
    fontSize: 30,
    textAlign: 'center',
  },
});

export default HomeScreen;
