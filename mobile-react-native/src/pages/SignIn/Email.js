import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import Button from '~/components/ButtonDefault';
import { setEmail as setEmailAction } from '~/store/modules/auth/actions';
import { Container, FormInput } from './styles';

import logo from '~/assets/images/logo.png';

export default function Email({ navigation }) {
  const emailStore = useSelector((state) => state.auth.email);
  const [email, setEmail] = useState(emailStore || '');
  const dispatch = useDispatch();

  function next() {
    if (!email) {
      alert('Wait! Where are your email?');
    } else {
      dispatch(setEmailAction(email));
      navigation.navigate('Login2');
    }
  }

  return (
    <Container>
      <Image source={logo} />
      <FormInput
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Your Github email address"
        returnKeyType="next"
        value={email}
        onChangeText={setEmail}
      />

      <Button loading={false} onPress={next}>
        Next
      </Button>
    </Container>
  );
}
