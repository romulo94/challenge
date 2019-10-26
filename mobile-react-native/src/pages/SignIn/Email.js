import React, { useState } from 'react';
import { View } from 'react-native';

import { Container, FormInput } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  return (
    <Container>
      <FormInput
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Your Github email address"
        returnKeyType="next"
        onSubmitEditing={() => {
          // passwordRef.current.focus();
        }}
        value={email}
        onChangeText={setEmail}
      />
    </Container>
  );
}
