import React, { FC } from 'react';

import a11yClickKeyEvent from 'utils/a11y';
import iconLogo from 'assets/icons/logo.svg';

import './index.css';

interface LayoutProps {
  currentStep: number;
  totalSteps: number;
  stepNames: string[];
  onGoToStep: (stepIndex: number) => void;
}

const Layout: FC<LayoutProps> = ({ totalSteps, currentStep, stepNames, children, onGoToStep }) => {
  return (
    <div className="house-layout">
      <progress className="house-layout__progress" value={currentStep + 1} max={totalSteps} />

      <main className="house-layout__container">
        <aside className="house-layout__aside-menu">
          <figure className="house-layout__aside-logo">
            <img src={iconLogo} className="house-layout__aside-image" alt="Habi logo" />
          </figure>

          <div className="house-layout__step-list">
            {stepNames.map((stepName, index) => {
              const isCurrent = currentStep === index;
              const isPrevStep = index < currentStep;

              const activeClass = isCurrent ? 'house-layout__step-item--current' : '';
              const prevClass = isPrevStep ? 'house-layout__step-item--prev' : '';

              const interactProps = isPrevStep ? {
                role: 'button',
                tabIndex: 0,
                onClick: () => onGoToStep(index),
                onKeyUp: a11yClickKeyEvent(() => onGoToStep(index))
              } : {};

              return (
                <div
                  className={`house-layout__step-item ${activeClass} ${prevClass}`}
                  {...interactProps}
                  key={stepName}>
                  <span className="house-layout__step-index">{index + 1}</span>
                  <span className="house-layout__item-text">{stepName}</span>
                </div>
              );
            })}
          </div>
        </aside>

        <section className="house-layout__form-content">
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
