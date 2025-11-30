import express from 'express';
import getRouterController from '../controllers/getRouteController.js';
import postRouterController from '../controllers/postRouteController.js';

const router = express.Router();

router.get('/', getRouterController.getDefaultRouter); // GET Root Router
router.get('/api/home/banner', getRouterController.getHomeBannerApi); // GET Home Banner Router
router.get('/api/home/textscroller', getRouterController.getHomeTextScroller); // GET Home Text Scroller Router
router.get('/api/home/howwework', getRouterController.getHomeHowWeWorkAPI); // GET How We Work Router
router.get('/api/home/portfolio', getRouterController.getHomePortfolioRouter); // GET Home Portfolio Router
router.get('/api/testimonial/contents', getRouterController.getTestimonialContents); // GET Testimonial Content Router
router.post('/home/contact/form', postRouterController.postContactFormData) // POST Home Contact Form Router

export default router;