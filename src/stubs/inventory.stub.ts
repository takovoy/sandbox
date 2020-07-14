import {InventoryModelNamespace as InventoryModel} from '../models/InventoryModel.namespace';
import {Belt, Boots, Bracers, ChestArmor, Gloves, Helmet, Leggings, Shoulders} from '../impl/armor.impl';
import {CommonNamespace} from '../models/Common.namespace';
import MaterialsEnum = CommonNamespace.MaterialsEnum;
import {MagicList} from '../impl/magic-list.impl';

export const INVENTORY: InventoryModel.IInventoryItem[] = [
  new Helmet({
    name: 'Iron helmet',
    description: 'Usual iron helmet',
    quality: InventoryModel.InventoryItemQualityEnum.usual,
    materials: [MaterialsEnum.iron],
    physicalResistance: 10,
    magicResistance: new MagicList({fire: 1, water: 1, air: 1, soil: 1, electricity: 0}),
    durabilityLimit: 50,
  }),
  new Shoulders({
    name: 'Iron shoulders',
    description: 'Usual iron shoulders',
    quality: InventoryModel.InventoryItemQualityEnum.usual,
    materials: [MaterialsEnum.iron],
    physicalResistance: 10,
    magicResistance: new MagicList({fire: 1, water: 1, air: 1, soil: 1, electricity: 0}),
    durabilityLimit: 50,
  }),
  new Bracers({
    name: 'Iron bracers',
    description: 'Usual iron bracers',
    quality: InventoryModel.InventoryItemQualityEnum.usual,
    materials: [MaterialsEnum.iron],
    physicalResistance: 10,
    magicResistance: new MagicList({fire: 1, water: 1, air: 1, soil: 1, electricity: 0}),
    durabilityLimit: 50,
  }),
  new Gloves({
    name: 'Iron gloves',
    description: 'Usual iron gloves',
    quality: InventoryModel.InventoryItemQualityEnum.usual,
    materials: [MaterialsEnum.iron],
    physicalResistance: 10,
    magicResistance: new MagicList({fire: 1, water: 1, air: 1, soil: 1, electricity: 0}),
    durabilityLimit: 50,
  }),
  new ChestArmor({
    name: 'Iron chest armor',
    description: 'Usual iron chest armor',
    quality: InventoryModel.InventoryItemQualityEnum.usual,
    materials: [MaterialsEnum.iron],
    physicalResistance: 10,
    magicResistance: new MagicList({fire: 1, water: 1, air: 1, soil: 1, electricity: 0}),
    durabilityLimit: 50,
  }),
  new Belt({
    name: 'Iron belt',
    description: 'Usual iron belt',
    quality: InventoryModel.InventoryItemQualityEnum.usual,
    materials: [MaterialsEnum.iron],
    physicalResistance: 10,
    magicResistance: new MagicList({fire: 1, water: 1, air: 1, soil: 1, electricity: 0}),
    durabilityLimit: 50,
  }),
  new Leggings({
    name: 'Iron leggings',
    description: 'Usual iron leggings',
    quality: InventoryModel.InventoryItemQualityEnum.usual,
    materials: [MaterialsEnum.iron],
    physicalResistance: 10,
    magicResistance: new MagicList({fire: 1, water: 1, air: 1, soil: 1, electricity: 0}),
    durabilityLimit: 50,
  }),
  new Boots({
    name: 'Iron boots',
    description: 'Usual iron boots',
    quality: InventoryModel.InventoryItemQualityEnum.usual,
    materials: [MaterialsEnum.iron],
    physicalResistance: 10,
    magicResistance: new MagicList({fire: 1, water: 1, air: 1, soil: 1, electricity: 0}),
    durabilityLimit: 50,
  }),
];
