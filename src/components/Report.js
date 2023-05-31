import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import colors from '../constants/colors';

const Report = ({title, description, image}) => {
  const truncatedContent = (text, limit) => {
    return text.length > limit
      ? text.substring(0, limit) + '...' // Truncar y agregar puntos suspensivos
      : text;
  };

  return (
    <TouchableWithoutFeedback onPress={console.log('press')}>
      <View style={styles.card}>
        <View style={styles.contianer}>
          <View style={styles.columnLeft}>
            <Image source={{uri: image}} style={styles.image} />
          </View>
          <View style={styles.columnRight}>
            <Text style={styles.title}>{truncatedContent(title, 12)}</Text>
            <Text style={styles.description}>
              {truncatedContent(description, 180)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  contianer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.blue,
    padding: 5,
    margin: 5,
  },
  columnLeft: {
    flex: 1,
  },
  columnRight: {
    flex: 2,
  },
  title: {
    color: colors.champagne,
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 10,
  },
  description: {
    fontSize: 14,
    color: colors.champagne,
  },
  image: {
    width: '90%',
    height: '90%',
  },
});

export default Report;
