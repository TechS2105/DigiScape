import ContactFormMail from '../mail controller/mailcontroller.js';
import dotenv from 'dotenv';

dotenv.config();

/** Home Get In Touch Mail Form */
const postContactFormData = (req, res) => {

    const { firstname, email, mobile, subject, message } = req.body;

    /** Create a mail template which is get from the user to admin */
    const mail = {

        from: `${firstname} -> ${email}`,
        to: process.env.Email,
        subject: `${firstname} send an email via DigiScape Get In Touch Form`,
        html: `

        <p>Name: ${firstname}</p>
        <p>Email: ${email}</p>
        <p>Contact No: ${mobile}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p><br/>

        `

    }

    /** Connect Mail */
    ContactFormMail.sendMail(mail, (error) => {

        if (error) {
            
            res.status(400).json({ message: `There have some kind of errors ${error}` });

        } else {
            
            res.json({

                status: 200,
                message: "Mail has been send successfully"

            });

        }

    });

}

/** Contact Page Get In Touch Mail Form */
const postContactPageFormData = (req, res) => {

    const { fullname, email, mobile, subject, companyname, message } = req.body;

    const mail = {

        from: `${fullname}`,
        to: process.env.Email,
        subject: `${fullname} send a mail via DigiScape Contact Page Form`,
        html: `
        
            <p>Name: ${fullname}</p>
            <p>Email: ${email}</p>
            <p>Mobile: ${mobile}</P>
            <p>Subject: ${subject}</p>
            <p>Company Name: ${companyname}</p>
            <p>Message: ${message}</p>

        `

    };

    ContactFormMail.sendMail(mail, (error) => {

        if (error) {
            
            res.status(400).json({ message: `There has something wrong ${error}` });

        } else {
            
            res.json({

                status: 200,
                message: "Mail has been sent successfully..."

            });

        }

    });

}

export default {

    postContactFormData, 
    postContactPageFormData

}