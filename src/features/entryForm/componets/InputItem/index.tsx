import React, {FC, useCallback} from 'react';

import Input, {InputTypes} from 'common/Input';
import {HouseForm} from '../../types';

interface InputItemProps {
  id: keyof HouseForm;
  label?: string;
  placeholder?: string;
  type?: InputTypes;
  value: string;
  handleChange: (id: keyof HouseForm, val: unknown) => void;
}

const InputItem: FC<InputItemProps> = ({
  id,
  label,
  placeholder,
  type,
  value,
  handleChange,
}) => {
  const onInputChange = useCallback((val: unknown) => {
    handleChange(id, val);
  }, [handleChange, id]);

  return (
    <Input
      id={id}
      type={type}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onInputChange}
    />
  );
};

export default InputItem;
