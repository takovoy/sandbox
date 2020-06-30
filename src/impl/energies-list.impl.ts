import {EnergyModelNamespace as EnergyModel} from 'models/EnergyModel.namespace';

export class EnergiesList implements EnergyModel.EnergiesValueList {
  constructor(
    public mana = 0,
    public prana = 0,
    public strength = 0,
    public aura = 0,
    public soul = 0,
  ) {}
}
