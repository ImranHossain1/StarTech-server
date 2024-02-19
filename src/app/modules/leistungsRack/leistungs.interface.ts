import { Model } from 'mongoose';

export type ILeistungsPries = {
  abnahmestaffelung: string;
  bit: number;
  0?: number;
  6?: number;
  13?: number;
  20?: number;
  50?: number;
  100?: number;
};

export type LeistungsPriesModel = Model<
  ILeistungsPries,
  Record<string, unknown>
>;
