import React from 'react';
import { RiMailSendLine } from "react-icons/ri";
import { useForm } from 'react-hook-form';

function Contactform({ ContactPageStyle }) {
    
    const {

        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }

    } = useForm();

    const onSubmit = async (data) => {

        // Call the backend path of contact page mail form
        const contactPageMailFormData = await fetch('https://digiscape-backend.onrender.com/contact/mail/form', {

            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: "POST",
            body: JSON.stringify(data)

        });

        let response = await contactPageMailFormData.json(); // Get contact page mail form data
        console.log(data, response);
        reset();

    }
    
    return (

        <>
        
            {/** Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)}>

                {/** First Input Section */}
                <div className={ContactPageStyle.firstInputSection}>

                    {/** First Input Box */}
                    <div className={ContactPageStyle.firstInputBox}>

                        <label htmlFor="fullname"> Full Name </label><br/>
                        <input type="text" placeholder='Full Name' {...register('fullname', { required: { value: true, message: "This field is required..." }, maxLength: { value: 50, message: "Max lenght is 50" }, minLenght: { value: 6, message: "Min length is 6" } })} />
                        {errors.fullname && <span className={ContactPageStyle.contactFormErrorMessage}>{ errors.fullname.message }</span>}

                    </div>

                    {/** Second Input Box */}
                    <div className={ContactPageStyle.secondInputBox}>

                        <label htmlFor="email"> Email </label><br />
                        <input type="email" placeholder='Email' {...register('email', { required: { value: true, message: "This field is required..." }, maxLength: { value: 50, message: "Max lenght is 50" }, minLenght: { value: 10, message: "Min lenght is 10" } })} />
                        {errors.email && <span className={ContactPageStyle.contactFormErrorMessage}>{ errors.email.message }</span>}

                    </div>
                    
                </div>

                {/** Second Input Section */}
                <div className={ContactPageStyle.secondInputSection}>

                    {/** First Input Box */}
                    <div className={ContactPageStyle.sFirstInputBox}>

                        <label htmlFor="mobile"> Mobile </label><br />
                        <input type="tel" placeholder='Mobile' {...register('mobile', { required: { value: true, message: "This field is required..." }, maxLength: { value: 10, message: "Max lenght is 10" } })} />
                        {errors.mobile && <span className={ContactPageStyle.contactFormErrorMessage}>{ errors.mobile.message }</span>}

                    </div>

                    {/** Second Input Box */}
                    <div className={ContactPageStyle.sSecondInputBox}>

                        <label htmlFor="subject"> Subject </label><br />
                        <input type="text" placeholder='Subject' {...register('subject', { required: { value: true, message: "This field is required..." }, maxLength: { value: 50, message: "Max lenght is 50" } })} />
                        {errors.subject && <span className={ContactPageStyle.contactFormErrorMessage}>{ errors.subject.message }</span>}

                    </div>

                </div>

                {/** Third Input Section */}
                <div className={ContactPageStyle.thirdInputSection}>

                    <label htmlFor="companyname"> Company Name (Optional) </label><br />
                    <input type="text" placeholder='Company Name' {...register('companyname', { maxLength: { value: 50, message: "Max Lenght is 50" }, minLength: { value: 10, message: "Min lenght is 10" } })} />
                    {errors.companyname && <span className={ContactPageStyle.contactFormErrorMessage}>{ errors.companyname.message }</span>}

                </div>

                {/** Fourth Input Section */}
                <div className={ContactPageStyle.fourthInputSection}>

                    <label htmlFor="message"> Message </label><br/>
                    <textarea name="message" id="message" placeholder='Type your message...' rows={10} {...register('message', { required: { value: true, message: "This field is required..." } })}></textarea>
                    {errors.message && <span className={ContactPageStyle.contactFormErrorMessage}>{ errors.message.message }</span>}

                </div>

                <button type='submit'> <span> Submit </span> <span> <RiMailSendLine /> </span> </button><br/>
                {isSubmitting && <span className={ContactPageStyle.contactFormSubmittingMessage}>Form is submitting...</span>}

            </form>
        
        </>

    );

}

export default Contactform;