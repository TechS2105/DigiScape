import HomeContactFormMail from '../mail controller/mailcontroller.js';
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
    HomeContactFormMail.sendMail(mail, (error) => {

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

export default {

    postContactFormData

}