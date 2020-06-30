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

  constructor({
    name = 'Unknown ability',
    energiesDemand = new EnergiesList(),
    magicTypeCorrelation = new MagicList(),
    distance = 0,
    resistance = 0,
    damage = 0,
    effectTime = 0,
    effectDamage = 0,
  }: AbilityModel.IAbility) {
    this.name = name;
    this.energiesDemand = energiesDemand;
    this.magicTypeCorrelation = magicTypeCorrelation;
    this.distance = distance;
    this.resistance = resistance;
    this.damage = damage;
    this.effectTime = effectTime;
    this.effectDamage = effectDamage;
  }
}
