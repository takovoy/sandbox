import {GameFieldModelNamespace} from '../models/GameFieldModel.namespace';
import {GrassCell} from 'src/impl/game-field-cells.impl';

export const GAME_FIELD: GameFieldModelNamespace.IGameField = {
  id: 'test game level',
  name: 'That is the test level',
  description: 'That is the test level',
  cells: [
    new GrassCell(0, 0),
    new GrassCell(0, 20),
    new GrassCell(20, 0),
    new GrassCell(20, 20),
    new GrassCell(0, 0, 40),
    new GrassCell(0, 20, 40),
    new GrassCell(20, 0, 40),
    new GrassCell(20, 20, 40),
    new GrassCell(0, 0, 0, 40),
    new GrassCell(0, 20, 0, 40),
    new GrassCell(20, 0, 0, 40),
    new GrassCell(20, 20, 0, 40),
    new GrassCell(0, 0, 40, 40),
    new GrassCell(0, 20, 40, 40),
    new GrassCell(20, 0, 40, 40),
    new GrassCell(20, 20, 40, 40),
  ],
  inventoryItems: [],
  landscapeItems: [],
  sizeX: 10,
  sizeY: 10,
};
