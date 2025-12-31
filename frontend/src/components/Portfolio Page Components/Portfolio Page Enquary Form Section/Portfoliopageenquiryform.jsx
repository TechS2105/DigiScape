import React from 'react';
import { RiSendPlaneFill } from "react-icons/ri";
import { RiLoader2Line } from "react-icons/ri";
import { useForm } from 'react-hook-form';

function Portfoliopageenquiryform({ PortfolioPageStyle, configureEnquiryFormStyle }) {
    
    const {

        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }

    } = useForm();

    const onSubmit = async (data) => {

        try { 

            const fetchEnquiryMailURL = await fetch('https://digiscape-backend.onrender.com/portfoliopage/enquiry/mail/form', {

                headers: { "Content-Type": "application/json; charset=utf-8" },
                method: "POST",
                body: JSON.stringify(data)

            });

            let response = fetchEnquiryMailURL.json();
            console.log(data, response);
            reset();

        } catch (error) {
            
            console.log(error);

        }

    }
    
    return (

        <>
        
            {/** Enquiry Form */}
            <form style={configureEnquiryFormStyle} onSubmit={handleSubmit(onSubmit)}>
            
                {/** First Input Div */}
                <div className={PortfolioPageStyle.firstInputDiv}>
            
                    {/** Name Input Div */}
                    <div className={PortfolioPageStyle.nameInputDiv}>
            
                        <label htmlFor="fullname"> Full Name </label>
                        <input type="text" placeholder='Enter Your Full Name' {...register('fullname', { required: { value: true, message: "This field is required" } })} />
                        {errors.fullname && <span className={PortfolioPageStyle.enquiryFormErrorMessage}>{errors.fullname.message}</span>}
            
                    </div>
            
                    {/** Email Input Div */}
                    <div className={PortfolioPageStyle.emailInputDiv}>
            
                        <label htmlFor="Email"> Email </label>
                        <input type="email" placeholder='Enter Your Email' {...register('email', { required: { value: true, message: "This field is required" } })} />
                        {errors.email && <span className={PortfolioPageStyle.enquiryFormErrorMessage}>{errors.email.message}</span>}
            
                    </div>
            
                </div>
            
                {/** Second Input Div */}
                <div className={PortfolioPageStyle.secondInputDiv}>
            
                    {/** Contact No Input Div */}
                    <div className={PortfolioPageStyle.mobileInputDiv}>
            
                        <label htmlFor="mobile"> Mobile </label>
                        <input type="tel" placeholder='Enter Your Mobile No.' {...register('mobile', { required: { value: true, message: "This field is required" }, maxLength: { value: 10, message: "Max length is 10" }, minLength: { value: 10, message: "Min lenght is 10" } })} />
                        {errors.mobile && <span className={PortfolioPageStyle.enquiryFormErrorMessage}>{errors.mobile.message}</span>}
            
                    </div>
            
                    {/** Company Name Input Div */}
                    <div className={PortfolioPageStyle.companyNameInputDiv}>
            
                        <label htmlFor="companyname"> Company Name </label>
                        <input type="text" placeholder='Enter Your Company Name (Optional)' {...register('companyname', { required: { value: false } })} />
            
                    </div>
            
                </div>
            
                {/** Thid Input Div */}
                <div className={PortfolioPageStyle.thirdInputDiv}>
            
                    {/** Contact No Input Div */}
                    <div className={PortfolioPageStyle.servicesInputDiv}>
            
                        <label htmlFor="services"> Services </label>
                        <select name='service' id='service' {...register('services', {required: {value: true, message: "This field is required"}})}>
            
                            <option value="">Choose Your Service</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Wordpress Development">Wordpress Development</option>
                            <option value="Full Stack Web Development">Full Stack Web Development</option>
                            <option value="Branding & Design">Branding & Design</option>
                            <option value="Performance Marketing">Performance Marketing</option>
                            <option value="SEO & Content Strategy">SEO & Content Strategy</option>
                            <option value="Others">Others</option>
            
                        </select>
                        {errors.services && <span className={PortfolioPageStyle.enquiryFormErrorMessage}>{errors.services.message}</span>}
            
                    </div>
            
                </div>
            
                {/** Fourth Input Div */}
                <div className={PortfolioPageStyle.fourthInputDiv}>
            
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder='Type your message...' cols={177} rows={8} {...register('message', { required: { value: true, message: "This field is required" } })}></textarea>
                    {errors.message && <span className={PortfolioPageStyle.enquiryFormErrorMessage}>{errors.message.message}</span>}
            
                </div>
            
                {/** Submit Button Div */}
                <div className={PortfolioPageStyle.submitButtonDiv}>
            
                    <button type='submit' disabled={isSubmitting}>Submit <RiSendPlaneFill /></button>
                    {isSubmitting && <span className={PortfolioPageStyle.submittingMessage}>Form is submitting...<RiLoader2Line /></span>}
            
                </div>
            
            </form>
            
        </>

    );

}

export default Portfoliopageenquiryform;