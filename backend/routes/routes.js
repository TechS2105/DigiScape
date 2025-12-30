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
router.get('/api/home/blogs', getRouterController.getHomeBlogs); // GET Home Blogs Router
router.get('/api/blogpage/content', getRouterController.getBlogPageContent); // GET Blog Page Blogs
router.get('/api/portfoliopage/project', getRouterController.getPortfolioPageProjects); // GET Portfolio Page Projects
router.post('/home/contact/form', postRouterController.postContactFormData) // POST Home Contact Form Router
router.post('/contact/mail/form', postRouterController.postContactPageFormData); // POST Contact Page Mail Form Router
router.post('/about/getintouch/mail/form', postRouterController.postAboutPageGetInTouchMail); // POST About Page Get In Touch Mail Form router

export default router;