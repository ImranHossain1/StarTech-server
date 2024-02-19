import { Schema, model } from 'mongoose';
import { SharedRackModel, ISharedRack } from './shared.interface';

const SharedRackSchema = new Schema<ISharedRack>(
  {
    name: {
      type: String,
      required: true,
    },
    einzelpris: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SharedRack = model<ISharedRack, SharedRackModel>(
  'SharedRack',
  SharedRackSchema
);
