import React, { FC } from 'react';

import { a11yClickKeyEvent } from 'utils/a11y';
import iconAngleDown from 'assets/icons/angle-down.svg';
import {FORM_ID} from '../../index';

import './index.css';

interface HeroStartProps {
  isInitialState: boolean;
  onGoToForm?: () => void;
}

const HeroStart: FC<HeroStartProps> = ({isInitialState, onGoToForm}) => {
  const goToForm = () => {
    const formEl = document.getElementById(FORM_ID);

    formEl?.scrollIntoView();
    onGoToForm?.();
  };

  return (
    <div
      role="button"
      className="hero-start"
      tabIndex={0}
      onClick={goToForm}
      onKeyUp={a11yClickKeyEvent(goToForm)}>
      <p className="hero-start__copy">
        {isInitialState ? 'Empezar' : 'Continuar'}
      </p>

      <img className="hero-start__icon" alt="see more icon" src={iconAngleDown} />
    </div>
  );
};

export default HeroStart;
