import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ServicePageWhyChooseUsContentKeyStrengthTitlePara from '../Why Choose Us Content Section/Whychooseuscontesttitleandpara';

function Whychooseuscontent({ ServicePageStyle }) {
    
    const [getWhyChooseUsContent, setGetWhyChooseUsContent] = useState([]);

    useEffect(() => {

        const getWhyChooseUsContentItems = async () => {

            try { 

                const response = await axios.get('http://localhost:3000/api/servicepage/whychooseus/content');
                setGetWhyChooseUsContent(response.data);

            } catch (error) {
                
                console.log(error);

            }

        }

        getWhyChooseUsContentItems();

    }, []);
    
    return (

        <>
        
            {/** Why Choose Us Content Section Content */}
            <div className={ServicePageStyle.keyStrengthCoreValueContentDiv}>

                {/** Core Point Div */}
                {getWhyChooseUsContent.map((contentItem, idx) => {

                    return (

                        <ServicePageWhyChooseUsContentKeyStrengthTitlePara
                        
                            contentItem={contentItem}
                            idx={idx}
                            ServicePageStyle={ServicePageStyle}
                            
                        />

                    );

                })} 

            </div>
            
        </>

    );

}

export default Whychooseuscontent;