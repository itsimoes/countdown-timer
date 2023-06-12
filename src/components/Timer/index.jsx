import { Box } from "@mui/material";
import React from "react";
import "./style.css";
import Countdown from "react-countdown";
import { ReactComponent as FacebookIcon } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as PinterestIcon } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/icon-instagram.svg";

const Timer = () => {

  let secondss = null;

  const Completionist = () => (
    <span className="f-text">You are good to go!</span>
  );

  function changeBlock(hours, minutes, seconds) {  

    if(seconds != secondss){
      secondss = seconds;
      console.log(hours + " " + minutes + " " + secondss);   
    }

  }

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      changeBlock(hours, minutes, seconds);
      return (        
        <div className="central-box">
          <div>
            <div className="count-box clearfix" /*data-target={days}*/>
              <div className="up up-back count-div">
                <span>{days}</span>
                <div className="up2"></div>
                <div className="up3"></div>
              </div>
              <div className="up count-div">
                <span>{days}</span>
                <div className="up2"></div>
                <div className="up3"></div>
              </div>

              <div className="down count-div">
                <div className="down2"></div>
                <span>{days}</span>
              </div>
            </div>
            <div className="f-text">days</div>
          </div>
          <div>
            <div className="count-box clearfix" /*data-target={hours}*/>
            <div className="up up-back count-div">
                <span>{hours}</span>
                <div className="up2"></div>
                <div className="up3"></div>
              </div>
              <div className="up count-div">
                <span>{hours}</span>
                <div className="up2"></div>
                <div className="up3"></div>
              </div>
              <div className="down count-div">
                <div className="down2"></div>
                <span>{hours}</span>
              </div>
            </div>
            <div className="f-text">hours</div>
          </div>
          <div>
            <div className="count-box clearfix" /*data-target={minutes}*/>
            <div className="up up-back count-div">
                <span>{minutes}</span>
                <div className="up2"></div>
                <div className="up3"></div>
              </div>
              <div className="up count-div">
                <span>{minutes}</span>
                <div className="up2"></div>
                <div className="up3"></div>
              </div>
              <div className="down count-div">
                <div className="down2"></div>
                <span>{minutes}</span>
              </div>
            </div>
            <div className="f-text">minutes</div>
          </div>
          <div>
            <div className="count-box clearfix" /*data-target={seconds}*/>
            <div className="up up-back up-transition-back count-div">
                <span>{seconds}</span>
                <div className="up2"></div>
                <div className="up3"></div>
              </div>
              <div className="up up-front up-transition-front count-div">
                <span>{seconds}</span>
                <div className="up2"></div>
                <div className="up3"></div>
              </div>
              <div className="down count-div">
                <div className="down2"></div>
                <span>{seconds+1}</span>
              </div>
            </div>
            <div className="f-text">seconds</div>
          </div>
        </div>
        // <>
        //   <div className="cont">
        //     <div className="flipper">
        //       <div className="frente">{seconds}</div>
        //       <div className="tras">{seconds}</div>
        //     </div>
        //   </div>
        // </>
      );
    }
  };

  return (
    <Box className="box">
      <div className="container">
        <div className="top-box">we're lauching soon</div>
        <Countdown
          // date={Date.parse("2025-01-01")} // Used in real situations - Date must be modified here using ISO 8601 calendar date extended format.
          date={Date.now() + 1209600000} // Used for FrontEnd Mentor challenge - Date must be modified here using ISO 8601 calendar date extended format.
          renderer={renderer}
        />

        <div className="bottom-box">
          <a href="https://fb.com/itsimoes" rel="noreferrer" target="_blank">
            <svg className="icon">
              <FacebookIcon />
            </svg>
          </a>
          <a
            href="https://pinterest.com/itsimoes"
            rel="noreferrer"
            target="_blank"
          >
            <svg className="icon">
              <PinterestIcon />
            </svg>
          </a>
          <a
            href="https://instagram.com/itsimoes"
            rel="noreferrer"
            target="_blank"
          >
            <svg className="icon">
              <InstagramIcon />
            </svg>
          </a>
        </div>
      </div>
    </Box>
  );
};

export default Timer;
