import React, { FC, useState } from 'react';

import iconLogo from 'assets/icons/logo.svg';

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
    title: 'Bienvenido',
    description: 'Completa este formluario para empezar el proceso de venta de tu casa',
    c2a: 'Empezar',
  },
  final: {
    title: 'Todo listo',
    description: 'Nuestro equipo de ventas se pondra en contacto contigo pronto para terminar el proceso',
    c2a: 'Empezar de nuevo',
  },
};

export const FORM_KEY = 'entry-form';

const EntryForm: FC<EntryFormProps> = ({onInit}) => {
  const [localForm, setLocalForm] = useState(JSON.parse(localStorage.getItem(FORM_KEY) ?? '{}'));
  const [currentState, setCurrentState] = useState<FormStates>('initial');

  if (currentState === 'wizard' || localForm.formData) {
    const onFinish = () => {
      setCurrentState('final');
      localStorage.removeItem(FORM_KEY);
      setLocalForm({});
    };

    return (
      <FormWizard
        localId={FORM_KEY}
        initialData={localForm.formData ?? {}}
        initialStep={localForm.currentStep ?? 0}
        wizardConfig={wizardConfig}
        onFinish={onFinish}
      />
    );
  }

  const swapState = () => {
    onInit();
    setCurrentState((current) => current === 'initial' ? 'wizard' : 'initial');
  };

  return (
    <div className="entry-form">
      <img className="entry-form__logo" src={iconLogo} alt="Habi logo" />

      <h2 className="entry-form__title">{MODAL_COPIES[currentState]?.title}</h2>

      {MODAL_COPIES[currentState]?.description && (
        <p className="entry-form__description">{MODAL_COPIES[currentState]?.description}</p>
      )}

      <button className="entry-form__button" type="button" onClick={swapState}>{MODAL_COPIES[currentState]?.c2a}</button>
    </div>
  );
};

export default EntryForm;
