import {AbilityConsumptionTypeEnum, IAbility} from '../models/IAbility';
import {EnergiesList} from './energies-list.impl';
import {MagicList} from './magic-list.impl';

export class Ability implements IAbility {
  constructor(
    public name: string,
    public energiesDemand = new EnergiesList(0, 0, 0, 0, 0),
    public magicTypeCorrelation = new MagicList(0, 0, 0, 0),
    public distance = 0,
    public resistance = 0,
    public damage = 0,
    public consumptionType = AbilityConsumptionTypeEnum.once,
    public consumption = 0,
  ) {}
}
