import express from 'express';
import { SubnetController } from './subnet.controller';

const router = express.Router();
router.post('/create-subnet', SubnetController.createSubnet);
router.get('/', SubnetController.getAllSubnet);
export const SubnetRoutes = router;
