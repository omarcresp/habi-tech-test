import React, { FC, useState } from 'react';

import EntryForm from 'features/entryForm';
import HeroStart from './components/hero-start';
import Header from './components/header';

import './index.css';

export const FORM_ID = 'entryForm';

const Home: FC = () => {
  const [formInit, setFormInit] = useState(false);

  const onInit = () => {
    setFormInit(true);
  };

  return (
    <div className="home-container">
      {!formInit && (
        <div className="home-container__hero">
          <Header />

          <div className="home-container__hero-content">
            <h3 className="home-container__hero-title">
              Empieza ya el proceso para poder vender tu casa.
            </h3>
          </div>

          <HeroStart isInitialState />
        </div>
      )}

      <div id={FORM_ID} className="home-container__entry-form">
        <EntryForm onInit={onInit} />
      </div>
    </div>
  );
};

export default Home;
