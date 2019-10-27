import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';

import api from '~/services/api';

// import { Container } from './styles';

export default function Commit({ navigation }) {
  const [commits, setCommits] = useState([]);
  const repo = navigation.getParam('item');

  useEffect(() => {}, []);
  const loadCommits = useCallback(async () => {
    const { data } = await api.get(
      `repos/${repo.owner.login}/${repo.name}/commits`,
    );

    setCommits(data);
  }, [commits]);

  useEffect(() => {
    loadCommits();
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(commits, null, 2)}</Text>
    </View>
  );
}
