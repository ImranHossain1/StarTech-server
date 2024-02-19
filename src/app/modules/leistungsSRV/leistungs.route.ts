import express from 'express';
import { LeistungsPriesController } from './leistungs.controller';

const router = express.Router();
router.post('/create-leistungs', LeistungsPriesController.createLeistungsPries);
router.get('/', LeistungsPriesController.getAllLeistungsPries);
export const LeistungsPriesSRVRoutes = router;
