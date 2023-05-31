import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './src/navigation/StackNavigation';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StackNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
