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

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ContactScreen />
    </SafeAreaView>
  );
};

export default App;
