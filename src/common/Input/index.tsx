import React, { FC, InputHTMLAttributes, KeyboardEvent, useState, useEffect, useMemo, useRef } from 'react';

import './index.css';

type InputValue = InputHTMLAttributes<HTMLInputElement>['value'];

export type InputTypes = 'email' | 'money' | 'text' | 'number';

export interface InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: InputTypes;
  value?: InputValue;
  onChange: (value: this['value']) => void;
}

interface TypeConfig {
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  validator?: (val: InputValue) => boolean;
  constraint?: (ev: KeyboardEvent<HTMLInputElement>) => boolean;
  transformer?: (val: InputValue) => InputValue;
  parser?: (val: InputValue) => InputValue;
}

const TYPE_BUILDER: Record<InputTypes, TypeConfig> = {
  email: {
    type: 'text',
    validator: (val) => {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

      return !String(val).toLowerCase().match(emailRegex);
    },
  },
  money: {
    type: 'text',
    parser: (val) => typeof val === 'string' ? val.replace(' COP', '') : val,
    transformer: (val) => `${val} COP`,
  },
  number: {
    type: 'number',
  },
  text: {
    type: 'text',
  },
};

function usePrevious(value: unknown) {
  const ref = useRef<unknown>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const Input: FC<InputProps> = ({
  id,
  label,
  placeholder,
  type = 'text',
  value,
  onChange
}) => {
  const [hasError, setHasError] = useState(false);
  const [internalValue, setInteralValue] = useState<InputValue>();
  const prevValue = usePrevious(internalValue);
  const aux = useMemo(() => TYPE_BUILDER[type], [type]);

  useEffect(() => {
    if (value !== internalValue && value !== prevValue) {
      setInteralValue(value);
    }
  }, [internalValue, prevValue, value]);

  useEffect(() => {
    onChange(internalValue);
  }, [internalValue, onChange]);

  useEffect(() => {
    if (aux?.validator) {
      setHasError(aux.validator(internalValue));
    }
  }, [internalValue, aux]);

  const errorClass = hasError ? 'habi-input__input--error' : '';

  return (
    <label className="habi-input" htmlFor={id}>
      {label && (
        <p className="habi-input__label">{label}</p>
      )}

      <input
        className={`habi-input__input ${errorClass}`}
        type={type}
        id={id}
        placeholder={placeholder}
        value={internalValue}
        onChange={(ev) => setInteralValue(ev.target.value)}
      />
    </label>
  );
};

export default Input;
