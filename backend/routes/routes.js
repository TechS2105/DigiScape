import express from 'express';
import getRouterController from '../controllers/getRouteController.js';

const router = express.Router();

router.get('/', getRouterController.getDefaultRouter);
router.get('/api/home/banner', getRouterController.getHomeBannerApi);
router.get('/api/home/textscroller', getRouterController.getHomeTextScroller);
router.get('/api/home/howwework', getRouterController.getHomeHowWeWorkAPI);

export default router;