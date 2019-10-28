import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ActivityIndicator, Image } from 'react-native';
import ListDefault from '~/components/ListDefault';
import ContainerItem from './ContainerItem';
import logo from '~/assets/images/github-logo@64.png';

import api from '~/services/api';

import { Container, ImageLogo, FormInput } from './styles';

export default function Repos({ navigation }) {
  const [repoName, setRepoName] = useState('');
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [full, setFull] = useState(false);

  // para evitar re-render não desestruturar!
  const user = useSelector((state) => state.auth.user);

  const loadRepos = useCallback(async () => {
    if (full) return;

    const queryParams = `?page=${page}&per_page=10`;

    const { data } = await api.get(`users/${user}/repos${queryParams}`);

    if (data.length) setPage(page + 1);
    else {
      setFull(true);
    }

    setRepos([...repos, ...data]);
  }, [page, repos]);

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <Container>
      <ImageLogo source={logo} />
      <FormInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Repository"
        returnKeyType="next"
        value={repoName}
        onChangeText={setRepoName}
      />

      <ListDefault
        data={repos}
        onEndReached={!full && loadRepos}
        renderItem={({ item }) => (
          <ContainerItem item={item} navigation={navigation} />
        )}
        ListFooterComponent={() => (full ? <></> : <ActivityIndicator size="small" color="black" />)
        }
      />
    </Container>
  );
}
