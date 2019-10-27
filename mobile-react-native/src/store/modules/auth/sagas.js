import {Alert} from 'react-native';
import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import {Types, signInSuccess, signFailure} from './actions';
import base64 from 'react-native-base64';
import api from '~/services/api';

export function* singIn({payload}) {
  try {
    const {password} = payload;
    const {email} = yield select(state => state.auth);

    const BASE64ENCODED = base64.encode(`${email}:${password}`);

    const {data} = yield call(api.get, '/user', {
      headers: {
        Authorization: 'Basic ' + BASE64ENCODED,
      },
    });
    console.log(JSON.stringify(data, null, 2));

    yield put(signInSuccess(data));
  } catch (error) {
    Alert.alert(JSON.stringify(error));
    console.log(JSON.stringify(error, null, 2));
    console.tron.log(JSON.stringify(error));
    // Alert.alert('Falha na autenticação', 'Houve um erro, verifique seus dados');
    yield put(signFailure(error));
  }
}

export default all([takeLatest(Types.SIGN_IN_REQUEST, singIn)]);
