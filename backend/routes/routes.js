import express from 'express';
import getRouterController from '../controllers/getRouteController.js';

const router = express.Router();

router.get('/', getRouterController.getDefaultRouter);
router.get('/api/home/banner', getRouterController.getHomeBannerApi);

export default router;