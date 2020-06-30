import {Component, Input} from '@angular/core';
import {AbilityModelNamespace} from 'src/models/AbilityModel.namespace';
import IAbility = AbilityModelNamespace.IAbility;
import {ABILITIES} from 'src/stubs/abilities.stub';

@Component({
  selector: 'abilities',
  templateUrl: 'abilities.component.html',
  styleUrls: ['abilities.component.scss'],
})
export class AbilitiesComponent {
  @Input() public abilities: IAbility[] = ABILITIES;
}
