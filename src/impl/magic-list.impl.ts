import {EnergyModelNamespace as EnergyModel} from 'src/models/EnergyModel.namespace';

export class MagicList implements EnergyModel.MagicValueList {
  constructor(
    public fire = 0,
    public water = 0,
    public air = 0,
    public soil = 0,
    public electricity = 0,
  ) {}
}
