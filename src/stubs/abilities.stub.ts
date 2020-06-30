import {MagicAbilitiesFabric} from 'impl/magic-abilities.fabric';
import {AbilityModelNamespace as AbilityModel} from 'models/AbilityModel.namespace';

export const ABILITIES: AbilityModel.IAbility[] = [
  MagicAbilitiesFabric.createFireAbility({
    name: 'Fire ball',
    distance: 3,
    resistance: 1,
    damage: 5,
    effectTime: 5,
    effectDamage: 2,
  }),
  MagicAbilitiesFabric.createWaterAbility({
    name: 'Water arrow',
    distance: 3,
    resistance: 1,
    damage: 5,
    effectTime: 5,
    effectDamage: 2,
  }),
];
