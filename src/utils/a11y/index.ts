import { KeyboardEvent } from 'react';

/**
 * This function works as a workaround for the jsx-a11y/click-events-have-key-events rule
 *
 * because users that doesn't use a mouse can not click on elements you should attach a
 * keyboard event to allows those users to interact with this element
 *
 * @param ev the native Keyboard event
 * @param cb a callback that should be the same passed as onClick
 */
export const a11yClickKeyEvent = (cb: () => void) => {
  return (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      cb();
    }
  };
};

export default a11yClickKeyEvent;
