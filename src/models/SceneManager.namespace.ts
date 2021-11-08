import {TRIGONOMETRY} from 'excessor-trigonometry';

export namespace SceneManagerNS {
  export enum CardinalPointsEnum {
    north = 'north',
    northwest = 'northwest',
    northeast = 'northeast',
    west = 'west',
    east = 'east',
    south = 'south',
    southwest = 'southwest',
    southeast = 'southeast',
  }

  export const DefaultCameraPosition: [number, number, number] = [70, 50, 90];

  export const CameraRotation = TRIGONOMETRY.getAngleOfVector([
    DefaultCameraPosition[0],
    DefaultCameraPosition[1],
  ]);

  export const CardinalPointsVectors: {[key in CardinalPointsEnum]: number} = {
    [CardinalPointsEnum.north]: Math.PI * 1.5 - CameraRotation,
    [CardinalPointsEnum.northwest]: Math.PI * 1.25 - CameraRotation,
    [CardinalPointsEnum.northeast]: Math.PI * 1.75 - CameraRotation,
    [CardinalPointsEnum.west]: Math.PI - CameraRotation,
    [CardinalPointsEnum.east]: Math.PI * 2 - CameraRotation,
    [CardinalPointsEnum.south]: Math.PI * 0.5 - CameraRotation,
    [CardinalPointsEnum.southwest]: Math.PI * 0.75 - CameraRotation,
    [CardinalPointsEnum.southeast]: Math.PI * 0.25 - CameraRotation,
  };
}
