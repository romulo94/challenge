import { Alert } from 'react-native';
import { 
all, call, put, takeLatest, select 
} from 'redux-saga/effects';

// usar este base64 para evitar instabilidade
import base64 from 'react-native-base64';

import { Types, signInSuccess, signFailure } from './actions';
import api from '~/services/api';

export function* singIn({ payload }) {
  try {
    const { password } = payload;
    const { email } = yield select((state) => state.auth);

    //
    const BASE64ENCODED = base64.encode(`${email}:${password}`);

    const { data } = yield call(api.get, '/user', {
      headers: {
        Authorization: `Basic ${BASE64ENCODED}`,
      },
    });

    yield put(signInSuccess(data));
  } catch (error) {
    Alert.alert('Ocorreu um erro');

    yield put(signFailure(error));
  }
}

export default all([takeLatest(Types.SIGN_IN_REQUEST, singIn)]);
