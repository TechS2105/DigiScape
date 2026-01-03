import React, {useEffect, useState} from 'react';
import axios from 'axios';
import OurApproachCardBox from '../Service Page Our Approach Section/Ourapproachcardbox';

function Ourapproachcardboxes({ServicePageStyle}) {
    
    const [ourApproachCardContent, setOurApproachCardContent] = useState([]); // Our Approach Card Content

    useEffect(() => { 

        async function ourApproachCardContentItems() {
            
            try { 

                const response = await axios.get('http://localhost:3000/api/servicepage/ourapproach/card'); // GET all card items through axios
                setOurApproachCardContent(response.data); // return data in this array

            } catch (error) {
                
                console.log(error);

            }

        }

        ourApproachCardContentItems();
        
    }, []);

    return (

        <>
        
            {/** Our Approach Card Box Section */}
            <div className={ServicePageStyle.ourApproachCardBoxesSection}>

                    {/** Card Box */}
                    {ourApproachCardContent.map((cardItem, idx) => {

                        return (

                            <OurApproachCardBox
                            
                                ServicePageStyle={ServicePageStyle}
                                cardItem={cardItem}
                                idx={idx}
                                
                            />

                        );

                    })}
                    
                    
            </div>
            
        </>

    );

}

export default Ourapproachcardboxes;