export namespace EnergyModelNamespace {
  export enum EnergyTypesEnum {
    mana = 'mana',
    prana = 'prana',
    strength = 'strength',
    aura = 'aura',
    soul = 'soul',
  }

  export type EnergiesValueList = {
    [key in EnergyTypesEnum]: number;
  };

  export enum MagicTypesEnum {
    fire = 'fire',
    water = 'water',
    air = 'air',
    soil = 'soil',
  }

  export type MagicValueList = {
    [key in MagicTypesEnum]: number;
  };
}
