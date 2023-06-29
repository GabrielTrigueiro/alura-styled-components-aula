import React from 'react';

import Cabecalho from './Components/Cabecalho';
import Container from './Components/Container';
import { GlobalStyle } from './Components/GlobalStyle';

function App() {
  return (
    <>
      {/* Importanto o global style aqui ele aplica o reset de css */}
      <GlobalStyle />

      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
