import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';

import ReportList from '../../components/ReportList';
import FloatingButton from '../../components/FloatingButton';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';

const HomeScreen = ({navigation}) => {
  const reports = useSelector(state => state.reports.listReports);
  const reversedReports = reports.slice().reverse();

  const redirectCreateReport = () => {
    navigation.navigate('Create');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Incident report</Text>
      <ReportList data={reversedReports} />
      <FloatingButton press={redirectCreateReport} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.champagne,
    minHeight: '100%',
  },
  title: {
    marginVertical: 20,
    color: colors.blue,
    fontSize: sizes.titlePage,
    textAlign: 'center',
  },
});

export default HomeScreen;
