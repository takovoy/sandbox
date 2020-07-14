import {EnergyModelNamespace as EnergyModel} from 'src/models/EnergyModel.namespace';

export class MagicList implements EnergyModel.MagicValueList {
  public fire: number;
  public water: number;
  public air: number;
  public soil: number;
  public electricity: number;

  constructor({
    fire = 0,
    water = 0,
    air = 0,
    soil = 0,
    electricity = 0,
  }) {
    this.fire = fire;
    this.water = water;
    this.air = air;
    this.soil = soil;
    this.electricity = electricity;
  }
}
