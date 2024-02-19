import { Schema, model } from 'mongoose';
import { TraffiqPriesModel, ITraffiqPries } from './traffic.interface';

const TraffiqPriesSchema = new Schema<ITraffiqPries>(
  {
    abnahmestaffelung: {
      type: String,
      required: true,
    },
    0: {
      type: Number,
    },
    100: {
      type: Number,
    },
    250: {
      type: Number,
    },
    500: {
      type: Number,
    },
    1000: {
      type: Number,
    },
    2000: {
      type: Number,
    },
    5000: {
      type: Number,
    },
    10000: {
      type: Number,
    },
    15000: {
      type: Number,
    },
    20000: {
      type: Number,
    },
    25000: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const TraffiqPries = model<ITraffiqPries, TraffiqPriesModel>(
  'TraffiqPries',
  TraffiqPriesSchema
);
