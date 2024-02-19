import { Schema, model } from 'mongoose';
import { ISubnet, SubnetModel } from './subnet.interface';

const SubnetSchema = new Schema<ISubnet>(
  {
    subnetz: {
      type: String,
      required: true,
    },
    anzahl_ip: {
      type: Number,
      required: true,
    },
    nutzbare_ip: {
      type: Number,
      required: true,
    },
    kosten: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Subnet = model<ISubnet, SubnetModel>('Product', SubnetSchema);
