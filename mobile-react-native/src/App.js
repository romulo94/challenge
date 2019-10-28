import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);

  // Rotas são exportadas passando o parâmetro para definição da initialRouteName
  const Routes = createRouter(signed);

  return <Routes />;
}
