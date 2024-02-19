import { IGenericResponse } from '../../../interfaces/common';
import { ILeistungsPries } from './leistungs.interface';
import { LeistungsPries } from './leistungs.model';

const createLeistungsPries = async (
  payload: ILeistungsPries
): Promise<ILeistungsPries | null> => {
  const result = await LeistungsPries.create(payload);
  return result;
};
const getAllLeistungsPries = async (): Promise<
  IGenericResponse<ILeistungsPries[]>
> => {
  const result = await LeistungsPries.find({});
  return {
    data: result,
  };
};
export const LeistungsPriesService = {
  createLeistungsPries,
  getAllLeistungsPries,
};
