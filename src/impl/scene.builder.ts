import {OrganismModelNamespace as OrganismModel} from '../models/OrganismModel.namespace';
import {GameFieldModelNamespace as GameFieldModel} from '../models/GameFieldModel.namespace';
import * as threejs from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

export class SceneBuilder {
  private static textureLoader: threejs.TextureLoader = new threejs.TextureLoader();

  public static initContext(
    player: OrganismModel.IOrganism,
    gameField: GameFieldModel.IGameField,
    width: number,
    height: number,
  ): SceneBuilderContext {
    return new SceneBuilderContext(player, gameField, width, height);
  }

  private static async loadTexture(path: string): Promise<threejs.Texture> {
    const url = `/assets/textures/${path}`;
    return new Promise<threejs.Texture>(resolve => this.textureLoader.load(url, (texture) => resolve(texture)));
  }

  private static async loadGameFieldCellTextures(cell: GameFieldModel.IGameFieldCell): Promise<threejs.Texture[]> {
    const promises = [];
    for (let i = 0; i < cell.animationFramesCount; i++) {
      promises.push(this.loadTexture(`game-field-cells/${cell.type}/${i}.png`));
    }
    return Promise.all(promises);
  }

  private static async loadGameFieldCellsTextures(gameField: GameFieldModel.IGameField): Promise<{
    cellType: GameFieldModel.GameFieldCellTypesEnum,
    textures: threejs.Texture[],
  }[]> {
    const cellsTexturePromisesMap: {[key in GameFieldModel.GameFieldCellTypesEnum]?: Promise<{
      cellType: GameFieldModel.GameFieldCellTypesEnum,
      textures: threejs.Texture[],
    }>} = {};
    gameField.cells
      .forEach(cell => {
        if (cellsTexturePromisesMap[cell.type]) {
          return;
        }
        cellsTexturePromisesMap[cell.type] = this.loadGameFieldCellTextures(cell)
          .then(textures => ({cellType: cell.type, textures}));
      });
    return Promise.all(Object.values(cellsTexturePromisesMap));
  }

  public static loadTextures(context: SceneBuilderContext): SceneBuilderContext {
    context.cellsTexturePromise = this.loadGameFieldCellsTextures(context.gameField);
    return context;
  }

  private static makeCellsMaterials(context: SceneBuilderContext): SceneBuilderContext {
    context.cellsMaterialsPromise = context.cellsTexturePromise.then(result => result.map(item => ({
      cellType: item.cellType,
      material: new threejs.MeshBasicMaterial({map: item.textures[0]}),
    })));
    return context;
  }

  public static makeMaterials(context: SceneBuilderContext): SceneBuilderContext {
    this.makeCellsMaterials(context);
    return context;
  }

  private static makeCellsMeshes(context: SceneBuilderContext): SceneBuilderContext {
    context.cellsMeshesPromise = context.cellsMaterialsPromise.then(result => {
      const materialsMap = result.reduce((res, item) => {
        res[item.cellType] = item.material;
        return res;
      }, {});
      return context.gameField.cells.map(cell => {
        const geometry = new threejs.PlaneGeometry(
          GameFieldModel.GAME_FIELD_CELL_SIZE,
          GameFieldModel.GAME_FIELD_CELL_SIZE,
        );
        const mesh = new threejs.Mesh(geometry, materialsMap[cell.type]);
        mesh.position.x = cell.positionX;
        mesh.position.z = cell.positionY;
        mesh.rotation.x = -Math.PI / 2;
        return {cell, mesh};
      });
    });
    return context;
  }

  public static makeMeshes(context: SceneBuilderContext): SceneBuilderContext {
    this.makeCellsMeshes(context);
    return context;
  }

  private static attachCellsMeshesToScene(context: SceneBuilderContext): SceneBuilderContext {
    context.cellsMeshesAttachPromise = context.cellsMeshesPromise
      .then(result => result.forEach(item => context.scene.add(item.mesh)));
    return context;
  }

  public static attachMeshesToScene(context: SceneBuilderContext): SceneBuilderContext {
    this.attachCellsMeshesToScene(context);
    return context;
  }
}

export class SceneBuilderContext {
  public scene: threejs.Scene = new threejs.Scene();
  public camera: threejs.PerspectiveCamera;
  public renderer: threejs.WebGLRenderer = new threejs.WebGLRenderer();
  public cellsTexturePromise: Promise<{
    cellType: GameFieldModel.GameFieldCellTypesEnum,
    textures: threejs.Texture[],
  }[]>;
  public cellsMaterialsPromise: Promise<{
    cellType: GameFieldModel.GameFieldCellTypesEnum,
    material: threejs.MeshBasicMaterial,
  }[]>;
  public cellsMeshesPromise: Promise<{
    cell: GameFieldModel.IGameFieldCell,
    mesh: threejs.Mesh,
  }[]>;
  public cellsMeshesAttachPromise: Promise<void>;

  constructor(
    public player: OrganismModel.IOrganism,
    public gameField: GameFieldModel.IGameField,
    public width: number,
    public height: number,
  ) {
    this.scene.background = new threejs.Color( 0xcccccc );
    this.scene.fog = new threejs.FogExp2( 0xcccccc, 0.002 );
    this.camera = new threejs.PerspectiveCamera(60, width / height, 0.1, 1000);
    this.renderer.setSize(width, height);
  }

  public loadTextures(): SceneBuilderContext {
    return SceneBuilder.loadTextures(this);
  }

  public makeMaterials(): SceneBuilderContext {
    if (!this.cellsTexturePromise) {
      throw new Error('Game field cells textures loading was not initiated');
    }
    return SceneBuilder.makeMaterials(this);
  }

  public makeMeshes(): SceneBuilderContext {
    if (!this.cellsMaterialsPromise) {
      throw new Error('Game field cells materials making was not initiated');
    }
    return SceneBuilder.makeMeshes(this);
  }

  public attachMeshesToScene(): SceneBuilderContext {
    if (!this.cellsMaterialsPromise) {
      throw new Error('Game field cells meshes making was not initiated');
    }
    return SceneBuilder.attachMeshesToScene(this);
  }

  public onComplete(callback: (context: SceneBuilderContext) => void): SceneBuilderContext {
    this.cellsMeshesAttachPromise.then(() => callback(this));
    return this;
  }
}
