import { Alert } from 'react-native';
import {
  all, call, put, takeLatest, select,
} from 'redux-saga/effects';
import { Types, signInSuccess, signFailure } from './actions';
import api from '~/services/api';

export function* singIn({ payload }) {
  try {
    const { password } = payload;
    const { email } = yield select((state) => state.auth);
    console.tron.log(email);
    const auth = { username: 'romulorocha063@gmail.com', password: '***' };
    const response = yield call(api.get, '/user', { auth });
    // const { token, user } = response.data;

    // if (user.provider) {
    //   Alert.alert('Erro no login', 'Usuário nao pode ser prestador');
    //   return;
    // }

    // api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(response));
  } catch (error) {
    console.log(JSON.stringify(error));
    Alert.alert('Falha na autenticação', 'Houve um erro, verifique seus dados');
    yield put(signFailure(error));
  }
}

export default all([takeLatest(Types.SIGN_IN_REQUEST, singIn)]);
