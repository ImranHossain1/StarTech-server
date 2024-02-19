import { Model } from 'mongoose';

export type ISubnet = {
  subnetz: string;
  anzahl_ip: number;
  nutzbare_ip: number;
  kosten: number;
};

export type SubnetModel = Model<ISubnet, Record<string, unknown>>;
