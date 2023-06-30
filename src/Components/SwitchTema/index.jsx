import React from 'react';

import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOf from '../../assets/images/themeOff.svg';
import { Icone } from '../UI';

const claro = <Icone src={ThemeOn} alt="tema claro" />;
const escuro = <Icone src={ThemeOf} alt="tema escuro" />;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ tema }) => (tema ? escuro : claro);
