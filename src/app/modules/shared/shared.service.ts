import { IGenericResponse } from '../../../interfaces/common';
import { ISharedRack } from './shared.interface';
import { SharedRack } from './shared.model';

const createSharedRack = async (
  payload: ISharedRack
): Promise<ISharedRack | null> => {
  const result = await SharedRack.create(payload);
  return result;
};
const getAllSharedRack = async (): Promise<IGenericResponse<ISharedRack[]>> => {
  const result = await SharedRack.find({});
  return {
    data: result,
  };
};
export const SharedRackService = {
  createSharedRack,
  getAllSharedRack,
};
