import React, { FC } from 'react';

import HeroStart from './components/hero-start';
import Header from './components/header';

import './index.css';

const COMP_NAME = 'home-container';

const Home: FC = () => (
  <div className={COMP_NAME}>
    <div className={`${COMP_NAME}__hero`}>
      <Header />

      <div className={`${COMP_NAME}__hero-content`}>
        <h3 className={`${COMP_NAME}__hero-title`}>
          Empieza ya el proceso para poder vender tu casa
        </h3>
      </div>

      <HeroStart />
    </div>

    <main id="entryForm" className={`${COMP_NAME}__entry-form`}>
      <h1>La vida es maravillosa, vivila wachin</h1>
    </main>
  </div>
);

export default Home;
