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
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu sollicitudin elit. Morbi vel egestas
          sem. Sed cursus erat et est tristique fermentum. Nulla sed commodo nisl, quis feugiat nulla
        </h3>
      </div>

      <HeroStart />
    </div>

    <main className={`${COMP_NAME}__entry-form`}>
      <h1>La vida es maravillosa, vivila wachin</h1>
    </main>
  </div>
);

export default Home;
