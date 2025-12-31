import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const portfolioMailController = nodemailer.createTransport({

    service: 'gmail',
    host: 'smtp.gmail.com',
    port: '465',
    logger: false,
    debug: true,
    secure: true,
    secureConnection: true,
    auth: {
        
        user: process.env.Email,
        pass: process.env.Email_Pass

    },
    tls: {
        
        rejectUnauthorized: true

    }

});

// Verify Mail Server 
portfolioMailController.verify((error) => {

    if (error) {
        
        console.log(error);

    } else {
        
        console.log("Portfolio mail server is ready to send a mail...")

    }

});

export default portfolioMailController;
