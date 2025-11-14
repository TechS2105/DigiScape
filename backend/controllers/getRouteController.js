import HomeBannerApi from '../objects/Homebannerapi.js';
import TextScroller from '../objects/Textscrollerapitext.js';
import HomeHowWeWork from '../objects/Homehowwework.js';
import HomePorttfolio from '../objects/Homeportfolio.js'; 
import HomeWhyChooseUs from '../objects/Homewhychooseusecategorycontent.js';

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

/** Home Why Choose Us */
const getHomeWhyChooseUs = (req, res) => {

    res.status(200).json(HomeWhyChooseUs);

}


export default {

    getDefaultRouter,
    getHomeBannerApi,
    getHomeTextScroller,
    getHomeHowWeWorkAPI,
    getHomePortfolioRouter,
    getHomeWhyChooseUs

}