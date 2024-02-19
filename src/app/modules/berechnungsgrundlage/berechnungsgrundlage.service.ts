import { IGenericResponse } from '../../../interfaces/common';
import { IBerechnungsgrundlage } from './berechnungsgrundlage.interface';
import { Berechnungsgrundlage } from './berechnungsgrundlage.model';

const createBerechnungsgrundlage = async (
  payload: IBerechnungsgrundlage
): Promise<IBerechnungsgrundlage | null> => {
  const result = await Berechnungsgrundlage.create(payload);
  return result;
};
const getAllBerechnungsgrundlage = async (): Promise<
  IGenericResponse<IBerechnungsgrundlage[]>
> => {
  const result = await Berechnungsgrundlage.find({});
  return {
    data: result,
  };
};
export const BerechnungsgrundlageService = {
  createBerechnungsgrundlage,
  getAllBerechnungsgrundlage,
};
