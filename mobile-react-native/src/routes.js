import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Login1, Login2 } from './pages/SignIn';
import Repos from './pages/Repos';
import Commit from './pages/Commit';

// As funçao recebe um parametro que é setado no login
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
            // remove o HEADER do createStackNavigator
            headerMode: 'none',
          },
        ),
      },
      {
        // Rota principal é baseda na autenticação
        initialRouteName: isSigned ? 'Signed' : 'SignIn',
      },
    ),
  );
