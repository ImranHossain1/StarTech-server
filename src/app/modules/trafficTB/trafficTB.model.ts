import { Schema, model } from 'mongoose';
import { TrafficTBPriesModel, ITrafficTBPries } from './trafficTB.interface';

const TrafficTBPriesSchema = new Schema<ITrafficTBPries>(
  {
    abnahmestaffelung: {
      type: String,
      required: true,
    },
    0: {
      type: Number,
    },
    30: {
      type: Number,
    },
    75: {
      type: Number,
    },
    100: {
      type: Number,
    },
    300: {
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
  },
  {
    timestamps: true,
  }
);

export const TrafficTBPries = model<ITrafficTBPries, TrafficTBPriesModel>(
  'TrafficTBPries',
  TrafficTBPriesSchema
);
