import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Image } from 'react-native';
import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  FormInput,
  ContainerImage,
  ContainerAction,
  FormButton,
  Email,
} from './styles';

import logo from '~/assets/images/github-logo@128.png';

export default function Password({ navigation }) {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { email, loading } = useSelector((state) => state.auth);

  function login() {
    dispatch(signInRequest(password));
  }
  return (
    <Container>
      <ContainerImage>
        <Image source={logo} />
      </ContainerImage>
      <ContainerAction>
        <Email>{email}</Email>
        <FormInput
          autoCorrect={false}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          returnKeyType="next"
          value={password}
          onChangeText={setPassword}
        />

        <FormButton loading={loading} onPress={login}>
          Login
        </FormButton>
        <FormButton onPress={() => navigation.navigate('Login1')}>
          Back
        </FormButton>
      </ContainerAction>
    </Container>
  );
}
