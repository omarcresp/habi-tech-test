import React, {FC} from 'react';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (value: boolean, ev: unknown) => void;
}

const Checkbox: FC<CheckboxProps> = ({id, label, checked, onChange}) => {
  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        value={id}
        checked={checked}
        onChange={(ev) => onChange(ev.target.checked, ev)}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
