import {GameFieldModelNamespace, GameFieldModelNamespace as GameFieldModel} from '../models/GameFieldModel.namespace';
import GameFieldCellTypesEnum = GameFieldModelNamespace.GameFieldCellTypesEnum;

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
      type: GameFieldCellTypesEnum.grass,
      positionX: x + correlationX,
      positionY: y + correlationY,
      animationFramesCount: 1,
    });
  }
}
