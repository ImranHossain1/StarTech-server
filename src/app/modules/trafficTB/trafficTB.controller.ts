import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { TrafficTBPriesService } from './trafficTB.service';
import { ITrafficTBPries } from './trafficTB.interface';

const createTrafficTBPries = catchAsync(async (req: Request, res: Response) => {
  const { ...trafficData } = req.body;
  const result = await TrafficTBPriesService.createTrafficTBPries(trafficData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New traffic created Successfully',
    data: result,
  });
});

const getAllTrafficTBPries = catchAsync(async (req: Request, res: Response) => {
  const result = await TrafficTBPriesService.getAllTrafficTBPries();

  sendResponse<ITrafficTBPries[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Traffic fetched successfully!',
    data: result.data,
  });
});
export const TrafficTBPriesController = {
  createTrafficTBPries,
  getAllTrafficTBPries,
};
