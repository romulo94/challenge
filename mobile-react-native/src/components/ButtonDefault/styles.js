import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 36px;
  width: 72px;
  background: transparent;
  border-radius: 5px;
  border: 1px solid #33333380;

  align-items: center;
  justify-content: center;
`;

export const RButton = styled(RectButton)`
  height: 36px;
  width: 72px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 14px;
`;
