import express from 'express';
import { TrafficTBPriesController } from './trafficTB.controller';

const router = express.Router();
router.post('/create-traffictb', TrafficTBPriesController.createTrafficTBPries);
router.get('/', TrafficTBPriesController.getAllTrafficTBPries);
export const TrafficTBPriesRoutes = router;
