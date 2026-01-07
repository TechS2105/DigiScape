import React from 'react';
import { useForm } from 'react-hook-form';
import { LuLoader } from "react-icons/lu";

function Finalctainnerformsectionform({ ServicePageStyle, configureFinalCTAFormStyle }) {
    
    const {

        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }

    } = useForm();

    const onSubmit = async (data) => {

        try { 

            const sendFormData = await fetch('http://localhost:3000/servicepage/finalCTA/mail/form', {

                headers: { "Content-Type": "application/json; charset=utf-8" },
                body: JSON.stringify(data),
                method: "POST"

            });

            let response = sendFormData.json();
            console.log(data, response);
            reset();

        } catch (error) {
            
            console.log(error);

        }

    }
    
    return (

        <>
        
            {/** Form */}
             <form onSubmit={handleSubmit(onSubmit)}  style={configureFinalCTAFormStyle}>
            
                {/** First Input Div */}
                <div className={ServicePageStyle.firstInputDiv}>
            
                    {/** First Name Div */}
                    <div className={ServicePageStyle.firstNameDiv}>
            
                        <label htmlFor="fullname"> Full Name </label>
                        <input type="text" placeholder='Enter Your Full Name' {...register('fullname', { required: { value: true, message: "This field is required..." } })} />
                        {errors.fullname && <span className={ServicePageStyle.errorMessage}>{ errors.fullname.message }</span>}
            
                    </div>
            
                    {/** Email Div */}
                    <div className={ServicePageStyle.emailDiv}>
            
                        <label htmlFor="email"> Email </label>
                        <input type="email" placeholder='Enter Your Email' {...register('email', { required: { value: true, message: "This field is required..." } })} />
                        {errors.email && <span className={ServicePageStyle.errorMessage}>{ errors.email.message }</span>}
            
                    </div>
            
                </div>
            
                {/** Second Input Div */}
                <div className={ServicePageStyle.secondInputDiv}>
            
                    {/** Mobile No Div */}
                    <div className={ServicePageStyle.mobileNoDiv}>
            
                        <label htmlFor="mobile"> Mobile No. </label>
                        <input type="tel" placeholder='Enter Your Mobile No.' {...register('mobile', { required: { value: true, message: "This field is required..." }, maxLength: { value: 10, message: "Max length is 10" }, minLength: { value: 10, message: "Min length is 10" } })} />
                        {errors.mobile && <span className={ServicePageStyle.errorMessage}>{ errors.mobile.message }</span>}
            
                    </div>
            
                    {/** Company Name Div */}
                    <div className={ServicePageStyle.companyNameDiv}>
            
                        <label htmlFor="companyname"> Company Name </label>
                        <input type="text" placeholder='Enter Your Company Name (Optional)' {...register('companyname', { required: { value: true, message: "This field is required..." } })} />
                        {errors.companyname && <span className={ServicePageStyle.errorMessage}>{ errors.companyname.message }</span>}
            
                    </div>
            
                </div>
            
                {/** Third Input Div */}
                <div className={ServicePageStyle.thirdInputDiv}>
            
                    {/** Industry Type Div */}
                    <div className={ServicePageStyle.industryTypeDiv}>
            
                        <label htmlFor="industrytype"> Industry Type </label>
                        <select name='industrytype' {...register('industrytype', { required: { value: true, message: "This field is required..." } })}>
            
                            <option value="">Choose Your Industry Type</option>
                            <option value="Technology / SaaS">Technology / SaaS</option>
                            <option value="E-Commerce">E-Commerce</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Education">Education</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Other">Other</option>
            
                        </select>
                        {errors.industrytype && <span className={ServicePageStyle.errorMessage}>{errors.industrytype.message}</span>}
            
                    </div>
            
                    {/** Company Size Div */}
                    <div className={ServicePageStyle.companySizeDiv}>
            
                        <label htmlFor="companysize"> Company Size </label>
                        <select  name="companysize" {...register('companysize', {required: {value: true, message: "This field is required..."}})}>
            
                            <option value=""> Choose Your Company Size </option>
                            <option value="1–10">1–10</option>
                            <option value="11–50">11–50</option>
                            <option value="51–200">51–200</option>
                            <option value="201–500">201–500</option>
                            <option value="500+">500+</option>
            
                        </select>
                        {errors.companysize && <span className={ServicePageStyle.errorMessage}>{errors.companysize.message}</span>}                  
            
                    </div>
            
                </div>
            
                {/** Fourth Input Div */}
                <div className={ServicePageStyle.fourthInputDiv}>
            
                    {/** Services Div */}
                    <div className={ServicePageStyle.servicesDiv}>
            
                        <label htmlFor="servuces"> Services </label>
                        <select name='services' {...register('services', {required: {value: true, message: "This field is required..."}})}>
            
                            <option value="">Choose Your Services</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Wordpress Development">Wordpress Development</option>
                            <option value="Full Stack Web Development">Full Stack Web Development</option>
                            <option value="Branding & Designing">Branding & Designing</option>
                            <option value="Performance Marketing">Performance Marketing</option>
                            <option value="SEO & Content Strategy">SEO & Content Strategy</option>
                            <option value="Conversion Rate Improvement">Conversion Rate Improvement</option>
                            <option value="Marketing Automation">Marketing Automation</option>
                            <option value="End to End Digital Strategy">End to End Digital Strategy</option>
                            <option value="Demand Generation">Demand Generation</option>
                            <option value="Other">Other</option>
            
                        </select>
                        {errors.services && <span className={ServicePageStyle.errorMessage}>{ errors.services.message }</span>}
            
                    </div>
            
                </div>
            
                {/** Fifth Input Div  */}
                <div className={ServicePageStyle.fifthInputDiv}>
            
                    {/** Company Size Div */}
                    <div className={ServicePageStyle.messageDiv}>
            
                        <label htmlFor="message"> Message </label>
                        <textarea placeholder='Briefly describe your current goals or challenges...' {...register('textarea', { required: { value: true, message: "This field is required..." } })} ></textarea>
                        {errors.textarea && <span className={ServicePageStyle.errorMessage}>{ errors.textarea.message }</span>}
                                                
                    </div>
            
                </div>
            
                {/** Submit Button Div */}
                <div className={ServicePageStyle.submitButtonDiv}>
            
                    <button type='submit' disabled={isSubmitting}>Request a Consultation</button>
                    {isSubmitting && <span className={ServicePageStyle.submittingMessage}> Form is submitting...<LuLoader /></span>}
            
                </div>
            
            </form>
        
        </>

    );

}

export default Finalctainnerformsectionform;