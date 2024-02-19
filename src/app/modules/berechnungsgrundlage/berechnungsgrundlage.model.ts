import { Schema, model } from 'mongoose';
import {
  BerechnungsgrundlageModel,
  IBerechnungsgrundlage,
} from './berechnungsgrundlage.interface';

const BerechnungsgrundlageSchema = new Schema<IBerechnungsgrundlage>(
  {
    name: {
      type: String,
      required: true,
    },
    einzelpris: {
      type: Number,
      required: true,
    },
    setup: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const Berechnungsgrundlage = model<
  IBerechnungsgrundlage,
  BerechnungsgrundlageModel
>('Berechnungsgrundlage', BerechnungsgrundlageSchema);
