import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Text, Image } from 'react-native';
import { signInRequest } from '~/store/modules/auth/actions';
import Button from '~/components/ButtonDefault';
import {
  Container, FormInput, ContainerImage, ContainerAction, FormButton, Email,
} from './styles';

import logo from '~/assets/images/logo.png';

export default function Password({ navigation }) {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);

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
          autoCapitalize="none"
          placeholder="Password"
          returnKeyType="next"
          value={password}
          onChangeText={setPassword}
        />

        <FormButton loading={false} onPress={login}>
          Login
        </FormButton>
        <FormButton loading={false} onPress={() => navigation.navigate('Login1')}>
          Back
        </FormButton>
      </ContainerAction>
    </Container>
  );
}
