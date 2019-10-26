import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  padding: 0 15px;
  height: 36px;
  background: rgba(0, 0, 0, 0);
  border-radius: 5px;
  border: 1px solid #33333380;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#333',
  selectionColor: '#33333380',
})`
  height: 36px;
  flex: 1;
  font-size: 15px;
  margin-left: 15px;
  color: #333;
  font-size: 15px;
  background-color: transparent;
`;
