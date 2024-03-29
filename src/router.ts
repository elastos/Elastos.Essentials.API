/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { configureMultiSigRoutes } from './modules/multisig/routes';
import { configureTokensPriceRoutes } from './modules/price/routes';
import { configureStakingRoutes } from './modules/staking/routes';
import { configureChaingeSwapRoutes } from './modules/swaps/chainge/routes';
import { configureUpdatesRoutes } from './modules/updates/routes';

let router = Router();

/**
 * Returns the service status (running well or not).
 */
router.get('/status', (req, res) => {
    res.json({ status: "ok" });
});

configureStakingRoutes(router);
configureMultiSigRoutes(router);
configureUpdatesRoutes(router);
configureChaingeSwapRoutes(router);
configureTokensPriceRoutes(router);

export default router;
