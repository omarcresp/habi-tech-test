import React from 'react';
import {screen, render} from '@testing-library/react';

import Header from '.';

describe('<Header />', () => {
  test('Should render', () => {
    render(<Header />);

    expect(screen.getByAltText('Habi logo')).toBeVisible();
  });
});
