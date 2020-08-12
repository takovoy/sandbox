import {Inject, Injectable} from '@angular/core';
import {ExcessorPirate} from 'excessor-pirate';

@Injectable()
export class AnimationService {
  constructor(@Inject('timeoutManager') private timeoutManager: ExcessorPirate.IPirate) {}

  public animate(options: ExcessorPirate.IOperationOptions): ExcessorPirate.IOperation {
    const operation = new ExcessorPirate.Operation(options);
    this.timeoutManager.append(operation);
    return operation;
  }

  public removeAnimation(operation: ExcessorPirate.IOperation): void {
    this.timeoutManager.remove(operation);
  }
}
