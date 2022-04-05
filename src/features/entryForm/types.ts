import {WizardNode} from 'features/formWizard/types';

export interface HouseForm {
  address: string;
}

export type HouseFormNode = WizardNode<HouseForm>;
