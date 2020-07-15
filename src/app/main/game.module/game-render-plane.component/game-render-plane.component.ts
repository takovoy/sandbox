import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as threejs from 'three';
import {GameFieldModelNamespace, GameFieldModelNamespace as GameFieldModel} from 'src/models/GameFieldModel.namespace';
import {OrganismModelNamespace} from 'src/models/OrganismModel.namespace';

@Component({
  selector: 'game-render-plane',
  templateUrl: 'game-render-plane.component.html',
  styleUrls: ['game-render-plane.component.scss'],
})
export class GameRenderPlaneComponent implements OnInit {
  @Input() public player: OrganismModelNamespace.IOrganism;
  private gameFieldEntity: GameFieldModelNamespace.IGameField;
  private scene: threejs.Scene = new threejs.Scene();
  private camera: threejs.Camera;
  private renderer: threejs.WebGLRenderer = new threejs.WebGLRenderer();
  private textureLoader: threejs.TextureLoader = new threejs.TextureLoader();
  private materials: {[key: string]: threejs.MeshBasicMaterial} = {};
  private gameFieldCellsTextures: {[key in GameFieldModel.GameFieldCellTypesEnum]?: threejs.Texture[]} = {};
  private gameFieldCellsMaterials: {[key in GameFieldModel.GameFieldCellTypesEnum]?: threejs.MeshBasicMaterial} = {};

  constructor(private hostElement: ElementRef) {}

  public ngOnInit(): void {
    this.camera = new threejs.PerspectiveCamera(
      75,
      this.hostElement.nativeElement.offsetWidth / this.hostElement.nativeElement.offsetHeight,
      0.1,
      1000
    );
    this.renderer.setSize(this.hostElement.nativeElement.offsetWidth, this.hostElement.nativeElement.offsetHeight);
    this.hostElement.nativeElement.appendChild(this.renderer.domElement);
  }

  private loadTexture(path: string): Promise<threejs.Texture> {
    const url = `/assets/textures/${path}`;
    return new Promise<threejs.Texture>(resolve => this.textureLoader.load(url, (texture) => resolve(texture)));
  }

  private loadGameFieldCellTextures(cell: GameFieldModel.IGameFieldCell): Promise<threejs.Texture[]> {
    const promises = [];
    for (let i = 0; i < cell.animationFramesCount; i++) {
      promises.push(this.loadTexture(`game-field-cells/${cell.type}/${i}.png`));
    }
    return Promise.all(promises).then(textures => {
      this.gameFieldCellsTextures[cell.type] = textures;
      return textures;
    });
  }

  private async prepareGameFieldCellMaterial(cell: GameFieldModel.IGameFieldCell): Promise<threejs.MeshBasicMaterial> {
    const textures = await this.loadGameFieldCellTextures(cell);
    const material = new threejs.MeshBasicMaterial( { map: textures[0] } );
    this.gameFieldCellsMaterials[cell.type] = material;
    return material;
  }
}
