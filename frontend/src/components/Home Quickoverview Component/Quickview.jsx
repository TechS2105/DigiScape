import React from 'react';
import QuickViewStyle from '../../../public/styles/home quickview section files/quickview.module.css';
import QuickViewContent from '../Home Quickoverview Component/Quickviewcontent';
import { FaArrowUpRightDots } from "react-icons/fa6";
import { BsBodyText } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";

function Quickview() {
    
    return (

        <>
        
            {/** Quick view section */}
            <div className={QuickViewStyle.quickView}>
                
                {/** Quick view title */}
                <div className={QuickViewStyle.quickViewTitleSection}>

                    <span> Driven by Creativity, Powered by Expertise </span>
                    <p>Delivering high-quality design, impactful content, and trusted solutions that help businesses grow with confidence.</p>

                </div>

                {/** Quick view inner section */}
                <div className={QuickViewStyle.quickViewInnerSection}>

                    {/** Quick view inner section first inner box */}
                    <div className={QuickViewStyle.quickViewFirstInnerBox}>

                        <QuickViewContent
                        
                            QuickViewStyle={QuickViewStyle}
                            svgIcon={<FaArrowUpRightDots />}
                            title="Quality Designing"
                            description="Creative solutions delivering modern, high-quality designing."
                            
                        />

                    </div>

                    {/** Quick view inner section second inner box */}
                    <div className={QuickViewStyle.quickViewSecondInnerBox}>

                        <QuickViewContent
                        
                            QuickViewStyle={QuickViewStyle}
                            svgIcon={<BsBodyText />}
                            title="Content Writing"
                            description="Engaging content writing that drives growth online."
                            
                        />

                    </div>

                    {/**Quick veiw inner section third inner box */}
                    <div className={QuickViewStyle.quickViewThirdInnerBox}>

                        <QuickViewContent
                        
                            QuickViewStyle={QuickViewStyle}
                            svgIcon={<RiTeamLine />}
                            title="Expert Team"
                            description="Skilled expert team delivering trusted professional solutions."
                            
                        />

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Quickview;