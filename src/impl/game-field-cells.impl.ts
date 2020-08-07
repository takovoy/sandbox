import {GameFieldModelNamespace as GameFieldModel} from '../models/GameFieldModel.namespace';

export class GameFieldCells implements GameFieldModel.IGameFieldCell {
  public type: GameFieldModel.GameFieldCellTypesEnum;
  public positionX: number;
  public positionY: number;
  public animationFramesCount: number;

  constructor(rawCell: GameFieldModel.IGameFieldCell) {
    this.type = rawCell.type;
    this.positionX = rawCell.positionX;
    this.positionY = rawCell.positionY;
    this.animationFramesCount = rawCell.animationFramesCount;
  }
}

export class GrassCell extends GameFieldCells implements GameFieldModel.IGameFieldCell {
  constructor(x: number, y: number, correlationX: number = 0, correlationY: number = 0) {
    super({
      type: GameFieldModel.GameFieldCellTypesEnum.grass,
      positionX: (x + correlationX) * GameFieldModel.GAME_FIELD_CELL_SIZE,
      positionY: (y + correlationY) * GameFieldModel.GAME_FIELD_CELL_SIZE,
      animationFramesCount: 1,
    });
  }
}
