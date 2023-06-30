import alimentacao from '../assets/images/alimentacao.svg';
import saude from '../assets/images/saude.svg';
import outros from '../assets/images/outros.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import { IconeTema } from '../Components/UI';

// eslint-disable-next-line import/no-anonymous-default-export
export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt={'Restaurante'} />,
    Utilidades: <IconeTema src={utilidades} alt={'Utilidades'} />,
    Saude: <IconeTema src={saude} alt={'Saude'} />,
    Transporte: <IconeTema src={transporte} alt={'Transporte'} />,
    default: <IconeTema src={outros} alt={'Outro'} />,
  };
  return Images[type] || Images.default;
};
