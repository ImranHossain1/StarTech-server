import { Schema, model } from 'mongoose';
import { LeistungsPriesModel, ILeistungsPries } from './leistungs.interface';

const LeistungsPriesSchema = new Schema<ILeistungsPries>(
  {
    abnahmestaffelung: {
      type: String,
      required: true,
    },
    bit: {
      type: Number,
    },
    0: {
      type: Number,
    },
    1000: {
      type: Number,
    },
    2000: {
      type: Number,
    },
    3000: {
      type: Number,
    },
    4000: {
      type: Number,
    },
    5000: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const LeistungsPries = model<ILeistungsPries, LeistungsPriesModel>(
  'LeistungsPriesSRV',
  LeistungsPriesSchema
);
