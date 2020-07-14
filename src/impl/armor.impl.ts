import {InventoryItem} from './inventory-item.impl';
import {InventoryModelNamespace as InventoryModel} from '../models/InventoryModel.namespace';
import {EnergyModelNamespace} from '../models/EnergyModel.namespace';

export class ArmorItem extends InventoryItem implements InventoryModel.IArmorItem {
  public inventoryItemType: InventoryModel.InventoryItemTypesEnum.armor;
  public armorItemType: InventoryModel.ArmorItemTypesEnum;
  public physicalResistance: number;
  public magicResistance: EnergyModelNamespace.MagicValueList;

  constructor(rawArmorItem: InventoryModel.ITypedArmorItem) {
    super({
      ...rawArmorItem,
      inventoryItemType: InventoryModel.InventoryItemTypesEnum.armor,
    });
    this.armorItemType = rawArmorItem.armorItemType;
    this.physicalResistance = rawArmorItem.physicalResistance;
    this.magicResistance = rawArmorItem.magicResistance;
  }
}

export class Helmet extends ArmorItem implements InventoryModel.IHelmet {
  public armorItemType: InventoryModel.ArmorItemTypesEnum.helmet;

  constructor(rawArmorItem: InventoryModel.IRawArmorItem) {
    super({
      ...rawArmorItem,
      armorItemType: InventoryModel.ArmorItemTypesEnum.helmet,
    });
  }
}

export class Shoulders extends ArmorItem implements InventoryModel.IShoulders {
  public armorItemType: InventoryModel.ArmorItemTypesEnum.shoulders;

  constructor(rawArmorItem: InventoryModel.IRawArmorItem) {
    super({
      ...rawArmorItem,
      armorItemType: InventoryModel.ArmorItemTypesEnum.shoulders,
    });
  }
}

export class Bracers extends ArmorItem implements InventoryModel.IBracers {
  public armorItemType: InventoryModel.ArmorItemTypesEnum.bracers;

  constructor(rawArmorItem: InventoryModel.IRawArmorItem) {
    super({
      ...rawArmorItem,
      armorItemType: InventoryModel.ArmorItemTypesEnum.bracers,
    });
  }
}

export class Gloves extends ArmorItem implements InventoryModel.IGloves {
  public armorItemType: InventoryModel.ArmorItemTypesEnum.gloves;

  constructor(rawArmorItem: InventoryModel.IRawArmorItem) {
    super({
      ...rawArmorItem,
      armorItemType: InventoryModel.ArmorItemTypesEnum.gloves,
    });
  }
}

export class ChestArmor extends ArmorItem implements InventoryModel.IChestArmor {
  public armorItemType: InventoryModel.ArmorItemTypesEnum.chestArmor;

  constructor(rawArmorItem: InventoryModel.IRawArmorItem) {
    super({
      ...rawArmorItem,
      armorItemType: InventoryModel.ArmorItemTypesEnum.chestArmor,
    });
  }
}

export class Belt extends ArmorItem implements InventoryModel.IBelt {
  public armorItemType: InventoryModel.ArmorItemTypesEnum.belt;

  constructor(rawArmorItem: InventoryModel.IRawArmorItem) {
    super({
      ...rawArmorItem,
      armorItemType: InventoryModel.ArmorItemTypesEnum.belt,
    });
  }
}

export class Leggings extends ArmorItem implements InventoryModel.ILeggings {
  public armorItemType: InventoryModel.ArmorItemTypesEnum.leggings;

  constructor(rawArmorItem: InventoryModel.IRawArmorItem) {
    super({
      ...rawArmorItem,
      armorItemType: InventoryModel.ArmorItemTypesEnum.leggings,
    });
  }
}

export class Boots extends ArmorItem implements InventoryModel.IBoots {
  public armorItemType: InventoryModel.ArmorItemTypesEnum.boots;

  constructor(rawArmorItem: InventoryModel.IRawArmorItem) {
    super({
      ...rawArmorItem,
      armorItemType: InventoryModel.ArmorItemTypesEnum.boots,
    });
  }
}
