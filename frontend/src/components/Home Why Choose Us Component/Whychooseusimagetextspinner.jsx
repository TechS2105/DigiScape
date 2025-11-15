import React from 'react';

function Whychooseusimagetextspinner({WhyChooseUsStyle, spanText, spinnerText}) {
    
    return (

        <>
        
            <div className={WhyChooseUsStyle.textSpinnerLogo}>
            
                <span> {spanText} </span>
            
                    {/** Text */}
                    <div className={WhyChooseUsStyle.textSpinnerText}>
            
                        <p> {spinnerText} </p>
            
                    </div>
            
            </div>

        </>

    );

}

export default Whychooseusimagetextspinner;