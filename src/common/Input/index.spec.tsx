import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '.';

describe('Input', () => {
  test('Should render', () => {
    const onChange = jest.fn();

    render(<Input id="test" label="lorem" onChange={onChange} />);

    expect(screen.getByLabelText('lorem')).toBeVisible();
  });

  test('Should recognize default value', () => {
    const onChange = jest.fn();

    render(<Input id="test" label="lorem" value="default" onChange={onChange} />);

    expect(screen.getByLabelText('lorem')).toHaveValue('default');
  });

  test('Should focus on click label', () => {
    const onChange = jest.fn();

    render(<Input id="test" label="lorem" onChange={onChange} />);

    userEvent.click(screen.getByText('lorem'));
    userEvent.keyboard('default');

    expect(screen.getByLabelText('lorem')).toHaveValue('default');
  });


  test('Should focus on click label', () => {
    const onChange = jest.fn();

    render(<Input
      id="test"
      label="lorem"
      onChange={(val) => onChange(val)} 
    />);

    userEvent.type(screen.getByLabelText('lorem'), 'default');

    expect(onChange).toBeCalledWith('default');
  });
});
