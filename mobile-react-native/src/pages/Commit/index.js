import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import ListDefault from '~/components/ListDefault';
import ContainerItem from './ContainerItem';
import logo from '~/assets/images/github-logo@64.png';

import api from '~/services/api';

import {
  Container, ImageLogo, Header, NameRepo,
} from './styles';

export default function Commit({ navigation }) {
  const [commits, setCommits] = useState([]);
  const repo = navigation.getParam('item');

  useEffect(() => {}, []);
  const loadCommits = useCallback(async () => {
    const { data } = await api.get(`repos/${repo.owner.login}/${repo.name}/commits`);

    setCommits(data);
  }, [commits]);

  console.log('commits', JSON.stringify(commits, null, 2));

  useEffect(() => {
    loadCommits();
  }, []);

  return (
    <Container>
      <Header>
        <ImageLogo source={logo} />
        <NameRepo>
          <Text>{repo.name}</Text>
        </NameRepo>
      </Header>

      {/* Removido o onEndReached pois ja foi mostrado na outra Flatlist */}
      <ListDefault
        data={commits}
        renderItem={({ item }) => <ContainerItem key={item.id} item={item} navigation={navigation} />}
      />
    </Container>
  );
}
