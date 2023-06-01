import React from 'react';
import {Text, Image, StyleSheet, SafeAreaView} from 'react-native';

import colors from '../../constants/colors';
import sizes from '../../constants/sizes';

const DetailReport = ({route}) => {
  const {title, description, image} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.champagne,
    minHeight: '100%',
    padding: sizes.padding,
    paddingTop: 40,
  },
  title: {
    marginVertical: 20,
    color: colors.blue,
    fontSize: sizes.titlePage,
    textAlign: 'center',
  },
  description: {
    marginHorizontal: sizes.margin,
    marginVertical: 20,
    color: colors.blue,
    fontSize: sizes.text,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: sizes.borderRadius,
    alignSelf: 'center',
  },
});

export default DetailReport;
