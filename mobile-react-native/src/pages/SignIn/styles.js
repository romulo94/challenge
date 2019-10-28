import {Platform} from 'react-native';

import styled from 'styled-components/native';

import Input from '~/components/InputDeafult';
import Button from '~/components/ButtonDefault';

export const Container = styled.KeyboardAvoidingView.attrs({
  // Por default o IOS nao tem o comportamento do teclado igual ao ANDROID
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 25px;
`;

export const FormButton = styled(Button)`
  margin-bottom: 25px;
`;

export const Email = styled.Text`
  margin-bottom: 25px;
`;

export const ContainerImage = styled.View`
  height: 50%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerAction = styled.View`
  height: 50%;
  width: 100%;

  align-items: center;
  top: 25px;
`;
