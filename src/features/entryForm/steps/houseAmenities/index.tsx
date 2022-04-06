import React, { useCallback, useEffect, useState } from 'react';

import Checkbox from 'common/Checkbox';
import NodeLayout from '../../componets/NodeLayout';
import {HouseForm, HouseFormNode} from '../../types';

import './index.css';

interface CheckboxBuilder {
  id: keyof HouseForm;
  label: string;
}

const AMENITIES_CONFIG: CheckboxBuilder[] = [
  {id: 'has_parking', label: 'Tiene parqueadero'},
  {id: 'covered_parking', label: 'Parqueadero cubierto'},
  {id: 'gathering_zone', label: 'Zona comun'},
  {id: 'child_park', label: 'Parque de juegos'},
  {id: 'bbq_zone', label: 'Zona BBQ'},
];

const HouseAmenities: HouseFormNode = ({ currentStep, data, update, back, next }) => {
  const [state, setState] = useState(data);

  useEffect(() => {
    update(state);
  }, [state, update]);

  const handleChange = useCallback((key: keyof HouseForm, value: boolean) => {
    setState((current) => ({
      ...current,
      [key]: value,
    }));
  }, []);

  return (
    <NodeLayout
      title="Con que amenidades cuenta su casa?"
      currentStep={currentStep}
      back={back}
      next={() => next(state)}>
      <div className="house-amenities">
        {AMENITIES_CONFIG.map(({id, label}) => (
          <Checkbox id={id} label={label} checked={state[id] as boolean} onChange={(val) => handleChange(id, val)} />
        ))}
      </div>
    </NodeLayout>
  );
};

HouseAmenities.stepName = 'House Amenities';

export default HouseAmenities;
