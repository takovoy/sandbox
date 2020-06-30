import {EnergyModelNamespace} from './EnergyModel.namespace';

export namespace AbilityModelNamespace {
  export enum BaseCalculableAbilityPropertiesEnum {
    distance = 'distance',
    resistance = 'resistance',
    damage = 'damage',
    effectTime = 'effectTime',
    effectDamage = 'effectDamage',
  }

  export type BaseAbilityPropertiesList = {
    [key in BaseCalculableAbilityPropertiesEnum]: number;
  };

  export const BASE_ABILITY_COEFFICIENTS: BaseAbilityPropertiesList = {
    [BaseCalculableAbilityPropertiesEnum.distance]: 1.1,
    [BaseCalculableAbilityPropertiesEnum.resistance]: 1.1,
    [BaseCalculableAbilityPropertiesEnum.damage]: 1.2,
    [BaseCalculableAbilityPropertiesEnum.effectTime]: 0.4,
    [BaseCalculableAbilityPropertiesEnum.effectDamage]: 1.2,
  };

  export interface IRawAbility extends BaseAbilityPropertiesList {
    name: string;
  }

  export interface IAbility extends IRawAbility {
    energiesDemand: EnergyModelNamespace.EnergiesValueList;
    magicTypeCorrelation: EnergyModelNamespace.MagicValueList;
  }
}
