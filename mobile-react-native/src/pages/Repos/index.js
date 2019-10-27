import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ActivityIndicator, Image } from 'react-native';
import logo from '~/assets/images/github-logo@64.png';

import api from '~/services/api';

import {
  Container,
  List,
  ContainerRepo,
  NameRepo,
  DesciptionRepo,
  ContainerDesciption,
  ImageLogo,
  FormInput,
} from './styles';

export default function Repos({ navigation }) {
  const [repoName, setRepoName] = useState('');
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [full, setFull] = useState(false);

  // para evitar re-render não desestruturo!
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

      <List
        onEndReached={!full && loadRepos}
        onEndReachedThreshold={0.2}
        keyExtractor={(item) => JSON.stringify(item.id)}
        data={repos}
        renderItem={({ item }) => (
          <ContainerRepo
            key={item.id}
            onPress={() => navigation.navigate('Commit', { item })}
          >
            <NameRepo>{item.name}</NameRepo>
            <ContainerDesciption>
              {item.description ? (
                <DesciptionRepo>{item.description}</DesciptionRepo>
              ) : (
                <DesciptionRepo>no descrition</DesciptionRepo>
              )}
            </ContainerDesciption>
          </ContainerRepo>
        )}
        ListFooterComponent={() => (full ? <></> : <ActivityIndicator size="small" color="black" />)
        }
      />
    </Container>
  );
}
