import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

// exporta todos os sagas da aplicação
export default function* rootSaga() {
  return yield all([auth]);
}
