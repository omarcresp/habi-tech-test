import React, { FC } from 'react';

import { a11yClickKeyEvent } from 'utils/a11y';
import iconAngleDown from 'assets/icons/angle-down.svg';
import {FORM_ID} from '../../index';

import './index.css';

const HeroStart: FC = () => {
  const aux = () => {
    const formEl = document.getElementById(FORM_ID);

    formEl?.scrollIntoView();
  };

  return (
    <div role="button" className="hero-start" tabIndex={0} onClick={aux} onKeyUp={a11yClickKeyEvent(aux)}>
      <p className="hero-start__copy">Empezar</p>

      <img className="hero-start__icon" alt="see more icon" src={iconAngleDown} />
    </div>
  );
};

export default HeroStart;
