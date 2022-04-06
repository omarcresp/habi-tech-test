import React, { FC } from 'react';

import { HouseFormNodeProps } from '../../types';
import FormTitle from '../FormTitle';
import FormButtons from '../FormButtons';

import './index.css';

type UsedNodeProps = 'currentStep' | 'next' | 'back';

type NodeLayoutProps = Pick<HouseFormNodeProps, UsedNodeProps> & {
  title: string;
};

const NodeLayout: FC<NodeLayoutProps> = ({ currentStep, next, back, title, children }) => {
  return (
    <div className="node-layout">
      <FormTitle>{title}</FormTitle>

      <div className="node-layout__form-content">
        {children}
      </div>

      <FormButtons showBackButton={!!currentStep} onNext={next} onBack={back} />
    </div>
  );
};

export default NodeLayout;
