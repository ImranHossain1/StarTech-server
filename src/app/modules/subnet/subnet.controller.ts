import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { SubnetService } from './subnet.service';
import { ISubnet } from './subnet.interface';

const createSubnet = catchAsync(async (req: Request, res: Response) => {
  const { ...subnetData } = req.body;
  const result = await SubnetService.createSubnet(subnetData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Subnet created Successfully',
    data: result,
  });
});

const getAllSubnet = catchAsync(async (req: Request, res: Response) => {
  const result = await SubnetService.getAllSubnet();

  sendResponse<ISubnet[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Subnet fetched successfully!',
    data: result.data,
  });
});
export const SubnetController = {
  createSubnet,
  getAllSubnet,
};
