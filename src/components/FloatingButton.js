import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

import colors from '../constants/colors';

const FloatingButton = ({press}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={press}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 3,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.brown,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FloatingButton;
