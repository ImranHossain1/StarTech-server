import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { TraffiqPriesService } from './traffic.service';
import { ITraffiqPries } from './traffic.interface';

const createTraffiqPries = catchAsync(async (req: Request, res: Response) => {
  const { ...trafficData } = req.body;
  const result = await TraffiqPriesService.createTraffiqPries(trafficData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New traffic created Successfully',
    data: result,
  });
});

const getAllTraffiqPries = catchAsync(async (req: Request, res: Response) => {
  const result = await TraffiqPriesService.getAllTraffiqPries();

  sendResponse<ITraffiqPries[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Traffic fetched successfully!',
    data: result.data,
  });
});
export const TraffiqPriesController = {
  createTraffiqPries,
  getAllTraffiqPries,
};
