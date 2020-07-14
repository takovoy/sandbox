import {Ability} from './ability.impl';
import {EnergiesList} from './energies-list.impl';
import {MagicList} from './magic-list.impl';
import {AbilityModelNamespace as AbilityModel} from 'src/models/AbilityModel.namespace';

export class MagicAbilitiesFabric {
  public static calcManaDemand(baseAbilityProps: AbilityModel.BaseAbilityPropertiesList): number {
    return Object.keys(AbilityModel.BASE_ABILITY_COEFFICIENTS).reduce((res, key) => {
      const coefficient = AbilityModel.BASE_ABILITY_COEFFICIENTS[key];
      res += baseAbilityProps[key] * coefficient;
      return res;
    }, 0);
  }

  public static createFireAbility(baseAbilityProps: AbilityModel.IRawAbility): AbilityModel.IAbility {
    return new Ability({
      ...baseAbilityProps,
      energiesDemand: new EnergiesList(this.calcManaDemand(baseAbilityProps)),
      magicTypeCorrelation: new MagicList({fire: 1}),
    });
  }

  public static createWaterAbility(baseAbilityProps: AbilityModel.IRawAbility): AbilityModel.IAbility {
    return new Ability({
      ...baseAbilityProps,
      energiesDemand: new EnergiesList(this.calcManaDemand(baseAbilityProps)),
      magicTypeCorrelation: new MagicList({water: 1}),
    });
  }

  public static createAirAbility(baseAbilityProps: AbilityModel.IRawAbility): AbilityModel.IAbility {
    return new Ability({
      ...baseAbilityProps,
      energiesDemand: new EnergiesList(this.calcManaDemand(baseAbilityProps)),
      magicTypeCorrelation: new MagicList({air: 1}),
    });
  }

  public static createSoilAbility(baseAbilityProps: AbilityModel.IRawAbility): AbilityModel.IAbility {
    return new Ability({
      ...baseAbilityProps,
      energiesDemand: new EnergiesList(this.calcManaDemand(baseAbilityProps)),
      magicTypeCorrelation: new MagicList({soil: 1}),
    });
  }

  public static createElectricityAbility(baseAbilityProps: AbilityModel.IRawAbility): AbilityModel.IAbility {
    return new Ability({
      ...baseAbilityProps,
      energiesDemand: new EnergiesList(this.calcManaDemand(baseAbilityProps)),
      magicTypeCorrelation: new MagicList({electricity: 1}),
    });
  }
}
