import {
  conteudoClaro,
  conteudoEscuro,
  fundoClaro,
  fundoEscuro,
  textoFundoClaro,
  textoFundoEscuro,
} from './variaveis';

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  texto: textoFundoClaro,
};
export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  texto: textoFundoEscuro,
  filter: 'invert(100%)',
};
