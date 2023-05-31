import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './src/navigation/StackNavigation';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <NavigationContainer>
        <StackNavigation/>
    </NavigationContainer>
  );
};
export default App;
