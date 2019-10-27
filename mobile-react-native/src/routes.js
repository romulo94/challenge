import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Login1, Login2 } from './pages/SignIn';
import Repos from './pages/Repos';
import Commit from './pages/Commit';

export default (isSigned = false) => createAppContainer(
    createSwitchNavigator(
      {
        SignIn: createSwitchNavigator({
          Login1,
          Login2,
        }),
        Signed: createStackNavigator(
          {
            Repos,
            Commit,
          },
          {
            headerMode: 'none',
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'Signed' : 'SignIn',
      },
    ),
  );
