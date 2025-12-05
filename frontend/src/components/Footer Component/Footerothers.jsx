import React from 'react';

function Footerothers({FooterStyle, othersTitle, linkName1, linkName2}) {
    
    return (

        <>
        
            {/** Footer Others Div */}
            <div className={FooterStyle.othersDiv}>

                {/** Footer Others Title */}
                <div className={FooterStyle.othersTitle}>

                    <h4>{ othersTitle }</h4>

                </div>

                {/** Footer Others Link */}
                <div className={FooterStyle.footerOthersLink}>

                    <ul>

                        <li><a href="#">{linkName1}</a></li>
                        <li><a href="#">{linkName2}</a></li>

                    </ul>

                </div>

            </div>
            
        </>

    );

}

export default Footerothers;