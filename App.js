import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';


export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen/>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: 'midnignt',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); a
