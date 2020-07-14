import {OrganismModelNamespace} from '../models/OrganismModel.namespace';
import {Organism} from '../impl/organism.impl';
import OrganismTypesEnum = OrganismModelNamespace.OrganismTypesEnum;
import {EnergiesList} from '../impl/energies-list.impl';
import {ABILITIES} from './abilities.stub';
import {INVENTORY} from './inventory.stub';

export const PLAYER: OrganismModelNamespace.IOrganism = new Organism({
  name: 'Nemeru Seto',
  health: 100,
  organismType: OrganismTypesEnum.human,
  energiesValue: new EnergiesList(100, 10, 5, 0, 10),
  energiesPower: new EnergiesList(15, 2, 2, 0, 0),
  abilities: ABILITIES,
  inventory: INVENTORY,
});
