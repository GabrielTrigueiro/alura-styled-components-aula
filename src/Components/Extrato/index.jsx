import React from 'react';

import { extratoLista } from '../../info';
import { Box, Botao } from '../UI';
import Items from '../Items';

export default function Extrato() {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => (
        <Items id={id} type={type} from={from} value={value} date={date} />
      ))}
      <Botao>Ver mais</Botao>
    </Box>
  );
}
