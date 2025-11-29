import React from 'react'; 
import { useForm } from 'react-hook-form';

function Form() {
    
    return (

        <>
        
            {/** Form */}
            <form>

                {/** Table */}
                <table>

                    <tbody>

                        <tr>
                            
                            <td><input type="text" placeholder='Full Name' id='fullname' name='fullname' required/></td>
                            <td><input type="email" placeholder='Email' id='email' name='email' required/></td>

                        </tr>

                        <tr>

                            <td><input type="tel" placeholder='Mobile' id='mobile' name='mobile' required/></td>
                            <td><input type="text" placeholder='Type Your Subject' name='text' id='text' required/></td>

                        </tr>

                        <tr>

                            <td colSpan="2"><textarea name="message" id="message" placeholder='Type Your Message...' cols={100} rows={10} required></textarea></td>

                        </tr>
                        
                    </tbody>

                </table>

                <button type='submit'> Submit </button>

            </form>
            
        </>

    );

}

export default Form;