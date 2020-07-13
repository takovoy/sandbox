import {Component, Input} from '@angular/core';
import {ABILITIES} from 'src/stubs/abilities.stub';
import {AbilityModelNamespace} from 'src/models/AbilityModel.namespace';
import IAbility = AbilityModelNamespace.IAbility;

@Component({
  selector: 'game-screen',
  templateUrl: 'game-screen.component.html',
  styleUrls: ['game-screen.component.scss'],
})
export class GameScreenComponent {
  public abilities: IAbility[] = ABILITIES;
}
