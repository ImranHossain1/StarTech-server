import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { SharedRackService } from './shared.service';
import { ISharedRack } from './shared.interface';

const createSharedRack = catchAsync(async (req: Request, res: Response) => {
  const { ...subnetData } = req.body;
  const result = await SharedRackService.createSharedRack(subnetData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Subnet created Successfully',
    data: result,
  });
});

const getAllSharedRack = catchAsync(async (req: Request, res: Response) => {
  const result = await SharedRackService.getAllSharedRack();

  sendResponse<ISharedRack[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Subnet fetched successfully!',
    data: result.data,
  });
});
export const SharedRackController = {
  createSharedRack,
  getAllSharedRack,
};
