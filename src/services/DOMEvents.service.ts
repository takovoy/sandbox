import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';

export enum KeyboardKeysEnum {
  w = 'w',
  a = 'a',
  s = 's',
  d = 'd',
  space = ' ',
  shift = 'Shift'
}

type KeyboardKeysType = {[key in KeyboardKeysEnum]: Observable<KeyboardEvent>};

export enum KeyboardEventsEnum {
  up = 'up',
  down = 'down',
}

type KeyboardEventsType = {[key in KeyboardEventsEnum]: Observable<KeyboardEvent>};

type KeyboardEventsObserversType = {[key in KeyboardKeysEnum]: KeyboardEventsType};

export const NavigationKeysList = [
  KeyboardKeysEnum.w,
  KeyboardKeysEnum.a,
  KeyboardKeysEnum.s,
  KeyboardKeysEnum.d,
];

export type NavigationKeysType = typeof NavigationKeysList[number];

type NavigationKeysObserversType = {[key in NavigationKeysType]: Observable<KeyboardEvent>};

type NavigationEventsObserversType = {[key in NavigationKeysType]: KeyboardEventsType};

@Injectable()
export class DOMEventsService {
  public keyboardListener: Subject<KeyboardEvent> = new Subject();

  public navigationKeys: NavigationKeysObserversType = NavigationKeysList.reduce<NavigationKeysObserversType>((res, item) => {
    res[item] = this.keyboardListener.pipe(filter(event => event.key.toLowerCase() === item));
    return res;
  }, {} as NavigationKeysObserversType);

  public navigationEvents: NavigationEventsObserversType = NavigationKeysList.reduce<NavigationEventsObserversType>((res, item) => {
    res[item] = {
      [KeyboardEventsEnum.up]: this.navigationKeys[item].pipe(filter(event => event.type === 'keyup')),
      [KeyboardEventsEnum.down]: this.navigationKeys[item].pipe(filter(event => event.type === 'keydown')),
    };
    return res;
  }, {} as NavigationEventsObserversType);

  public keys: KeyboardKeysType = {
    ...this.navigationKeys,
    [KeyboardKeysEnum.space]: this.keyboardListener.pipe(filter(event => event.key === KeyboardKeysEnum.space)),
    [KeyboardKeysEnum.shift]: this.keyboardListener.pipe(filter(event => event.key === KeyboardKeysEnum.shift)),
  };

  public events: KeyboardEventsObserversType = {
    ...this.navigationEvents,
    [KeyboardKeysEnum.space]: {
      [KeyboardEventsEnum.up]: this.keys[KeyboardKeysEnum.space].pipe(filter(event => event.type === 'keyup')),
      [KeyboardEventsEnum.down]: this.keys[KeyboardKeysEnum.space].pipe(filter(event => event.type === 'keydown')),
    },
    [KeyboardKeysEnum.shift]: {
      [KeyboardEventsEnum.up]: this.keys[KeyboardKeysEnum.shift].pipe(filter(event => event.type === 'keyup')),
      [KeyboardEventsEnum.down]: this.keys[KeyboardKeysEnum.shift].pipe(filter(event => event.type === 'keydown')),
    },
  };
}
