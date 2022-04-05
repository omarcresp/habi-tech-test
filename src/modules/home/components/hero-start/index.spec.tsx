import React from 'react';
import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HeroStart from '.';

describe('<HeroStart />', () => {
  test('Should render default state', () => {
    render(<HeroStart isInitialState />);

    expect(screen.getByText('Empezar')).toBeVisible();
  });

  test('Should render continue state', () => {
    render(<HeroStart isInitialState={false} />);

    expect(screen.getByText('Continuar')).toBeVisible();
  });

  test('Should send to form', () => {
    const auxCb = jest.fn();

    render(<HeroStart isInitialState onGoToForm={auxCb} />);
    userEvent.click(screen.getByText('Empezar'));

    expect(auxCb).toBeCalledTimes(1);
  });
});
