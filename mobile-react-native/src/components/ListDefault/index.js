import React from 'react';

import { List } from './styles';

export default function ListDefault({ data, ...rest }) {
  return (
    <List
      data={data}
      onEndReachedThreshold={0.2}
      keyExtractor={(el) => JSON.stringify(el)}
      {...rest}
    />
  );
}
