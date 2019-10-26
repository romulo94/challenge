import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Text, Image } from 'react-native';
import Button from '~/components/ButtonDefault';
import { Container, FormInput } from './styles';

import logo from '~/assets/images/logo.png';

export default function Password({ navigation }) {
  const [password, setPassword] = useState('');
  const email = useSelector((state) => state.auth.email);

  function next() {
    navigation.navigate('Login2');
  }
  return (
    <Container>
      <Image source={logo} />
      <Text>{email}</Text>
      <FormInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Password"
        returnKeyType="next"
        value={password}
        onChangeText={setPassword}
      />

      <Button loading={false} onPress={next}>
        Login
      </Button>
      <Button loading={false} onPress={() => navigation.navigate('Login1')}>
        Back
      </Button>
    </Container>
  );
}
