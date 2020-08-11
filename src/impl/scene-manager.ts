import * as threejs from 'three';
import {TRIGONOMETRY} from 'excessor-trigonometry';
import {SceneManagerNamespace} from 'src/models/SceneManager.namespace';

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
      SceneManagerNamespace.DefaultCameraPosition[0] + this.currentPosition[0],
      SceneManagerNamespace.DefaultCameraPosition[1],
      SceneManagerNamespace.DefaultCameraPosition[2] + this.currentPosition[1],
    );
    this.camera.lookAt(this.currentPosition[0], 0, this.currentPosition[1]);
  }

  public moveByVector(vector: number, length: number): void {
    const position = TRIGONOMETRY.getPointOnCircle(vector, length, this.currentPosition[0], this.currentPosition[1]);
    this.moveTo(position[0], position[1]);
  }

  public moveTowards(direction: SceneManagerNamespace.CardinalPointsEnum, length: number): void {
    this.moveByVector(SceneManagerNamespace.CardinalPointsVectors[direction], length);
  }

  public render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}
