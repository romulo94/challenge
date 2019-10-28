import styled from 'styled-components/native';
import Input from '~/components/InputDeafult';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const FormInput = styled(Input)`
  margin: 20px 20px 10px;
`;

export const ImageLogo = styled.Image`
  margin-top: 10px;
`;

export const ContainerRepo = styled.TouchableOpacity`
  display: flex;
  height: 90px;
  margin-bottom: 20px;
`;

export const NameRepo = styled.Text`
  font-size: 15px;
`;

export const ContainerDesciption = styled.View`
  display: flex;
  border: 1px solid #33333380;
  border-radius: 5px;
  height: 72px;
  justify-content: center;
  padding: 10px;
`;

export const DesciptionRepo = styled.Text.attrs({ numberOfLines: 2 })`
  font-size: 14px;
  text-align: center;
`;
