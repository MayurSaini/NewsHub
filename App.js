import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Navigator from './src/Navigation/Navigator';
import Colors from './src/styles/Colors';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/state/store';

const App = () => {

  return (
    <Provider store={configureStore().store}>
      <PersistGate persistor={configureStore().persistor}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar
            animated={true}
            backgroundColor={Colors.blue}

          />
          <Navigator/>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
