import React from 'react';
import { useForm } from 'react-hook-form';
import { TbLoader } from "react-icons/tb";

const aboutPageGetInTouchURL = `/about/getintouch/mail/form`;

function Aboutpagegetintouchinnerformsectionmainform({ AboutSectionStyle }) {
    
    const {

        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset

    } = useForm();
    
    const onSubmit = async (data) => {

        try { 

            const postGetInTouchMailForm = await fetch(`https://digiscape-backend.onrender.com${aboutPageGetInTouchURL}`, {

                headers: { "Content-Type": "application/json; charset=utf-8" },
                method: "POST",
                body: JSON.stringify(data)

            });

            let response = await postGetInTouchMailForm.json();
            console.log(data, response);
            reset();

        } catch (error) {
            
            console.log(error);

        }

    }

    return (

        <>
        
            {/** Form */}
            <form onSubmit={handleSubmit(onSubmit)}>

                {/** Form First Inputs Section */}
                <div className={AboutSectionStyle.formFirstInputSection}>

                    {/** Name Input Div */}
                    <div className={AboutSectionStyle.fNameInputDiv}>

                        <input type="text" placeholder='Full Name' {...register('fullname', { required: { value: true, message: "This field is required" } })} />
                        {errors.fullname && <span className={AboutSectionStyle.errorMessage}>{errors.fullname.message}</span>}
 
                    </div>

                    {/** Email Input Div */}
                    <div className={AboutSectionStyle.fEmailInputDiv}>

                        <input type="email" placeholder='Email' {...register('email', { required: { value: true, message: "This field is required" } })} />
                        {errors.email && <span className={AboutSectionStyle.errorMessage}>{errors.email.message}</span>}

                    </div>

                </div>

                {/** Form Second Inputs Section */}
                <div className={AboutSectionStyle.formSecondInputSection}>

                    {/** Second Input Mobile No Div */}
                    <div className={AboutSectionStyle.sMobileInputDiv}>

                        <input type="tel" placeholder='Mobile No.' {...register('mobile', { required: { value: true, message: "This field is required" }, maxLength: { value: 10, message: "Max length is 10" }, minLength: { value: 10, message: "Min length is 10" } })} />
                        {errors.mobile && <span className={AboutSectionStyle.errorMessage}>{errors.mobile.message}</span>}

                    </div>

                    {/** Second Input Subject Div */}
                    <div className={AboutSectionStyle.sSubjectInputDiv}>

                        <input type="text" placeholder='Subject' {...register('subject', { required: { value: true, message: "This field is required" } })} />
                        {errors.subject && <span className={AboutSectionStyle.errorMessage}>{errors.subject.message}</span>}

                    </div>

                </div>

                {/** Form Third Input Section */}
                <div className={AboutSectionStyle.formThirdInputSection}>

                    <input type="text" placeholder='Company Name (Optional)' {...register('companyname')} />

                </div>

                {/** Form Fourth Input Section */}
                <div className={AboutSectionStyle.formForthInputSection}>

                    <textarea placeholder='Type Your Message...' cols={95} rows={9} {...register('message', { required: { value: true, message: "This field is required" } })}></textarea>
                    {errors.message && <span className={AboutSectionStyle.errorMessage}>{errors.message.message}</span>}

                </div>

                {/** Form Submit Button Section */}
                <div className={AboutSectionStyle.formSubmitButonSection}>
    
                    <button type='submit' disabled={isSubmitting}> Submit Consultation Request </button>
                    {isSubmitting && <span className={AboutSectionStyle.isSubmittingMessage}>Form is submitting please wait... <TbLoader /></span>}

                </div>

            </form>
            
        </>

    );

}

export default Aboutpagegetintouchinnerformsectionmainform;