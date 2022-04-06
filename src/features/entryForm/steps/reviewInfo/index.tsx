import React from 'react';

import NodeLayout from '../../componets/NodeLayout';
import {HouseFormNode} from '../../types';

const parseBoolean = (val: boolean) => {
  return val ? 'Si' : 'No';
};

const ReviewInfo: HouseFormNode = ({ currentStep, data, back, next }) => {
  return (
    <NodeLayout
      title="Confirma tu informacion"
      currentStep={currentStep}
      back={back}
      next={() => next()}>
      <div className="house-amenities">
        {Object.entries(data).filter(([, val]) => val !== '').map(([key, value]) => (
          <p key={key}>
            <span>{key}:</span>
            <span> {value === true || value === false ? parseBoolean(value as boolean) : JSON.stringify(value)}</span>
          </p>
        ))}
      </div>
    </NodeLayout>
  );
};

ReviewInfo.stepName = 'Review';

export default ReviewInfo;
