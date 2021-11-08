import {GameFieldNS} from '../models/GameField.namespace';

export class GameFieldCells implements GameFieldNS.IGameFieldCell {
  public type: GameFieldNS.CellTypesEnum;
  public positionX: number;
  public positionY: number;
  public animationFramesCount: number;

  constructor(rawCell: GameFieldNS.IGameFieldCell) {
    this.type = rawCell.type;
    this.positionX = rawCell.positionX;
    this.positionY = rawCell.positionY;
    this.animationFramesCount = rawCell.animationFramesCount;
  }
}

export class GrassCell extends GameFieldCells implements GameFieldNS.IGameFieldCell {
  constructor(x: number, y: number, correlationX: number = 0, correlationY: number = 0) {
    super({
      type: GameFieldNS.CellTypesEnum.grass,
      positionX: (x + correlationX) * GameFieldNS.CELL_SIZE,
      positionY: (y + correlationY) * GameFieldNS.CELL_SIZE,
      animationFramesCount: 1,
    });
  }
}

export class GroundCell extends GameFieldCells implements GameFieldNS.IGameFieldCell {
  constructor(x: number, y: number, correlationX: number = 0, correlationY: number = 0) {
    super({
      type: GameFieldNS.CellTypesEnum.ground,
      positionX: (x + correlationX) * GameFieldNS.CELL_SIZE,
      positionY: (y + correlationY) * GameFieldNS.CELL_SIZE,
      animationFramesCount: 1,
    });
  }
}

export class DirtCell extends GameFieldCells implements GameFieldNS.IGameFieldCell {
  constructor(x: number, y: number, correlationX: number = 0, correlationY: number = 0) {
    super({
      type: GameFieldNS.CellTypesEnum.dirt,
      positionX: (x + correlationX) * GameFieldNS.CELL_SIZE,
      positionY: (y + correlationY) * GameFieldNS.CELL_SIZE,
      animationFramesCount: 1,
    });
  }
}
