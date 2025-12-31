import nodeMailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // initialize dotenv

/** Use NodeMailer */
const mailcontroller = nodeMailer.createTransport({

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

// Verify Connection
mailcontroller.verify((error) => {

    if (error) {
        
        console.log(error);

    } else {
        
        console.log("Ready To Send...");

    }

});

export default mailcontroller;