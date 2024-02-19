import express from 'express';
import { SharedRackController } from './shared.controller';

const router = express.Router();
router.post('/create-shared-rack', SharedRackController.createSharedRack);
router.get('/', SharedRackController.getAllSharedRack);
export const SharedRackRoutes = router;
