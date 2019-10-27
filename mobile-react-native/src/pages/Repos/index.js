import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import api from '~/services/api';

import { 
Container, List, ContainerRepo, NameRepo
 } from './styles';

export default function Repos() {
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
      <List
        onEndReached={!full && loadRepos}
        onEndReachedThreshold={0.2}
        keyExtractor={(item) => JSON.stringify(item.id)}
        data={repos}
        renderItem={({ item }) => (
          <ContainerRepo key={item.id}>
            <NameRepo>{item.name}</NameRepo>
          </ContainerRepo>
        )}
        ListFooterComponent={() => (full ? <></> : <ActivityIndicator size="small" color="black" />)
        }
      />
    </Container>
  );
}
