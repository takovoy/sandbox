import {InventoryModelNamespace} from './InventoryModel.namespace';

export namespace GameFieldModelNamespace {

  export enum GameFieldCellTypesEnum {
    ground = 'ground',
    grass = 'grass',
    dirt = 'dirt',
    water = 'water',
    lava = 'lava',
    crag = 'crag',
  }

  export const GAME_FIELD_CELL_SIZE = 10;

  export interface IGameFieldCell {
    positionX: number;
    positionY: number;
    type: GameFieldCellTypesEnum;
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
