import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { BerechnungsgrundlageService } from './berechnungsgrundlage.service';
import { IBerechnungsgrundlage } from './berechnungsgrundlage.interface';

const createBerechnungsgrundlage = catchAsync(
  async (req: Request, res: Response) => {
    const { ...subnetData } = req.body;
    const result = await BerechnungsgrundlageService.createBerechnungsgrundlage(
      subnetData
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'New Subnet created Successfully',
      data: result,
    });
  }
);

const getAllBerechnungsgrundlage = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await BerechnungsgrundlageService.getAllBerechnungsgrundlage();

    sendResponse<IBerechnungsgrundlage[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Subnet fetched successfully!',
      data: result.data,
    });
  }
);
export const BerechnungsgrundlageController = {
  createBerechnungsgrundlage,
  getAllBerechnungsgrundlage,
};
