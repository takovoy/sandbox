import {OrganismModelNamespace as OrganismModel} from '../models/OrganismModel.namespace';
import {Organism} from '../impl/organism.impl';
import {EnergiesList} from '../impl/energies-list.impl';
import {ABILITIES} from './abilities.stub';
import {INVENTORY} from './inventory.stub';
import {GAME_FIELD} from 'src/stubs/game-field.stub';

export const PLAYER: OrganismModel.IOrganism = new Organism({
  name: 'Nemeru Seto',
  health: 100,
  organismType: OrganismModel.OrganismTypesEnum.human,
  energiesValue: new EnergiesList(100, 10, 5, 0, 10),
  energiesPower: new EnergiesList(15, 2, 2, 0, 0),
  abilities: ABILITIES,
  inventory: INVENTORY,
  quickAccessItems: INVENTORY,
  locationId: GAME_FIELD.id,
  sizeX: 1,
  sizeY: 1,
  positionX: 0,
  positionY: 0,
});
