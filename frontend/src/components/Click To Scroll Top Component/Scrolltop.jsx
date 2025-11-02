import React, {useEffect} from 'react';
import ScrollTopStyle from '../../../public/styles/click to scroll top files/scrolltop.module.css';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Scrolltop() {

    useEffect(() => {

        let text = document.querySelector(`.${ScrollTopStyle.scrollTopTextBox} p`);
        let scrollTopBox = document.querySelector(`.${ScrollTopStyle.scrollTopCircleBox}`);

        scrollTopBox.style.opacity = "0";
        scrollTopBox.style.transform = "scale(0)";

        window.addEventListener("scroll", () => {

            if (window.scrollY > 1500) {

                text.innerHTML = text.innerText.split("").map((char, id) => {

                    return (

                        `<span style="transform: rotate(${id * 6.4}deg)">${char}</span>`

                    );

                }).join("");
                
                scrollTopBox.style.opacity = "1";
                scrollTopBox.style.transform = "scale(1)"
                scrollTopBox.style.transition = "all 0.8s ease";

            } else {

                text.innerHTML = text.innerText.split("").map((char, id) => {

                    return (

                        `<span style="transform: rotate(${id * 6.4}deg)">${char}</span>`

                    );

                }).join("");
                
                scrollTopBox.style.opacity = "0";
                scrollTopBox.style.transform = "scale(0)";
                scrollTopBox.style.transition = "all 0.8s ease";

            }

        })

    }, []);

    
    return (

        <>
        
            {/** Scroll Top circle Box */}
            <div className={ScrollTopStyle.scrollTopCircleBox}>

                {/** Scroll Top Icon Box */}
                <div className={ScrollTopStyle.scrollTopIconBox}>

                    <MdKeyboardDoubleArrowDown />

                    {/** Scroll Top Text Box */}
                     <div className={ScrollTopStyle.scrollTopTextBox}>

                        <p> Scroll * To * Top * Scroll * To * Top * </p>

                    </div>

                </div>


            </div>
            
        </>

    );

}

export default Scrolltop;