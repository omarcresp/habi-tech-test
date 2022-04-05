import React, { FC } from 'react';

import HeroStart from './components/hero-start';
import Header from './components/header';

import './index.css';

export const FORM_ID = 'entryForm';

const Home: FC = () => (
  <div className="home-container">
    <div className="home-container__hero">
      <Header />

      <div className="home-container__hero-content">
        <h3 className="home-container__hero-title">
          Empieza ya el proceso para poder vender tu casa
        </h3>
      </div>

      <HeroStart />
    </div>

    <main id={FORM_ID} className="home-container__entry-form">
      <h1>La vida es maravillosa, vivila wachin</h1>
    </main>
  </div>
);

export default Home;
