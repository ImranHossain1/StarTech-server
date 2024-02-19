import { IGenericResponse } from '../../../interfaces/common';
import { ISubnet } from './subnet.interface';
import { Subnet } from './subnet.model';

const createSubnet = async (payload: ISubnet): Promise<ISubnet | null> => {
  const result = await Subnet.create(payload);
  return result;
};
const getAllSubnet = async (): Promise<IGenericResponse<ISubnet[]>> => {
  const result = await Subnet.find({});
  return {
    data: result,
  };
};
export const SubnetService = {
  createSubnet,
  getAllSubnet,
};
