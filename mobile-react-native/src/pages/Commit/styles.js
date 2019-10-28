import styled from 'styled-components/native';
import { TextCustom } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;

  margin: 0 20px;
`;

export const NameRepo = styled.View`
  width: 100%;
  border-radius: 5px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border: 1px solid #00000040;
  margin-top: 10px;
`;

export const Image = styled.Image`
  border-radius: 30px;
  width: 60px;
  height: 60px;
`;

export const ContainerCommit = styled.View`
  display: flex;
  padding: 20px;
  width: 100%;

  flex-direction: row;
  align-items: center;
`;

export const ContainerDesciption = styled.View`
  flex: 1;

  margin-left: 15px;

  border: 1px solid #33333380;

  border-radius: 5px;
  height: 72px;
  justify-content: center;
`;

export const DesciptionCommit = styled(TextCustom).attrs({ numberOfLines: 2 })`
  font-size: 14px;
  text-align: center;
`;

export const ImageLogo = styled.Image`
  margin-top: 10px;
`;
