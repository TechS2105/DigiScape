import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create a mail template
const serviceMailController = nodemailer.createTransport({

    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
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

// Verify Mail
serviceMailController.verify((error) => {

    if (error) {
        
        console.log(error);

    } else {
        
        console.log("Service mail server is ready to send a mail...")

    }

});

export default serviceMailController;