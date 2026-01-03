import HomeBannerApi from '../objects/Homebannerapi.js';
import TextScroller from '../objects/Textscrollerapitext.js';
import HomeHowWeWork from '../objects/Homehowwework.js';
import HomePorttfolio from '../objects/Homeportfolio.js'; 
import TestimonialContents from '../objects/Testimonialcontents.js';
import HomeBlogs from '../objects/Homeblogs.js';
import BlogPageContent from '../objects/Blogpageblogs.js';
import PortfolioPageProjects from '../objects/Portfoliopageprojects.js';
import OurApproachCardContents from '../objects/Ourapproachcardcontents.js';
import WhyChooseUsContents from '../objects/Servicepagewhychooseuscontent.js';

const getDefaultRouter = (req, res) => {

    res.status(200).json({ message: "Your server is running now..." });

}

const getHomeBannerApi = (req, res) => {

    res.status(200).json(HomeBannerApi);

}

const getHomeTextScroller = (req, res) => {

    res.status(200).json(TextScroller);

}

/** Home How We Work API*/
const getHomeHowWeWorkAPI = (req, res) => {

    res.status(200).json(HomeHowWeWork);

}

/** Home Portfolio Section API */
const getHomePortfolioRouter = (req, res) => {

    res.status(200).json(HomePorttfolio);

}

/** Testimonial Contents */
const getTestimonialContents = (req, res) => {

    res.status(200).json(TestimonialContents);

}

/** Home Blogs */
const getHomeBlogs = (req, res) => {

    res.status(200).json(HomeBlogs);

}

/** Blog Page Blogs */
const getBlogPageContent = (req, res) => {

    res.status(200).json(BlogPageContent);

}

/** Portfolio Page Projects */
const getPortfolioPageProjects = (req, res) => {

    res.status(200).json(PortfolioPageProjects)

}

/** Service Page Our Approach API */
const getServicePageOurApproach = (req, res) => {

    res.status(200).json(OurApproachCardContents);

}

/** Service Page Why choose Us Content */
const getWhyChooseUsContent = (req, res) => {

    res.status(200).json(WhyChooseUsContents);

}

export default {

    getDefaultRouter,
    getHomeBannerApi,
    getHomeTextScroller,
    getHomeHowWeWorkAPI,
    getHomePortfolioRouter,
    getTestimonialContents,
    getHomeBlogs,
    getBlogPageContent,
    getPortfolioPageProjects,
    getServicePageOurApproach,
    getWhyChooseUsContent

}