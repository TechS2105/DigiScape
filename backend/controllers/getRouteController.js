import HomeBannerApi from '../objects/Homebannerapi.js';
import TextScroller from '../objects/Textscrollerapitext.js';

const getDefaultRouter = (req, res) => {

    res.status(200).json({ message: "Your server is running now..." });

}

const getHomeBannerApi = (req, res) => {

    res.status(200).json(HomeBannerApi);

}

const getHomeTextScroller = (req, res) => {

    res.status(200).json(TextScroller);

}

export default {

    getDefaultRouter,
    getHomeBannerApi,
    getHomeTextScroller

}