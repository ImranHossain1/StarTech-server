import express from 'express';
import { SubnetRoutes } from '../modules/subnet/subnet.route';
import { BerechnungsgrundlageRoutes } from '../modules/berechnungsgrundlage/berechnungsgrundlage.route';
import { SharedRackRoutes } from '../modules/shared/shared.route';
import { TraffiqPriesRoutes } from '../modules/traffic/traffic.route';
import { TrafficTBPriesRoutes } from '../modules/trafficTB/trafficTB.route';
import { LeistungsRackPriesRoutes } from '../modules/leistungsRack/leistungs.route';
import { LeistungsPriesSRVRoutes } from '../modules/leistungsSRV/leistungs.route';

const router = express.Router();
const moduleRoutes = [
  {
    path: '/subnets',
    route: SubnetRoutes,
  },
  {
    path: '/berechnungsgrundlage',
    route: BerechnungsgrundlageRoutes,
  },
  {
    path: '/sharedRack',
    route: SharedRackRoutes,
  },
  {
    path: '/traffics-srv',
    route: TraffiqPriesRoutes,
  },
  {
    path: '/trafficTB-srv',
    route: TrafficTBPriesRoutes,
  },
  {
    path: '/leistungs-rack',
    route: LeistungsRackPriesRoutes,
  },
  {
    path: '/leistungs-srv',
    route: LeistungsPriesSRVRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
