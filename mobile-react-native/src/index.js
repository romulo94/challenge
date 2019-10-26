/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, Text, StatusBar } from 'react-native';

import './config/ReactotronConfig';

import store from '~/store';

export default function Main() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#24292e" />

      <SafeAreaView>
        <Text>Hello CREDITAS</Text>
      </SafeAreaView>
    </Provider>
  );
}
