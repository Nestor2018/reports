import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen';
import CreateReportScreen from '../screens/Reports/CreateReportScreen';
import DetailReport from '../screens/Reports/DetailReport';
import colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            statusBarColor: colors.blue,
          }}
        />
        <Stack.Screen
          name="Create"
          component={CreateReportScreen}
          options={{
            title: '',
            headerTransparent: true,
            statusBarColor: colors.brown,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailReport}
          options={{
            title: '',
            headerTransparent: true,
            statusBarColor: colors.blue,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
