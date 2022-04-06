import React, {useCallback, useState} from 'react';

import Input, {InputProps} from 'common/Input';
import NodeLayout from '../../componets/NodeLayout';
import {HouseFormNode, HouseForm} from '../../types';

import './index.css';

interface FormBuilder extends Omit<InputProps, 'onChange' | 'value'> {
  id: keyof HouseForm;
  required?: boolean;
}

interface InputFactoryConfig {
  nodeName: string;
  form: FormBuilder[];
  title: string;
}

const inputFactory = ({form, nodeName, title}: InputFactoryConfig) => {
  const FormNode: HouseFormNode = ({currentStep, data, next, back}) => {
    const [state, setState] = useState(data);

    const handleChange = useCallback((key: keyof HouseForm, value: unknown) => {
      setState((current) => ({
        ...current,
        [key]: value,
      }));
    }, []);

    return (
      <NodeLayout
        title={title}
        back={back}
        currentStep={currentStep}
        next={() => next(state)}>
          <div className="input-factory">
            {form.map(({id, label, placeholder, type}) => (
              <Input
                id={id}
                key={id}
                type={type}
                label={label}
                placeholder={placeholder}
                value={state[id]}
                onChange={(val) => handleChange(id, val)}
              />
            ))}
          </div>
        </NodeLayout>
    );
  };

  FormNode.stepName = nodeName;

  return FormNode;
};

export default inputFactory;
