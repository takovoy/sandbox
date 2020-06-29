import {EnergyModelNamespace} from '../models/EnergyModel.namespace';

export class EnergiesList implements EnergyModelNamespace.EnergiesValueList {
  constructor(
    public mana: number,
    public prana: number,
    public strength: number,
    public aura: number,
    public soul: number,
  ) {}
}
