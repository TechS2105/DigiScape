import React from 'react';
import HomeServiceInnerContentSection from '../Home Services Component/Homeserviceinnercontentsection';

function Homeserviceinnercontent({HomeServicesStyle, HomeListHeading, ServiceId, SVGIcon, handleBoxeHeightOnClick, serviceIdStyle, serviceBoxIcon}) {
    
    return (

        <>

            <li>

                <div className={HomeServicesStyle.HomeServicesHeading} onClick={handleBoxeHeightOnClick}>

                    <h3><span style={serviceIdStyle}> { ServiceId } </span> { HomeListHeading } </h3>

                </div>

                <div className={HomeServicesStyle.HomeServicesIcon}>

                    <span style={serviceBoxIcon}>{SVGIcon}</span>

                </div>

            </li>
            
        </>

    );

}

export default Homeserviceinnercontent;