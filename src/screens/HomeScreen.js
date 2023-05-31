import react from 'react';
import {View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
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
