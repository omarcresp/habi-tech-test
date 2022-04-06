import React, { FC, useMemo, useState } from 'react';

import EntryForm, {FORM_KEY} from 'features/entryForm';
import HeroStart from './components/hero-start';
import Header from './components/header';

import './index.css';

export const FORM_ID = 'entryForm';

const Home: FC = () => {
  const [formInit, setFormInit] = useState(false);
  const hasLocal = useMemo(() => !!localStorage.getItem(FORM_KEY), []);

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
              {hasLocal
                ? 'Ya falta poco! Termina el form'
                : 'Empieza ya el proceso para poder vender tu casa.'
              }
            </h3>
          </div>

          <HeroStart isInitialState={!hasLocal} />
        </div>
      )}

      <div id={FORM_ID} className="home-container__entry-form">
        <EntryForm onInit={onInit} />
      </div>
    </div>
  );
};

export default Home;
