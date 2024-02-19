import { Model } from 'mongoose';

export type ISharedRack = {
  name: string;
  einzelpris: number;
};

export type SharedRackModel = Model<ISharedRack, Record<string, unknown>>;
