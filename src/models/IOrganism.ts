import {IEnergyUser} from './IEnergyUser';

export enum OrganismTypesEnum {
  human = 'Human',
  animal = 'Animal',
}

export interface IOrganism extends IEnergyUser {
  name: string;
  health: number;
  type: OrganismTypesEnum;
}
