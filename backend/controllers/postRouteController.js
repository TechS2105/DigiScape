import mailcontroller from '../mail controller/mailcontroller.js';
import contactPageMail from '../mail controller/mailcontroller.js';
import aboutPageGetInTouchMail from '../mail controller/mailcontroller.js';
import portfolioMailController from '../mail controller/portfolio_mail_controller.js';
import serviceMailController from '../mail controller/service_mail_controller.js';
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

    /** Connect With Mail Server */
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

    // Mail Template
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

    // Connect With Mail Server 
    contactPageMail.sendMail(mail, (error) => {
      if (error) {
        res.status(400).json({ message: `There has something wrong ${error}` });
      } else {
        res.json({
          status: 200,
          message: "Mail has been sent successfully...",
        });
      }
    });

}

/** About Page Get In Touch Mail Form */
const postAboutPageGetInTouchMail = (req, res) => {

    const { fullname, email, mobile, subject, companyname, message } = req.body;

    // Mail Template
    const mail = {

        from: `${fullname}`,
        to: process.env.Email,
        subject: `${fullname} has been sent a consultation request from about page get in touch form`,
        html: `
        
            <p>Client Name: ${fullname}</p>
            <p>Email: ${email}</p>
            <p>Mobile: ${mobile}</p>
            <p>Subject: ${subject}</p>
            <p>Company Name: ${companyname}</p>
            <p>Message: ${message}</p>

        `

    }

    // Connect With Mail Server
    aboutPageGetInTouchMail.sendMail(mail, (error) => {

        if (error) {
            
            res.status(400).json({ message: `Their have something error ${error}` });

        } else {
            
            res.json({

                status: "200",
                message: "Mail has been sent successfully"

            });

        }

    });

}

/** Portfolio Page Enquiry Mail Form */
const postPortfolioPageEnquiryMail = (req, res) => {

    const { fullname, email, mobile, companyname, services, message } = req.body
    
    // Create a mail template 
    const mail = {

        from: `${fullname}`,
        to: process.env.Email,
        subject: `${fullname} send an email from portfolio page enquiry form for enquiry purpose`,
        html: `
        
            <p>Name: ${fullname}</p>
            <p>Email: ${email}</p>
            <p>Mobile: ${mobile}</p>
            <p>Company Name: ${companyname}</p>
            <p>Services: ${services}</p>
            <p>Message: ${message}</p>

        `

    }

    // Send mail 
    portfolioMailController.sendMail(mail, (error) => {

        if (error) {
            
            console.log(error);

        } else {
            
            res.json({

                status: 200,
                message: "Mail has been sent successfully from Portfolio Enquiry form"

            });

        }

    })

}

/** Service Page Final CTA Mail Form */
const postServicePageCTAMail = (req, res) => {

    const { fullname, email, mobile, companyname, industrytype, companysize, services, textarea } = req.body;

    const mail = {

        from: `${fullname}`,
        to: process.env.Email,
        subject: `${fullname} send you a mail from DigiScape service page Final CTA Form`,
        html: `
        
            <p>Name: ${fullname}</p>
            <p>Email: ${email}</p>
            <p>Mobiel: ${mobile}</p>
            <p>Company Name: ${companyname}</p>
            <p>Industry Type: ${industrytype}</p>
            <p>Company Size: ${companysize}</p>
            <p>Services: ${services}</p>
            <p>Message: ${textarea}</p>

        `

    };

    serviceMailController.sendMail(mail, (error) => {

        if (error) {
            
            res.status(400).json({ message: `Something went wrong ${error}` });

        } else {
            
            res.json({

                status: 200,
                message: "Mail has been sent successfully from service page final CTA form"

            });

        }

    });

}

export default {

    postContactFormData, 
    postContactPageFormData,
    postAboutPageGetInTouchMail,
    postPortfolioPageEnquiryMail,
    postServicePageCTAMail

}