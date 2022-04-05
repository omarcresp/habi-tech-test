import React, {FC} from 'react';

import './index.css';

interface FormButtonsProps {
  showBackButton?: boolean;
  onNext: () => void;
  onBack: () => void;
}

const FormButtons: FC<FormButtonsProps> = ({showBackButton, onNext, onBack}) => {
  return (
    <div className="form-buttons">
      <button type="button" className="form-buttons__next" onClick={onNext}>Siguiente</button>

      {showBackButton && (
        <button type="button" className="form-buttons__back" onClick={onBack}>regresar</button>
      )}
    </div>
  );
};

export default FormButtons;
