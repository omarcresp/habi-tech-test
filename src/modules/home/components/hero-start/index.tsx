import React, { FC } from 'react';

import './index.css';

const HeroStart: FC = () => (
  <a className="hero-start" href="#entryForm">
    <p className="hero-start__copy">Empezar</p>

    <img className="hero-start__icon" src="/assets/icons/angle-down.svg" alt="see more icon" />
  </a>
);

export default HeroStart;
