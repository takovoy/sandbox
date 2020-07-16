import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {GameFieldModelNamespace as GameFieldModel} from 'src/models/GameFieldModel.namespace';
import {OrganismModelNamespace as OrganismModel} from 'src/models/OrganismModel.namespace';
import {GAME_FIELD} from 'src/stubs/game-field.stub';
import {SceneBuilder, SceneBuilderContext} from 'src/impl/scene.builder';

@Component({
  selector: 'game-render-plane',
  templateUrl: 'game-render-plane.component.html',
  styleUrls: ['game-render-plane.component.scss'],
})
export class GameRenderPlaneComponent implements OnInit {
  @Input() public player: OrganismModel.IOrganism;
  private gameFieldEntity: GameFieldModel.IGameField = GAME_FIELD;
  private sceneContext: SceneBuilderContext;
  public loadingProgress = 3;

  constructor(private hostElement: ElementRef) {}

  public ngOnInit(): void {
    this.initGameField(
      this.player,
      this.gameFieldEntity,
      this.hostElement.nativeElement.offsetWidth,
      this.hostElement.nativeElement.offsetHeight,
    );
  }

  private initGameField(
    player: OrganismModel.IOrganism,
    gameField: GameFieldModel.IGameField,
    width: number,
    height: number,
  ): void {
    this.sceneContext = SceneBuilder
      .initContext(player, gameField, width, height)
      .loadTextures()
      .makeMaterials()
      .makeMeshes()
      .onComplete(context => this.loadingProgress = 100);
    this.sceneContext.cellsTexturePromise.then(() => this.loadingProgress = 25);
    this.sceneContext.cellsMaterialsPromise.then(() => this.loadingProgress = 50);
    this.sceneContext.cellsMeshesPromise.then(() => this.loadingProgress = 75);
    this.hostElement.nativeElement.appendChild(this.sceneContext.renderer.domElement);
  }
}
