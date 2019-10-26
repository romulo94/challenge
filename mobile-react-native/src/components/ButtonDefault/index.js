import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, RButton, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      <RButton {...rest}>
        {loading ? <ActivityIndicator size="small" color="#FFF" /> : <Text>{children}</Text>}
      </RButton>
    </Container>
  );
}
