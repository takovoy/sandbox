import {Component} from '@angular/core';
import {OrganismModelNamespace} from 'src/models/OrganismModel.namespace';
import {PLAYER} from 'src/stubs/player.stub';

@Component({
  selector: 'game-screen',
  templateUrl: 'game-screen.component.html',
  styleUrls: ['game-screen.component.scss'],
})
export class GameScreenComponent {
  public player: OrganismModelNamespace.IOrganism = PLAYER;
}
