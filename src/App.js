import React from 'react';
import { ThemeProvider } from 'styled-components';

import { temaClaro, temaEscuro } from './Components/UI/tema';
import Cabecalho from './Components/Cabecalho';
import Container from './Components/Container';
import { GlobalStyle } from './Components/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={temaEscuro}>
      {/* Importanto o global style aqui ele aplica o reset de css */}
      <GlobalStyle />

      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
