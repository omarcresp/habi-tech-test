import {WizardNode, WizardNodeProps} from 'features/formWizard/types';

export interface HouseForm {
  address: string;
  email: string;
  name: string;
  dni: string;
  price: number;
  floor: number;
  has_parking: boolean;
  covered_parking: boolean;
  gathering_zone: boolean;
  child_park: boolean;
  bbq_zone: boolean;
}

export type HouseFormNode = WizardNode<HouseForm>;
export type HouseFormNodeProps = WizardNodeProps<HouseForm>;
