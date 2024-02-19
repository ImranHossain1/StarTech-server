import express from 'express';
import { TraffiqPriesController } from './traffic.controller';

const router = express.Router();
router.post('/create-traffic', TraffiqPriesController.createTraffiqPries);
router.get('/', TraffiqPriesController.getAllTraffiqPries);
export const TraffiqPriesRoutes = router;
