import {EnergyModelNamespace} from './EnergyModel.namespace';

export enum AbilityConsumptionTypeEnum {
  once = 'Once',
  perTime = 'PerTime',
}

export interface IAbility {
  name: string;
  energiesDemand: EnergyModelNamespace.EnergiesValueList;
  magicTypeCorrelation: EnergyModelNamespace.MagicValueList;
  distance: number;
  resistance: number;
  damage: number;
  consumptionType: AbilityConsumptionTypeEnum;
  consumption: number;
}
