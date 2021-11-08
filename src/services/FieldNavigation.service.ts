import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DOMEventsService, NavigationKeysType, NavigationKeysList} from './DOMEvents.service';
import {SceneManagerNS} from '../models/SceneManager.namespace';
import DirectionsEnum = SceneManagerNS.CardinalPointsEnum;

type PressedKeys = { [key in NavigationKeysType]?: true };

@Injectable()
export class FieldNavigationService {
  private pressedKeys: PressedKeys = {};
  public onMove = new BehaviorSubject<DirectionsEnum | 'stop'>('stop');

  constructor(private domEventsService: DOMEventsService) {
    NavigationKeysList.forEach((item) => {
      domEventsService.navigationEvents[item].down.subscribe(() => {
        if (!this.pressedKeys[item]) {
          this.pressedKeys[item] = true;
          this.onMove.next(this.getDirection());
        }
      });

      domEventsService.navigationEvents[item].up.subscribe(() => {
        if (this.pressedKeys[item]) {
          delete this.pressedKeys[item];
          this.onMove.next(this.getDirection());
        }
      });
    });
  }

  private getDirection(): DirectionsEnum | 'stop' {
    const keysLength = Object.keys(this.pressedKeys).length;

    if (!keysLength || keysLength > 2) {
      return 'stop';
    }

    if (this.pressedKeys.w && this.pressedKeys.a) {
      return DirectionsEnum.northwest;
    }

    if (this.pressedKeys.w && this.pressedKeys.d) {
      return DirectionsEnum.northeast;
    }

    if (this.pressedKeys.s && this.pressedKeys.a) {
      return DirectionsEnum.southwest;
    }

    if (this.pressedKeys.s && this.pressedKeys.d) {
      return DirectionsEnum.southeast;
    }

    if (this.pressedKeys.w) {
      return DirectionsEnum.north;
    }

    if (this.pressedKeys.s) {
      return DirectionsEnum.south;
    }

    if (this.pressedKeys.a) {
      return DirectionsEnum.west;
    }

    if (this.pressedKeys.d) {
      return DirectionsEnum.east;
    }

    return 'stop';
  }
}
