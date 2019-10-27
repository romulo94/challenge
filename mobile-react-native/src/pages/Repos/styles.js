import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 30,
  },
})``;

export const ContainerRepo = styled.View`
  display: flex;
  height: 50px;
`;

export const NameRepo = styled.Text`
  font-size: 14px;
`;
