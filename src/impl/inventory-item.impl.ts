import {InventoryModelNamespace} from '../models/InventoryModel.namespace';
import {CommonNamespace} from '../models/Common.namespace';

export class InventoryItem implements InventoryModelNamespace.IInventoryItem {
  public id?: string;
  public name: string;
  public description: string;
  public inventoryItemType: InventoryModelNamespace.InventoryItemTypesEnum;
  public quality: InventoryModelNamespace.InventoryItemQualityEnum;
  public materials: CommonNamespace.MaterialsEnum[];
  public durabilityLimit: number | 'infinity';
  public durability: number;

  constructor(rawInventoryItem: InventoryModelNamespace.ITypedInventoryItem) {
    this.id = rawInventoryItem.id || null;
    this.name = rawInventoryItem.name || 'Unknown item';
    this.description = rawInventoryItem.description || 'Empty description';
    this.inventoryItemType = rawInventoryItem.inventoryItemType;
    this.quality = rawInventoryItem.quality;
    this.materials = rawInventoryItem.materials || [];
    this.durabilityLimit = rawInventoryItem.durabilityLimit || 0;
    this.durability = typeof rawInventoryItem.durability === 'number' ?
      rawInventoryItem.durability :
      (typeof this.durabilityLimit === 'number' ? this.durabilityLimit : 0);
  }
}
