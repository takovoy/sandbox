import {GameFieldModelNamespace} from '../models/GameFieldModel.namespace';
import GameFieldCellTypesEnum = GameFieldModelNamespace.GameFieldCellTypesEnum;

export const GAME_FIELD: GameFieldModelNamespace.IGameField = {
  id: 'test game level',
  name: 'That is the test level',
  description: 'That is the test level',
  cells: [
    {
      animationFramesCount: 1,
      positionX: 1,
      positionY: 1,
      type: GameFieldCellTypesEnum.grass,
    }
  ],
  inventoryItems: [],
  landscapeItems: [],
  sizeX: 10,
  sizeY: 10,
};
