import * as threejs from 'three';
import {TRIGONOMETRY} from 'excessor-trigonometry';
import {SceneManagerNS} from 'src/models/SceneManager.namespace';

export class SceneManager {
  public currentPosition: [number, number] = [0, 0];

  constructor(
    private scene: threejs.Scene,
    private camera: threejs.Camera,
    private renderer: threejs.Renderer,
  ) {}

  public moveTo(positionX: number, positionY: number): void {
    this.currentPosition = [positionX, positionY];
    this.camera.position.set(
      SceneManagerNS.DefaultCameraPosition[0] + this.currentPosition[0],
      SceneManagerNS.DefaultCameraPosition[1],
      SceneManagerNS.DefaultCameraPosition[2] + this.currentPosition[1],
    );
    this.camera.lookAt(this.currentPosition[0], 0, this.currentPosition[1]);
  }

  public moveByVector(vector: number, length: number): void {
    const position = TRIGONOMETRY.getPointOnCircle(vector, length, this.currentPosition[0], this.currentPosition[1]);
    this.moveTo(position[0], position[1]);
  }

  public moveTowards(direction: SceneManagerNS.CardinalPointsEnum, length: number): void {
    this.moveByVector(SceneManagerNS.CardinalPointsVectors[direction], length);
  }

  public render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}
