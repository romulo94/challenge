import React, { forwardRef } from 'react';

import { Container, Input } from './styles';

function InputDeafult({ style, ...rest }, ref) {
  return (
    <Container style={style}>
      {/* Passando a ref para permitir um componente mais genérico */}
      <Input {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(InputDeafult);
