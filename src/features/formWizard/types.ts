import {FC} from 'react';

interface WizardNodeAdditionals {
  stepName: string;
}

export interface WizardNodeProps<FormData> {
  data: FormData;
  currentStep: number;
  next: (data?: FormData) => void;
  back: () => void;
}

export type WizardNode<FormData> = FC<WizardNodeProps<FormData>> & WizardNodeAdditionals;

export type WizardConfig<T> = WizardNode<T>[];

export interface FormWizardProps<FormData> {
  initialStep?: number;
  initialData?: FormData;
  wizardConfig: WizardConfig<FormData>;
  onFinish: () => void;
}
