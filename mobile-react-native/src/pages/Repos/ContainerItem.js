import React from 'react';

import {
  ContainerRepo,
  NameRepo,
  ContainerDesciption,
  DesciptionRepo,
} from './styles';

export default function ContainerItem({ item, navigation }) {
  return (
    <ContainerRepo onPress={() => navigation.navigate('Commit', { item })}>
      <NameRepo>{item.name}</NameRepo>
      <ContainerDesciption>
        {item.description ? (
          <DesciptionRepo>{item.description}</DesciptionRepo>
        ) : (
          <DesciptionRepo>no descrition</DesciptionRepo>
        )}
      </ContainerDesciption>
    </ContainerRepo>
  );
}
