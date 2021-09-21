import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {GameFieldNS} from 'src/models/GameField.namespace';
import {OrganismModelNamespace as OrganismModel} from 'src/models/OrganismModel.namespace';
import {GAME_FIELD} from 'src/stubs/game-field.stub';
import {SceneBuilder, SceneBuilderContext} from 'src/impl/scene.builder';
import {DOMEventsService, KeyboardKeysEnum} from 'src/services/DOMEvents.service';
import {SceneManager} from 'src/impl/scene-manager';
import {Subscription} from 'rxjs';
import {SceneManagerNamespace} from 'src/models/SceneManager.namespace';
import CardinalPointsEnum = SceneManagerNamespace.CardinalPointsEnum;
import {AnimationService} from 'src/services/Animation.service';
import {ExcessorPirate} from 'excessor-pirate';

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
  private domEventsSubscriptions: Subscription[] = [];
  private passedKeys: {[key in KeyboardKeysEnum]?: ExcessorPirate.IOperation} = {};

  constructor(
    private hostElement: ElementRef,
    private domEvents: DOMEventsService,
    private animationService: AnimationService,
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
    this.domEventsSubscriptions.forEach(item => item.unsubscribe());
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

  public startMoving(cardinalPoints): void {}

  private subscribeToEvents(): void {
    this.domEventsSubscriptions.push(this.domEvents.events.wDown.subscribe(() => {
      this.animationService.animate({
        time: 300,
        frame: () => {
          this.sceneManager.moveTowards(CardinalPointsEnum.north, 3);
          this.sceneManager.render();
        },
      });
    }));

    this.domEventsSubscriptions.push(this.domEvents.events.aUp.subscribe(() => {
      this.sceneManager.moveTowards(CardinalPointsEnum.west, 10);
      this.sceneManager.render();
    }));

    this.domEventsSubscriptions.push(this.domEvents.events.sUp.subscribe(() => {
      this.sceneManager.moveTowards(CardinalPointsEnum.south, 10);
      this.sceneManager.render();
    }));

    this.domEventsSubscriptions.push(this.domEvents.events.dUp.subscribe(() => {
      this.sceneManager.moveTowards(CardinalPointsEnum.east, 10);
      this.sceneManager.render();
    }));
  }
}
