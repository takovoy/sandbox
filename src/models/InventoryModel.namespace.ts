import {EnergyModelNamespace} from './EnergyModel.namespace';
import {CommonNamespace} from './Common.namespace';

export namespace InventoryModelNamespace {

  export enum InventoryItemTypesEnum {
    armor = 'armor',
    weapon = 'weapon',
    accessories = 'accessories',
  }

  export interface IInventoryItem {
    name: string;
    description: string;
    inventoryItemType: InventoryItemTypesEnum;
    level: CommonNamespace.LevelsEnum;
    material: CommonNamespace.MaterialsEnum;
    quantity: number;
    durability: number | 'infinity';
  }

  export enum ArmorItemTypesEnum {
    helmet = 'helmet',
    shoulders = 'shoulders',
    bracers = 'bracers',
    gloves = 'gloves',
    chestArmor = 'chestArmor',
    belt = 'belt',
    leggings = 'leggings',
    boots = 'boots',
  }

  export interface IArmorItem extends IInventoryItem {
    inventoryItemType: InventoryItemTypesEnum.armor;
    armorItemType: ArmorItemTypesEnum;
    physicalResistance: number;
    magicResistance: EnergyModelNamespace.MagicValueList;
  }

  export enum WeaponItemTypesEnum {
    sword = 'sword',
    mace = 'mace',
    ax = 'ax',
    bow = 'bow',
    lance = 'lance',
    poleaxe = 'poleaxe',
  }

  export interface IWeaponItem extends IInventoryItem {
    inventoryItemType: InventoryItemTypesEnum.weapon;
    weaponItemType: WeaponItemTypesEnum;
    physicalDamage: number;
    magicDamage: EnergyModelNamespace.MagicValueList;
  }

  export enum AccessoryItemTypesEnum {
    headphones = 'headphones',
    ring = 'ring',
    glasses = 'glasses',
  }

  export interface IAccessoryItem extends IInventoryItem {
    inventoryItemType: InventoryItemTypesEnum.accessories;
    accessoryItemType: AccessoryItemTypesEnum;
  }
}
