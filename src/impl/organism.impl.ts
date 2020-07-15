import {OrganismModelNamespace} from '../models/OrganismModel.namespace';
import {EnergyModelNamespace as EnergyModel} from '../models/EnergyModel.namespace';
import {AbilityModelNamespace} from '../models/AbilityModel.namespace';
import {InventoryModelNamespace} from '../models/InventoryModel.namespace';

export class Organism implements OrganismModelNamespace.IOrganism {
  public id: string;
  public name: string;
  public health: number;
  public organismType: OrganismModelNamespace.OrganismTypesEnum;
  public energiesValue: EnergyModel.EnergiesValueList;
  public energiesPower: EnergyModel.EnergiesValueList;
  public abilities: AbilityModelNamespace.IAbility[];
  public inventory: InventoryModelNamespace.IInventoryItem[];
  public quickAccessItems: InventoryModelNamespace.IInventoryItem[];
  public locationId: string;
  public sizeX: number;
  public sizeY: number;
  public positionX: number;
  public positionY: number;

  constructor(rawOrganism: OrganismModelNamespace.IOrganism) {
    this.id = rawOrganism.id || null;
    this.name = rawOrganism.name;
    this.health = rawOrganism.health;
    this.organismType = rawOrganism.organismType;
    this.energiesValue = rawOrganism.energiesValue;
    this.energiesPower = rawOrganism.energiesPower;
    this.abilities = rawOrganism.abilities;
    this.inventory = rawOrganism.inventory;
    this.quickAccessItems = rawOrganism.quickAccessItems;
    this.locationId = rawOrganism.locationId;
    this.sizeX = rawOrganism.sizeX;
    this.sizeY = rawOrganism.sizeY;
    this.positionX = rawOrganism.positionX;
    this.positionY = rawOrganism.positionY;
  }
}
