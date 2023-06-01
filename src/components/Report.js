import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import colors from '../constants/colors';
import sizes from '../constants/sizes';

const Report = ({title, description, image}) => {
  const navigation = useNavigation();

  const truncatedContent = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  const redirectDetailReport = () => {
    navigation.navigate('Detail', {title, description, image});
  };

  return (
    <TouchableWithoutFeedback onPress={redirectDetailReport}>
      <View style={styles.card}>
        <View style={styles.contianer}>
          <View style={styles.columnLeft}>
            <Image source={{uri: image}} style={styles.image} />
          </View>
          <View style={styles.columnRight}>
            <Text style={styles.title}>{truncatedContent(title, 12)}</Text>
            <Text style={styles.description}>
              {truncatedContent(description, 120)}
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
    height: 160,
  },
  contianer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.blue,
    padding: sizes.padding,
    margin: sizes.padding,
    borderRadius: sizes.borderRadius,
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
    fontSize: sizes.subtitle,
    paddingTop: sizes.padding,
  },
  description: {
    fontSize: sizes.text,
    color: colors.champagne,
  },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: sizes.borderRadius,
  },
});

export default Report;
