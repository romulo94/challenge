import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { Login1, Login2 } from './pages/SignIn';
import Repos from './pages/Repos';

export default (isSigned = false) => createAppContainer(
    createSwitchNavigator(
      {
        SignIn: createSwitchNavigator({
          Login1,
          Login2,
        }),
        Signed: createSwitchNavigator({
          Repos,
          // Commits,
        }),
      },
      {
        initialRouteName: isSigned ? 'Signed' : 'SignIn',
      },
    ),
  );
