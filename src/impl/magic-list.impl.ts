import {EnergyModelNamespace} from '../models/EnergyModel.namespace';

export class MagicList implements EnergyModelNamespace.MagicValueList {
  constructor(
    public fire = 0,
    public water = 0,
    public air = 0,
    public soil = 0,
  ) {}
}
