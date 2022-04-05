import React from 'react';
import {screen, render} from '@testing-library/react';

import Home from '.';

describe('<Home />', () => {
  test('Should render default view', () => {
    render(<Home />);

    expect(screen.getByText('Empieza ya el proceso para poder vender tu casa.')).toBeVisible();
  });
});
