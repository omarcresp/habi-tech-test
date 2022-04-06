import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EntryForm from '.';

describe('Input', () => {
  test('Should render', () => {
    const onInit = jest.fn();

    render(<EntryForm onInit={onInit} />);

    expect(screen.getByText('Bienvenido')).toBeVisible();
  });

  test('Should init form', () => {
    const onInit = jest.fn();

    render(<EntryForm onInit={onInit} />);

    userEvent.click(screen.getByText('Empezar'));

    expect(onInit).toBeCalledTimes(1);
    expect(
      screen.getByText('Ingresa tu informacion personal')
    ).toBeVisible();
  });

  test('Should finish form', () => {
    const onInit = jest.fn();

    render(<EntryForm onInit={onInit} />);

    userEvent.click(screen.getByText('Siguiente'));
    userEvent.click(screen.getByText('Siguiente'));
    userEvent.click(screen.getByText('Siguiente'));
    userEvent.click(screen.getByText('Siguiente'));

    expect(
      screen.getByText('Todo listo')
    ).toBeVisible();

    userEvent.click(screen.getByText('Otra vez'));

    expect(
      screen.getByText('Bienvenido')
    ).toBeVisible();
  });
});
