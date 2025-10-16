import React, {useEffect} from 'react';
import { LiaHandPointRight } from "react-icons/lia";
import { TiArrowRightOutline } from "react-icons/ti";

function Homeserviceinnercontentsection({ HomeServicesStyle, image, altText, para, list1, list2, list3, list4, list5, serviceBoxRef, styleState }) {
    
    useEffect(() => {

        let tableData = document.querySelectorAll("table tr td");
        
        tableData.forEach((data) => {

            if (data.innerText === '') {

                data.style.display = "none";

            }

        })

    }, []);
    
    return (

        <>
        
            {/** Service List Content Section */}
            <div className={HomeServicesStyle.serviceListContentSection} ref={serviceBoxRef} style={styleState}>

                {/** Service List Content Section Image Box */}
                <div className={HomeServicesStyle.serviceListContentSectionImageBox}>

                    <img src={image} alt={altText} />

                    {/** Button Div */}
                    <div className={HomeServicesStyle.homeServiceButton}>

                        <TiArrowRightOutline />

                    </div>

                </div>

                {/** Service List Content Section Content Box */}
                <div className={HomeServicesStyle.serviceListContentSectionContentBox}>

                    <p>{para}</p>

                    <table>

                        <tbody>

                            <tr>

                                <td> <LiaHandPointRight /> {list1} </td>
                                <td> <LiaHandPointRight /> {list2} </td>

                            </tr>

                            <tr>

                                <td> <LiaHandPointRight /> {list3} </td>
                                <td> <LiaHandPointRight /> {list4} </td>

                            </tr>

                            <tr>

                                <td> <LiaHandPointRight /> {list5}  </td>

                            </tr>

                        </tbody>

                    </table>

                </div>
            
            </div> 
            
        </>

    );

}

export default Homeserviceinnercontentsection;