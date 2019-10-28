import { combineReducers } from 'redux';

import auth from './auth/reducer';

// exporta todos os reducers da aplicação
export default combineReducers({
  auth,
});
