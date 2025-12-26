import React from 'react';

const getInTouchImage = '../../../../../public/images/About Page Get In Touch Images/about_get_in_touch_image2.png';

function Aboutpagegetintouchmainsection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** About Page Get In Touch Main Section */}
            <div className={AboutSectionStyle.aboutPageGetInTouchMainSection}>

                {/** About Page Get In Touch Image Section */}
                <div className={AboutSectionStyle.aboutPageGetInTouchImageSection}>

                    <img src={getInTouchImage} alt="" />

                </div>

                {/** About Page Get In Touch Form Section */}
                <div className={AboutSectionStyle.aboutPageGetInTouchFormSection}>

                    {/** About Page Get In Touch Inner Form Section */}
                    <div className={AboutSectionStyle.aboutPageGetIntouchInnerFormSection}>

                        {/** About Page Get In Touch Title Section */}
                        <div className={AboutSectionStyle.aboutPageGetInTouchTitle}>

                            <span> Speak to Our Team </span>
                            <h2> Honest Conversations That Lead to Better Results </h2>
                            <button>Let's Connect</button>

                        </div>

                        {/** About Page Get In Touch Form Section */}
                        <div className={AboutSectionStyle.aboutPageGetInTouchForm}>


                        </div>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Aboutpagegetintouchmainsection;