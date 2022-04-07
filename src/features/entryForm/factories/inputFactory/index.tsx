import React, {useCallback, useEffect, useState} from 'react';

import {InputProps} from 'common/Input';
import NodeLayout from '../../componets/NodeLayout';
import InputItem from '../../componets/InputItem';
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
  const FormNode: HouseFormNode = ({currentStep, data, next, back, update}) => {
    const [state, setState] = useState(data);

    useEffect(() => {
      update(state);
    }, [state, update]);

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
            {form.map((item) => <InputItem
              {...item}
              key={item.id}
              value={state[item.id] as string}
              handleChange={handleChange}
            />)}
          </div>
        </NodeLayout>
    );
  };

  FormNode.stepName = nodeName;

  return FormNode;
};

export default inputFactory;
