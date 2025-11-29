import React from 'react'; 
import { useForm } from 'react-hook-form';
import { GrSend } from "react-icons/gr";

function Form({ ContactFormStyle }) {
    
    const {

        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}

    } = useForm();

    const delay = (d) => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                try {
                    
                    resolve();

                } catch (error) {
                    
                    reject(error);

                }

            }, d * 1000);

        })

    }

    const onSubmit = async (data) => {

        await delay(2); 
        console.log(data);
        reset();

    }
    
    return (

        <>
        
            <form onSubmit={handleSubmit(onSubmit)}>

                {/** First Input Div */}
                <div className={ContactFormStyle.firstInputDiv}>

                    {/** Name */}
                    <div className={ContactFormStyle.nameDiv}>

                        <input type='text' placeholder='First Name' {...register("firstname", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min Length Is 3" } })} /><br/>
                        {errors.firstname && <span className={ContactFormStyle.errorMessage}>{errors.firstname.message}</span>}

                    </div>

                    {/** Email */}
                    <div className={ContactFormStyle.emailDiv}>

                        <input type="email" placeholder='Email' {...register("email", { required: { value: true, message: "This field is required" }, maxLength: { value: 20, message: "Min length is 20" } })} /><br />
                        {errors.email && <span className={ContactFormStyle.errorMessage}>{ errors.email.message}</span>}

                    </div>

                </div>

                {/** Second Input Div */}
                <div className={ContactFormStyle.secondInputDiv}>

                    {/** Mobile */}
                    <div className={ContactFormStyle.mobileDiv}>

                        <input type="tel" placeholder='Mobile' maxLength={10} {...register("mobile", { required: { value: true, message: "This field is required" }, maxLength: { value: 10, message: "Max length is 10" } })} /><br />
                        {errors.mobile && <span className={ContactFormStyle.errorMessage}>{errors.mobile.message}</span>}

                    </div>

                    {/** Subject */}
                    <div className={ContactFormStyle.subjectDiv}>

                        <input type="text" placeholder='Type Your Subject' {...register("subject", { required: { value: true, message: "This field is required" }, maxLength: { value: 30, message: "Max length is 30" } })} /><br />
                        {errors.subject && <span className={ContactFormStyle.errorMessage}>{ errors.subject.message }</span>}

                    </div>

                </div>

                {/** Third Input Div */}
                <div className={ContactFormStyle.thirdInputDiv}>

                    <textarea placeholder='Type Your Message...' cols={87} rows={10} {...register("message", { required: { value: true, message: "This field is required" } })}></textarea>
                    {errors.message && <span className={ContactFormStyle.errorMessage}>{errors.message.message}</span>}

                </div>

                {/** Submit Button Div */}
                <div className={ContactFormStyle.submitButtonDiv}>

                    <button type='submit' disabled={isSubmitting}> Submit <GrSend /> </button><br/>
                    {isSubmitting && <span className={ContactFormStyle.submitMessage}> Form is submitting... </span>}

                </div>

            </form>
            
        </>

    );

}

export default Form;