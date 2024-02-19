import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { LeistungsPriesService } from './leistungs.service';
import { ILeistungsPries } from './leistungs.interface';

const createLeistungsPries = catchAsync(async (req: Request, res: Response) => {
  const { ...trafficData } = req.body;
  const result = await LeistungsPriesService.createLeistungsPries(trafficData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New traffic created Successfully',
    data: result,
  });
});

const getAllLeistungsPries = catchAsync(async (req: Request, res: Response) => {
  const result = await LeistungsPriesService.getAllLeistungsPries();

  sendResponse<ILeistungsPries[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Traffic fetched successfully!',
    data: result.data,
  });
});
export const LeistungsPriesController = {
  createLeistungsPries,
  getAllLeistungsPries,
};
