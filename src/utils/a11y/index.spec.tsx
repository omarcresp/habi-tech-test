import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {a11yClickKeyEvent} from '.';

describe('a11yClickKeyEvent util', () => {
  test('Should call the cb on user focus and press enter', () => {
    const myCb = jest.fn();

    render(<div role="button" tabIndex={0} onKeyUp={a11yClickKeyEvent(myCb)}>test</div>);

    userEvent.tab();
    userEvent.keyboard('{Enter}');

    expect(myCb).toBeCalledTimes(1);
  });

  test('Should no call the cb if the user does not press enter', () => {
    const myCb = jest.fn();

    render(<div role="button" tabIndex={0} onKeyUp={a11yClickKeyEvent(myCb)}>test</div>);

    userEvent.tab();
    userEvent.keyboard('{Shift}');
    userEvent.keyboard('test');

    expect(myCb).toBeCalledTimes(0);
  });

  test('Should no call the cb if the user does not focus the element', () => {
    const myCb = jest.fn();

    render(<div role="button" tabIndex={0} onKeyUp={a11yClickKeyEvent(myCb)}>test</div>);

    userEvent.keyboard('{Enter}');

    expect(myCb).toBeCalledTimes(0);
  });
});
