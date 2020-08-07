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
  private defaultPositionCorrelation: [number, number, number] = [70, 50, 90];
  private currentPosition: [number, number, number] = [0, 0, 0];

  constructor(private hostElement: ElementRef) {}

  public ngOnInit(): void {
    this.initGameField(
      this.player,
      this.gameFieldEntity,
      this.hostElement.nativeElement.offsetWidth,
      this.hostElement.nativeElement.offsetHeight,
    ).then(() => this.render());
  }

  private async initGameField(
    player: OrganismModel.IOrganism,
    gameField: GameFieldModel.IGameField,
    width: number,
    height: number,
  ): Promise<void> {
    return new Promise(resolve => {
      this.sceneContext = SceneBuilder
        .initContext(player, gameField, width, height)
        .loadTextures()
        .makeMaterials()
        .makeMeshes()
        .attachMeshesToScene()
        .onComplete(() => {
          this.loadingProgress = 100;
          resolve();
        });
      this.sceneContext.cellsTexturePromise.then(() => this.loadingProgress = 25);
      this.sceneContext.cellsMaterialsPromise.then(() => this.loadingProgress = 50);
      this.sceneContext.cellsMeshesPromise.then(() => this.loadingProgress = 75);
      this.hostElement.nativeElement.appendChild(this.sceneContext.renderer.domElement);
    });
  }

  public render(): void {
    this.updateCameraPosition();
    this.sceneContext.renderer.render(this.sceneContext.scene, this.sceneContext.camera);
  }

  public updateCameraPosition(): void {
    this.sceneContext.camera.position.set(
      this.defaultPositionCorrelation[0] + this.currentPosition[0],
      this.defaultPositionCorrelation[1] + this.currentPosition[1],
      this.defaultPositionCorrelation[2] + this.currentPosition[2],
    );
    this.sceneContext.camera.lookAt(...this.currentPosition);
  }
}
