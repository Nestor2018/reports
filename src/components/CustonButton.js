import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import sizes from '../constants/sizes';

const CustonButton = ({text, bgButton, colorText, press, widthButton}) => {
  return (
    <TouchableOpacity
      onPress={press}
      style={[{backgroundColor: bgButton, width: widthButton}, styles.button]}>
      <Text style={[{color: colorText}, styles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    padding: sizes.padding,
    borderRadius: sizes.borderRadius,
    marginBottom: sizes.margin,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: sizes.text,
  },
});

export default CustonButton;
