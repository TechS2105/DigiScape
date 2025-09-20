import React from "react";
import MarqueeTextScroller from "../../../public/styles/marquee text scoller files/marqueetextscroller.module.css";
import MarkqueeText from "./Marqueetext";

function Marqueetextscroller() {
  
  return (

    <>
      
      <div className={MarqueeTextScroller.scrollerTextStyle}>

        <MarkqueeText scrollerTextStyle={MarqueeTextScroller} />

      </div>

    </>

  );

}

export default Marqueetextscroller;
