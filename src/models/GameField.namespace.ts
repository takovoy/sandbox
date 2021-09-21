import {InventoryModelNamespace} from './InventoryModel.namespace';

export namespace GameFieldNS {

  export enum CellTypesEnum {
    ground = 'ground',
    grass = 'grass',
    dirt = 'dirt',
    water = 'water',
    lava = 'lava',
    crag = 'crag',
  }

  export const CELL_SIZE = 10;

  export interface IGameFieldCell {
    positionX: number;
    positionY: number;
    type: CellTypesEnum;
    animationFramesCount: number;
  }

  export enum LandscapeItemTypesEnum {
    rock = 'rock',
    tree = 'tree',
  }

  export interface ILandscapeItem {
    id?: string;
    name: string;
    description: string;
    sizeX: number;
    sizeY: number;
    positionX: number;
    positionY: number;
    actionId: string;
  }

  export interface IGameField {
    id?: string;
    name: string;
    description: string;
    sizeX: number;
    sizeY: number;
    cells: IGameFieldCell[];
    inventoryItems: InventoryModelNamespace.IDroppedInventoryItem[];
    landscapeItems: ILandscapeItem[];
  }
}
