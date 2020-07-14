import {EnergyModelNamespace} from './EnergyModel.namespace';
import {CommonNamespace} from './Common.namespace';

export namespace InventoryModelNamespace {

  export enum InventoryItemTypesEnum {
    armor = 'armor',
    weapon = 'weapon',
    accessories = 'accessories',
  }

  export enum InventoryItemQualityEnum {
    low = 'low',
    usual = 'usual',
    good = 'good',
    excellent = 'excellent',
    heroic = 'heroic',
    legendary = 'legendary',
    mythical = 'mythical',
  }

  export interface IRawInventoryItem {
    id?: string;
    name: string;
    description: string;
    quality: InventoryItemQualityEnum;
    materials: CommonNamespace.MaterialsEnum[];
    durabilityLimit: number | 'infinity';
    durability?: number;
  }

  export interface ITypedInventoryItem extends IRawInventoryItem {
    inventoryItemType: InventoryItemTypesEnum;
  }

  export interface IInventoryItem extends ITypedInventoryItem {
    inventoryItemType: InventoryItemTypesEnum;
    durability: number;
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

  export interface IRawArmorItem extends IRawInventoryItem {
    physicalResistance: number;
    magicResistance: EnergyModelNamespace.MagicValueList;
  }

  export interface ITypedArmorItem extends IRawArmorItem {
    armorItemType: ArmorItemTypesEnum;
  }

  export interface IArmorItem extends IInventoryItem, ITypedArmorItem {
    inventoryItemType: InventoryItemTypesEnum.armor;
    durability: number;
  }

  export interface IHelmet extends IArmorItem {
    armorItemType: ArmorItemTypesEnum.helmet;
  }

  export interface IShoulders extends IArmorItem {
    armorItemType: ArmorItemTypesEnum.shoulders;
  }

  export interface IBracers extends IArmorItem {
    armorItemType: ArmorItemTypesEnum.bracers;
  }

  export interface IGloves extends IArmorItem {
    armorItemType: ArmorItemTypesEnum.gloves;
  }

  export interface IChestArmor extends IArmorItem {
    armorItemType: ArmorItemTypesEnum.chestArmor;
  }

  export interface IBelt extends IArmorItem {
    armorItemType: ArmorItemTypesEnum.belt;
  }

  export interface ILeggings extends IArmorItem {
    armorItemType: ArmorItemTypesEnum.leggings;
  }

  export interface IBoots extends IArmorItem {
    armorItemType: ArmorItemTypesEnum.boots;
  }

  export enum WeaponItemTypesEnum {
    sword = 'sword',
    mace = 'mace',
    axe = 'axe',
    bow = 'bow',
    lance = 'lance',
    poleaxe = 'poleaxe',
  }

  export interface IRawWeaponItem extends IRawInventoryItem {
    weaponItemType: WeaponItemTypesEnum;
    physicalDamage: number;
    magicDamage: EnergyModelNamespace.MagicValueList;
  }

  export interface IWeaponItem extends IInventoryItem, IRawWeaponItem {
    inventoryItemType: InventoryItemTypesEnum.weapon;
    durability: number;
  }

  export enum AccessoryItemTypesEnum {
    headphones = 'headphones',
    ring = 'ring',
    glasses = 'glasses',
    bracelet = 'bracelet',
  }

  export interface IRawAccessoryItem extends IRawInventoryItem {
    accessoryItemType: AccessoryItemTypesEnum;
  }

  export interface IAccessoryItem extends IInventoryItem, IRawAccessoryItem {
    inventoryItemType: InventoryItemTypesEnum.accessories;
    durability: number;
  }
}
