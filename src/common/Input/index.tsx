import React, {FC, ChangeEvent, InputHTMLAttributes} from 'react';

import './index.css';

export interface InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  onChange: (value: this['value'], ev: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  id,
  label,
  placeholder,
  type = 'text',
  value,
  onChange
}) => {
  return (
    <label className="habi-input" htmlFor={id}>
      {label && (
        <p className="habi-input__label">{label}</p>
      )}

      <input
        className="habi-input__input"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(ev) => onChange(ev.target.value, ev)}
      />
    </label>
  );
};

export default Input;
