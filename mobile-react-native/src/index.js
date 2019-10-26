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
        <Text
          style={{
            color: 'red',
            fontSize: 20,
          }}
        >
          Hello CREDITAS
        </Text>
        <Text
          style={{
            color: 'red',
            fontFamily: 'Fira Code',
            fontSize: 20,
          }}
        >
          Hello CREDITAS
        </Text>
      </SafeAreaView>
    </Provider>
  );
}
