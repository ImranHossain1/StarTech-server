import { Schema, model } from 'mongoose';
import { LeistungsPriesModel, ILeistungsPries } from './leistungs.interface';

const LeistungsPriesSchema = new Schema<ILeistungsPries>(
  {
    abnahmestaffelung: {
      type: String,
      required: true,
    },
    0: {
      type: Number,
    },
    6: {
      type: Number,
    },
    13: {
      type: Number,
    },
    20: {
      type: Number,
    },
    50: {
      type: Number,
    },
    100: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const LeistungsPries = model<ILeistungsPries, LeistungsPriesModel>(
  'LeistungsPriesRack',
  LeistungsPriesSchema
);
