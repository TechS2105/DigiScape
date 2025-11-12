import React, {useState, useEffect} from 'react';
import HomeHowWeWorkStyle from '../../../public/styles/home how we work files/Homehowwework.module.css';
import HowWeWorkContent from '../Home How We Work Component/Howweworkcontent';
import HowWeWorkServiceBox from '../Home How We Work Component/Howweworkservicebox';

function Howwework() {

    const [howWeWorkContent, setHowWeWorkContent] = useState([]);

    useEffect(() => {

        const fetchHowWeWorkContent = async () => {

            try {
                
                const response = await fetch('https://digiscape.onrender.com/api/home/howwework');

                if (!response) {
                    
                    throw new Error(`HTTP! Server Response Is ${response.status}`);

                }

                let data = await response.json();
                setHowWeWorkContent(data);

            } catch (error) {
                
                console.error(error);

            }

        }

        fetchHowWeWorkContent()


    }, [])
    
    return (

        <>
        
            {/** How we work section */}
            <div className={HomeHowWeWorkStyle.howWeWorkSection}>

                {/** How we work content section */}
                <div className={HomeHowWeWorkStyle.howWeWorkSectionContent}>

                    <HowWeWorkContent
                    
                        spanText="How We Work"
                        title="Our Approach Is To Create"
                        
                    />
                    
                </div>

                {/** How we work service box section */}
                <div className={HomeHowWeWorkStyle.howWeWorkSectionServiceBox}>

                    {/** How we work service box  */}
                    {howWeWorkContent.map((content) => {

                        return (

                            <div className={HomeHowWeWorkStyle.howWeWorkBox} key={content.id}>

                                {/** How we work service box number */}
                                <div className={HomeHowWeWorkStyle.howWeWorkBoxNumber}>

                                    <span> 0 {content.id} </span>

                                </div>
                                
                                <HowWeWorkServiceBox
                                
                                    content={content}
                                    
                                />

                                {/** How we work service box svg image */}
                                <img src={content.image} alt="shape-3" />
                                
                            </div>  

                        );

                    })}
                   

                </div>

            </div>
            
        </>

    );

}

export default Howwework;