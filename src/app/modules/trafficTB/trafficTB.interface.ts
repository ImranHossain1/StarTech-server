import { Model } from 'mongoose';

export type ITrafficTBPries = {
  abnahmestaffelung: string;
  0?: number;
  30?: number;
  75?: number;
  100?: number;
  150?: number;
  300?: number;
  500?: number;
  1000?: number;
  2000?: number;
};

export type TrafficTBPriesModel = Model<
  ITrafficTBPries,
  Record<string, unknown>
>;
