import express from 'express';
import { BerechnungsgrundlageController } from './berechnungsgrundlage.controller';

const router = express.Router();
router.post(
  '/create-berechnungsgrundlage',
  BerechnungsgrundlageController.createBerechnungsgrundlage
);
router.get('/', BerechnungsgrundlageController.getAllBerechnungsgrundlage);
export const BerechnungsgrundlageRoutes = router;
