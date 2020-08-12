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

export enum KeyboardEventsEnum {
  wUp = 'wUp',
  wDown = 'wDown',
  aUp = 'aUp',
  aDown = 'aDown',
  sUp = 'sUp',
  sDown = 'sDown',
  dUp = 'dUp',
  dDown = 'dDown',
  spaceUp = 'spaceUp',
  spaceDown = 'spaceDown',
  shiftUp = 'shiftUp',
  shiftDown = 'shiftDown',
}

@Injectable()
export class DOMEventsService {
  public keyboardListener: Subject<KeyboardEvent> = new Subject();
  public keys: {[key in KeyboardKeysEnum]: Observable<KeyboardEvent>} = {
    [KeyboardKeysEnum.w]: this.keyboardListener.pipe(filter(event => event.key.toLowerCase() === KeyboardKeysEnum.w)),
    [KeyboardKeysEnum.a]: this.keyboardListener.pipe(filter(event => event.key.toLowerCase() === KeyboardKeysEnum.a)),
    [KeyboardKeysEnum.s]: this.keyboardListener.pipe(filter(event => event.key.toLowerCase() === KeyboardKeysEnum.s)),
    [KeyboardKeysEnum.d]: this.keyboardListener.pipe(filter(event => event.key.toLowerCase() === KeyboardKeysEnum.d)),
    [KeyboardKeysEnum.space]: this.keyboardListener.pipe(filter(event => event.key === KeyboardKeysEnum.space)),
    [KeyboardKeysEnum.shift]: this.keyboardListener.pipe(filter(event => event.key === KeyboardKeysEnum.shift)),
  };
  public events: {[key in KeyboardEventsEnum]: Observable<KeyboardEvent>} = {
    [KeyboardEventsEnum.wUp]: this.keys[KeyboardKeysEnum.w].pipe(filter(event => event.type === 'keyup')),
    [KeyboardEventsEnum.wDown]: this.keys[KeyboardKeysEnum.w].pipe(filter(event => event.type === 'keydown')),
    [KeyboardEventsEnum.aUp]: this.keys[KeyboardKeysEnum.a].pipe(filter(event => event.type === 'keyup')),
    [KeyboardEventsEnum.aDown]: this.keys[KeyboardKeysEnum.a].pipe(filter(event => event.type === 'keydown')),
    [KeyboardEventsEnum.sUp]: this.keys[KeyboardKeysEnum.s].pipe(filter(event => event.type === 'keyup')),
    [KeyboardEventsEnum.sDown]: this.keys[KeyboardKeysEnum.s].pipe(filter(event => event.type === 'keydown')),
    [KeyboardEventsEnum.dUp]: this.keys[KeyboardKeysEnum.d].pipe(filter(event => event.type === 'keyup')),
    [KeyboardEventsEnum.dDown]: this.keys[KeyboardKeysEnum.d].pipe(filter(event => event.type === 'keydown')),
    [KeyboardEventsEnum.spaceUp]: this.keys[KeyboardKeysEnum.space].pipe(filter(event => event.type === 'keyup')),
    [KeyboardEventsEnum.spaceDown]: this.keys[KeyboardKeysEnum.space].pipe(filter(event => event.type === 'keydown')),
    [KeyboardEventsEnum.shiftUp]: this.keys[KeyboardKeysEnum.shift].pipe(filter(event => event.type === 'keyup')),
    [KeyboardEventsEnum.shiftDown]: this.keys[KeyboardKeysEnum.shift].pipe(filter(event => event.type === 'keydown')),
  };
}
