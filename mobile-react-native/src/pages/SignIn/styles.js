import { Platform } from 'react-native';

import styled from 'styled-components/native';

import Input from '~/components/InputDeafult';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
