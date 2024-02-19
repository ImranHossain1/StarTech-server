import { Model } from 'mongoose';

export type ITraffiqPries = {
  abnahmestaffelung: string;
  0?: number;
  100?: number;
  250?: number;
  500?: number;
  1000?: number;
  2000?: number;
  5000?: number;
  10000?: number;
  15000?: number;
  20000?: number;
  25000?: number;
};

export type TraffiqPriesModel = Model<ITraffiqPries, Record<string, unknown>>;
