import { IGenericResponse } from '../../../interfaces/common';
import { ITrafficTBPries } from './trafficTB.interface';
import { TrafficTBPries } from './trafficTB.model';

const createTrafficTBPries = async (
  payload: ITrafficTBPries
): Promise<ITrafficTBPries | null> => {
  const result = await TrafficTBPries.create(payload);
  return result;
};
const getAllTrafficTBPries = async (): Promise<
  IGenericResponse<ITrafficTBPries[]>
> => {
  const result = await TrafficTBPries.find({});
  return {
    data: result,
  };
};
export const TrafficTBPriesService = {
  createTrafficTBPries,
  getAllTrafficTBPries,
};
