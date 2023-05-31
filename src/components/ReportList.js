import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

import Report from './Report';

const ReportList = ({data}) => {
  return (
    <FlatList
      data={data}
      numColumns={1}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Report
          title={item.title}
          description={item.description}
          image={item.image}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingVertical: 50,
  },
});

export default ReportList;
