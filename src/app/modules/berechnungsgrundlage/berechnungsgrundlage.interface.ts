import { Model } from 'mongoose';

export type IBerechnungsgrundlage = {
  name: string;
  einzelpris: number;
  setup?: number;
};

export type BerechnungsgrundlageModel = Model<
  IBerechnungsgrundlage,
  Record<string, unknown>
>;
