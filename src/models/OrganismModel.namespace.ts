import {EnergyModelNamespace as EnergyModel} from './EnergyModel.namespace';
import {AbilityModelNamespace} from './AbilityModel.namespace';
import {InventoryModelNamespace} from './InventoryModel.namespace';

export namespace OrganismModelNamespace {

  export enum OrganismTypesEnum {
    human = 'human',
    elf = 'elf',
    dwarf = 'dwarf',
    orc = 'orc',
    animal = 'animal',
    monster = 'monster',
  }

  export interface IOrganism {
    id?: string;
    name: string;
    health: number;
    organismType: OrganismTypesEnum;
    energiesValue: EnergyModel.EnergiesValueList;
    energiesPower: EnergyModel.EnergiesValueList;
    abilities: AbilityModelNamespace.IAbility[];
    inventory: InventoryModelNamespace.IInventoryItem[];
    quickAccessItems: InventoryModelNamespace.IInventoryItem[];
    locationId: string;
    position: [number, number];
  }
}
