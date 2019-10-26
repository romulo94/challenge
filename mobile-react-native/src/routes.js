import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { Login1, Login2 } from './pages/SignIn';

export default (isSigned = false) => createAppContainer(
  createSwitchNavigator(
    {
      SignIn: createSwitchNavigator({
        Login1,
        Login2,
      }),
    },
    {
      initialRouteName: isSigned ? 'SignIn' : 'SignIn',
    },
  ),
);
