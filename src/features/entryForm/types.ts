import {WizardNode, WizardNodeProps} from 'features/formWizard/types';

export interface HouseForm {
  address: string;
  email: string;
  name: string;
  dni: string;
  price: number;
  floor: number;
}

export type HouseFormNode = WizardNode<HouseForm>;
export type HouseFormNodeProps = WizardNodeProps<HouseForm>;
