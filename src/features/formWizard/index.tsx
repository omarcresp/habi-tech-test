import React, {useCallback, useEffect, useMemo, useState} from 'react';

import {FormWizardProps} from './types';
import Layout from './components/layout';

function FormWizard<FormData>({
  initialStep,
  initialData,
  wizardConfig,
  localId,
  onFinish,
}: FormWizardProps<FormData>) {
  const [currentStep, setCurrentStep] = useState(initialStep ?? 0);
  const [formData, setFormData] = useState<FormData>(initialData ?? {} as FormData);

  const CurrentNode = useMemo(() => wizardConfig[currentStep], [wizardConfig, currentStep]);
  const stepNames = useMemo(() => wizardConfig.map(({stepName}) => stepName), [wizardConfig]);
  const isFinalStep = useMemo(() => wizardConfig.length - 1 === currentStep, [currentStep, wizardConfig.length]);

  useEffect(() => {
    if (localId) {
      localStorage.setItem(localId, JSON.stringify({formData, currentStep}));
    }
  }, [currentStep, formData, localId]);

  const handleBack =  useCallback(() => {
    setCurrentStep((c) => Math.max(c - 1, 0));
  }, []);

  const handleUpdate =  useCallback((data?: unknown) => {
    if (data && data instanceof Object) {
      setFormData((oldData) => ({
        ...oldData,
        ...data,
      }));
    }
  }, []);

  const handleNext =  useCallback((data?: unknown) => {
    handleUpdate(data);

    if (isFinalStep) {
      onFinish();
    } else {
      setCurrentStep((c) => Math.min(c + 1, wizardConfig.length - 1));
    }
  }, [isFinalStep, wizardConfig.length, handleUpdate, onFinish]);

  const goToStep = useCallback((indexTo: number) => {
    /**
     * This clamp the value to avoid the indexTo to be higher than the total steps length or lower than 0
     */
    const clamppedIndex = Math.min(Math.max(0, indexTo), wizardConfig.length - 1);

    setCurrentStep(clamppedIndex);
  }, [wizardConfig.length]);

  return (
    <Layout
      currentStep={currentStep}
      totalSteps={wizardConfig.length}
      stepNames={stepNames}
      onGoToStep={goToStep}>
      <CurrentNode
        currentStep={currentStep}
        data={formData}
        back={handleBack}
        next={handleNext}
        update={handleUpdate}
      />
    </Layout>
  );
}

export default FormWizard;
