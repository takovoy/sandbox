import {EnergiesList} from './energies-list.impl';
import {MagicList} from './magic-list.impl';
import {EnergyModelNamespace} from 'src/models/EnergyModel.namespace';
import {AbilityModelNamespace as AbilityModel} from 'src/models/AbilityModel.namespace';

export class Ability implements AbilityModel.IAbility {
  public name: string;
  public energiesDemand: EnergyModelNamespace.EnergiesValueList;
  public magicTypeCorrelation: EnergyModelNamespace.MagicValueList;
  public distance: number;
  public resistance: number;
  public damage: number;
  public effectTime: number;
  public effectDamage: number;

  constructor(rawAbility: AbilityModel.IAbility) {
    this.name = rawAbility.name || 'Unknown ability';
    this.energiesDemand = rawAbility.energiesDemand || new EnergiesList();
    this.magicTypeCorrelation = rawAbility.magicTypeCorrelation || new MagicList({});
    this.distance = rawAbility.distance || 0;
    this.resistance = rawAbility.resistance || 0;
    this.damage = rawAbility.damage || 0;
    this.effectTime = rawAbility.effectTime || 0;
    this.effectDamage = rawAbility.effectDamage || 0;
  }
}
