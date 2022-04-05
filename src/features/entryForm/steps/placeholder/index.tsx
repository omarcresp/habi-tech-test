import React from 'react';

import {HouseFormNode} from '../../types';
import FormTitle from '../../componets/FormTitle';
import FormButtons from '../../componets/FormButtons';

import './index.css';

const Placeholder: HouseFormNode = ({currentStep, next, back}) => {
  return (
    <div className="placeholder">
      <FormTitle>Titulo de nodo</FormTitle>

      <div className="placeholder__form-content">
        <p>Hola mel este es un paso :D</p>
      </div>

      <FormButtons showBackButton={!!currentStep} onNext={next} onBack={back} />
    </div>
  );
};

Placeholder.stepName = 'Placeholder';

export default Placeholder;
