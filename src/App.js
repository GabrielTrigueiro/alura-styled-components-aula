import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import { temaClaro, temaEscuro } from './Components/UI/tema';
import Cabecalho from './Components/Cabecalho';
import Container from './Components/Container';
import { GlobalStyle } from './Components/GlobalStyle';
import { BtnTema } from './Components/UI';
import SwitchTema from './Components/SwitchTema';

function App() {
  const [tema, setTema] = useState(true);
  const toggleTema = useCallback(() => {
    setTema((tema) => !tema);
  }, []);
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      {/* Importanto o global style aqui ele aplica o reset de css */}
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitchTema />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
