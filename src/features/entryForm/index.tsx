import React, { FC, useState } from 'react';

import FormWizard from 'features/formWizard';
import wizardConfig from './wizard';

import './index.css';

type FormStates = 'initial' | 'wizard' | 'final';

interface ModalCopies {
  title: string;
  description?: string;
  c2a: string;
}

interface EntryFormProps {
  onInit: () => void;
}

const MODAL_COPIES: Partial<Record<FormStates, ModalCopies>> = {
  initial: {
    title: 'Hola Mundo',
    c2a: 'Empezar',
  },
  final: {
    title: 'Adios vida',
    c2a: 'Otra vez',
  },
};

const EntryForm: FC<EntryFormProps> = ({onInit}) => {
  const [currentState, setCurrentState] = useState<FormStates>('initial');

  if (currentState === 'wizard') {
    return (
      <FormWizard wizardConfig={wizardConfig} onFinish={() => setCurrentState('final')} />
    );
  }

  const swapState = () => {
    onInit();
    setCurrentState((current) => current === 'initial' ? 'wizard' : 'initial');
  };

  return (
    <div className="entry-form">
      <h2>{MODAL_COPIES[currentState]?.title}</h2>

      {MODAL_COPIES[currentState]?.description && (
        <p>{MODAL_COPIES[currentState]?.description}</p>
      )}

      <button type="button" onClick={swapState}>{MODAL_COPIES[currentState]?.c2a}</button>
    </div>
  );
};

export default EntryForm;
