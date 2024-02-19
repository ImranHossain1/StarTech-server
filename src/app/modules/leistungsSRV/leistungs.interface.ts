import { Model } from 'mongoose';

export type ILeistungsPries = {
  abnahmestaffelung: string;
  bit?: number;
  0?: number;
  1000?: number;
  2000?: number;
  3000?: number;
  4000?: number;
  5000?: number;
};

export type LeistungsPriesModel = Model<
  ILeistungsPries,
  Record<string, unknown>
>;
