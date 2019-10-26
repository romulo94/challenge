import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, RButton, Text } from './styles';

export default function Button({
  children, loading, onPress, ...rest
}) {
  return (
    <Container {...rest}>
      <RButton onPress={onPress}>
        {loading ? <ActivityIndicator size="small" color="#FFF" /> : <Text>{children}</Text>}
      </RButton>
    </Container>
  );
}
