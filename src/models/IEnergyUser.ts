import {EnergyModelNamespace as EnergyModel} from './EnergyModel.namespace';

export interface IEnergyUser {
  energiesValue: EnergyModel.EnergiesValueList;
  energiesPower: EnergyModel.EnergiesValueList;
  energiesGrowthFactor: EnergyModel.EnergiesValueList;
}
