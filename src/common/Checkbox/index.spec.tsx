import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';

describe('Checkbox', () => {
  test('Should render', () => {
    const onChange = jest.fn();

    render(<Checkbox id="test" checked={false} label="lorem" onChange={onChange} />);

    expect(screen.getByLabelText('lorem')).toBeVisible();
  });

  test('Should be check by input', () => {
    const onChange = jest.fn();

    render(<Checkbox
      id="test"
      checked={false}
      label="lorem"
      onChange={(val) => onChange(val)}
    />);

    userEvent.click(screen.getByLabelText('lorem'));

    expect(onChange).toBeCalledWith(true);
  });

  test('Should be check by label', () => {
    const onChange = jest.fn();

    render(<Checkbox
      id="test"
      checked={false}
      label="lorem"
      onChange={(val) => onChange(val)}
    />);

    userEvent.click(screen.getByText('lorem'));

    expect(onChange).toBeCalledWith(true);
  });

  test('Should recognize default value', () => {
    const onChange = jest.fn();

    render(<Checkbox
      id="test"
      checked
      label="lorem"
      onChange={(val) => onChange(val)}
    />);

    expect(screen.getByLabelText('lorem')).toBeChecked();
  });
});
