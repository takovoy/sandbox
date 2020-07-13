import {EnergyModelNamespace} from './EnergyModel.namespace';

export namespace InventoryModelNamespace {

  export enum InventoryItemTypesEnum {
    armor = 'armor',
    weapon = 'weapon',
    accessories = 'accessories',
  }

  export enum InventoryItemLevelsEnum {
    trash = 'trash',
    usual = 'usual',
    good = 'good',
    excellent = 'excellent',
    heroic = 'heroic',
    legendary = 'legendary',
    mythical = 'mythical',
  }

  export interface IInventoryItem {
    name: string;
    description: string;
    inventoryItemType: InventoryItemTypesEnum;
    level: InventoryItemLevelsEnum;
    quantity: number;
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
    armorItemType: ArmorItemTypesEnum;
    physicalResistance: number;
    magicResistance: EnergyModelNamespace.MagicValueList;
    durability: number;
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
    weaponItemType: WeaponItemTypesEnum;
    physicalDamage: number;
    magicDamage: EnergyModelNamespace.MagicValueList;
    durability: number;
  }
}
