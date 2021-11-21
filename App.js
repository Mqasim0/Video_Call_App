import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import ContactScreen from './src/screens/ContactScreen';
import CallingScreen from './src/screens/CallingScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <CallingScreen />
    </SafeAreaView>
  );
};

export default App;
