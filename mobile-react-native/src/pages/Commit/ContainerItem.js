import React from 'react';

import {
  ContainerCommit, ContainerDesciption, DesciptionCommit, Image,
} from './styles';

export default function ContainerItem({ item }) {
  console.log('item');
  return (
    <ContainerCommit key={String(item.sha)}>
      <Image source={{ uri: item.author && item.author.avatar_url }} />

      <ContainerDesciption>
        {item.commit.message ? (
          <DesciptionCommit>{item.commit.message}</DesciptionCommit>
        ) : (
          <DesciptionCommit>no descrition</DesciptionCommit>
        )}
      </ContainerDesciption>
    </ContainerCommit>
  );
}
