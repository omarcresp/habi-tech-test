import React from 'react';
import {screen, render} from '@testing-library/react';

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
});
