import {FC} from 'react';

interface WizardNodeAdditionals {
  stepName: string;
}

export type WizardNode<FormData> = FC<{
  data: FormData;
  currentStep: number;
  next: (data?: FormData) => void;
  back: () => void;
}> & WizardNodeAdditionals;

export type WizardConfig<T> = WizardNode<T>[];

export interface FormWizardProps<FormData> {
  initialStep?: number;
  initialData?: FormData;
  wizardConfig: WizardConfig<FormData>;
  onFinish: () => void;
}
