import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import ListDefault from '~/components/ListDefault';
import ContainerItem from './ContainerItem';
import logo from '~/assets/images/github-logo@64.png';

import api from '~/services/api';

import { Container, ImageLogo, FormInput } from './styles';

export default function Repos({ navigation }) {
  const [repoName, setRepoName] = useState('');
  const [repos, setRepos] = useState([]);
  const [foundRepos, setFoundRepos] = useState([]);
  const [page, setPage] = useState(1);

  // quando todos os repositórios forem carregados o valor será TRUE
  const [full, setFull] = useState(false);

  // para evitar re-render não desestruturar!
  const user = useSelector((state) => state.auth.user);

  // usando Callback para evitar recriação da função
  const loadRepos = useCallback(async () => {
    if (full) return;

    // limite por 'página' fixo (10)
    const queryParams = `?page=${page}&per_page=10`;

    const { data } = await api.get(`users/${user}/repos${queryParams}`);

    if (data.length) setPage(page + 1);
    else {
      setFull(true);
    }

    setRepos([...repos, ...data]);
  }, [page, repos]);

  const searchRepo = useCallback(async () => {
    const exp = new RegExp(repoName, 'gi');

    // a função filtra por corresponcia do NAME do repo
    // TO DO: carregar todos os REPOS e filtrar
    const findByNameRepoRegex = (regex) => repos.filter((obj) => obj.name.match(regex));

    setFoundRepos(findByNameRepoRegex(exp));
  }, [repoName, repos]);

  useEffect(() => {
    loadRepos();
  }, []);

  //
  useEffect(() => {
    searchRepo();
  }, [repoName]);

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

      {!repoName.length ? (
        <ListDefault
          data={repos}
          onEndReached={!full && loadRepos}
          renderItem={({ item }) => (
            <ContainerItem item={item} navigation={navigation} />
          )}
          ListFooterComponent={() => (full ? <></> : <ActivityIndicator size="small" color="black" />)
          }
        />
      ) : (
        <ListDefault
          data={foundRepos}
          renderItem={({ item }) => (
            <ContainerItem item={item} navigation={navigation} />
          )}
        />
      )}
    </Container>
  );
}
