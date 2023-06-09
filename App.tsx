import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Root} from '@kyupss/native-popup';

import {store, persistor} from './src/store';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Root>
            <StackNavigation />
          </Root>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};
export default App;
