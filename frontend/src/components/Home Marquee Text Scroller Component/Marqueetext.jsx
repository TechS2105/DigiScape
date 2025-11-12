import React, {useState, useEffect} from 'react';
import { GiStarSattelites } from "react-icons/gi";

function Marqueetext({ scrollerTextStyle }) {
    
    const [scrollerText, setScrollerText] = useState([]);

    useEffect(() => {

        const fetchScrollerText = async () => {

            try { 

                const response = await fetch('https://digiscape-backend.onrender.com/api/home/textscroller');

                if (!response) {
                    
                    throw new Error(`HTTP! server response is ${response.status}`);

                }

                let data = await response.json();
                setScrollerText(data);

            } catch (error) {
                
                console.error(error);

            }

        }

        fetchScrollerText();

    }, []);
    
    return (

      <>
            
        <div className={scrollerTextStyle.scrollerText}>       
                
            {/** First Home Text Scroller */}
            <div className={scrollerTextStyle.innerScroller}>

                {scrollerText.map((textItem, idx) => {
                
                    return (

                        <>
                            
                            <div className={scrollerTextStyle.scrollerDivBox} key={idx}>
                                        
                                <p>{textItem.text}</p>

                            </div>

                            <GiStarSattelites />

                        </>
                                
                    );
                            
                })}
                    
            </div>
                
            {/** Second Home Text Scroller */}
            <div className={scrollerTextStyle.innerScroller}>

                {scrollerText.map((textItem, idx) => {
                
                    return (

                        <>
                            
                            <div className={scrollerTextStyle.scrollerDivBox} key={idx}>
                                        
                                <p>{textItem.text}</p>

                            </div>

                            <GiStarSattelites />

                        </>
                                
                    );
                            
                })}
                    
            </div>

            {/** Third Home Text Scroller */}
            <div className={scrollerTextStyle.innerScroller}>

                {scrollerText.map((textItem, idx) => {
                
                    return (

                        <>
                            
                            <div className={scrollerTextStyle.scrollerDivBox} key={idx}>
                                        
                                <p>{textItem.text}</p>

                            </div>

                            <GiStarSattelites />

                        </>
                                
                    );
                            
                })}
                    
            </div>    

        </div>
      </>
    );

}

export default Marqueetext;