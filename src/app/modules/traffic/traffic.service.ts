import { IGenericResponse } from '../../../interfaces/common';
import { ITraffiqPries } from './traffic.interface';
import { TraffiqPries } from './traffic.model';

const createTraffiqPries = async (
  payload: ITraffiqPries
): Promise<ITraffiqPries | null> => {
  const result = await TraffiqPries.create(payload);
  return result;
};
const getAllTraffiqPries = async (): Promise<
  IGenericResponse<ITraffiqPries[]>
> => {
  const result = await TraffiqPries.find({});
  return {
    data: result,
  };
};
export const TraffiqPriesService = {
  createTraffiqPries,
  getAllTraffiqPries,
};
