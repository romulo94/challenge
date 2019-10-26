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
  height: 100%;
  line-height: 12px;
  flex: 1;

  margin-left: 15px;
  color: #333;
  font-size: 13px;
  background-color: transparent;
  text-align: center;
`;
