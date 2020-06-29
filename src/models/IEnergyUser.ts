import {EnergyModelNamespace} from './EnergyModel.namespace';

export interface IEnergyUser {
  energiesValue: EnergyModelNamespace.EnergiesValueList;
  energiesPower: EnergyModelNamespace.EnergiesValueList;
  energiesGrowthFactor: EnergyModelNamespace.EnergiesValueList;
}
