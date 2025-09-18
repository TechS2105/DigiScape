import HomeBannerApi from '../objects/Homebannerapi.js';

const getDefaultRouter = (req, res) => {

    res.status(200).json({ message: "Your server is running now..." });

}

const getHomeBannerApi = (req, res) => {

    res.status(200).json(HomeBannerApi);

}

export default {

    getDefaultRouter,
    getHomeBannerApi

}