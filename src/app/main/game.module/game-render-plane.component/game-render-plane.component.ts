import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {GameFieldNS} from 'src/models/GameField.namespace';
import {OrganismModelNamespace as OrganismModel} from 'src/models/OrganismModel.namespace';
import {GAME_FIELD} from 'src/stubs/game-field.stub';
import {SceneBuilder, SceneBuilderContext} from 'src/impl/scene.builder';
import {SceneManager} from 'src/impl/scene-manager';
import {Subscription} from 'rxjs';
import {AnimationService} from 'src/services/Animation.service';
import {ExcessorPirate} from 'excessor-pirate';
import {FieldNavigationService} from 'src/services/FieldNavigation.service';

@Component({
  selector: 'game-render-plane',
  templateUrl: 'game-render-plane.component.html',
  styleUrls: ['game-render-plane.component.scss'],
})
export class GameRenderPlaneComponent implements OnInit, OnDestroy {
  @Input() public player: OrganismModel.IOrganism;
  private gameFieldEntity: GameFieldNS.IGameField = GAME_FIELD;
  public loadingProgress = 3;
  private sceneManager: SceneManager;
  private navigationSubscription: Subscription;
  private moveAnimation: ExcessorPirate.IOperation;

  constructor(
    private hostElement: ElementRef,
    private animationService: AnimationService,
    private fieldNavigationService: FieldNavigationService,
  ) {}

  public ngOnInit(): void {
    this.initGameField(
      this.player,
      this.gameFieldEntity,
      this.hostElement.nativeElement.offsetWidth,
      this.hostElement.nativeElement.offsetHeight,
    ).then(context => {
      this.sceneManager = new SceneManager(context.scene, context.camera, context.renderer);
      this.sceneManager.moveTo(0, 0);
      this.sceneManager.render();
      this.subscribeToEvents();
    });
  }

  public ngOnDestroy(): void {
    this.navigationSubscription?.unsubscribe();
  }

  private async initGameField(
    player: OrganismModel.IOrganism,
    gameField: GameFieldNS.IGameField,
    width: number,
    height: number,
  ): Promise<SceneBuilderContext> {
    return new Promise(resolve => {
      const context = SceneBuilder
        .initContext(player, gameField, width, height)
        .loadTextures()
        .makeMaterials()
        .makeMeshes()
        .attachMeshesToScene()
        .onComplete(completedContext => {
          this.loadingProgress = 100;
          resolve(completedContext);
        });
      context.cellsTexturePromise.then(() => this.loadingProgress = 25);
      context.cellsMaterialsPromise.then(() => this.loadingProgress = 50);
      context.cellsMeshesPromise.then(() => this.loadingProgress = 75);
      this.hostElement.nativeElement.appendChild(context.renderer.domElement);
    });
  }

  private subscribeToEvents(): void {
    this.navigationSubscription = this.fieldNavigationService.onMove.subscribe((value) => {
      if (this.moveAnimation) {
        this.animationService.removeAnimation(this.moveAnimation);
        this.moveAnimation = undefined;
      }

      if (value === 'stop') {
        return;
      }

      this.moveAnimation = this.animationService.animate({
        time: 200,
        frame: () => {
          this.sceneManager.moveTowards(value, 3);
          this.sceneManager.render();
        },
        recourse: true,
      });
    });
  }
}
