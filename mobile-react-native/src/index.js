/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

// Seta a configuralçao do REACTOTRON
// OBS: deve vir antes do STORE
import './config/ReactotronConfig';

import store from '~/store';
import App from './App';

export default function Main() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#24292e" />
      <App />
    </Provider>
  );
}
