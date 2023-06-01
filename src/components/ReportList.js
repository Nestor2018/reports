import React from 'react';
import {FlatList, Text} from 'react-native';

import Report from './Report';

const ReportList = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      ListEmptyComponent={() => <Text>Empty</Text>}
      initialNumToRender={5}
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

export default ReportList;
