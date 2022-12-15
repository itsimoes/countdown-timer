import { Box } from '@mui/material'
import React from 'react'
import './style.css'
import Countdown from 'react-countdown';
import { ReactComponent as FacebookIcon } from '../../assets/images/icon-facebook.svg';
import { ReactComponent as PinterestIcon } from '../../assets/images/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/icon-instagram.svg';


const Timer = () => {

  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    console.log(days + " " + hours);
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <div className='central-box'>
        <div><span className='count-box'>{days}</span><div className='f-text'>days</div></div>
        <div><span className='count-box'>{hours}</span><div className='f-text'>hours</div></div>
        <div><span className='count-box'>{minutes}</span><div className='f-text'>minutes</div></div>
        <div><span className='count-box'>{seconds}</span><div className='f-text'>seconds</div></div>
      </div>;
    }
  };

  return (
    <Box className='box'>
      <div className="container">
        <div className='top-box'>we're lauching soon</div>
        <Countdown
          // date={Date.parse("2025-01-01")} // Used in real situations - Date must be modified here using ISO 8601 calendar date extended format.
          date={Date.now() + 1209600000}    // Used for FrontEnd Mentor challenge
          renderer={renderer}
        />
        <div className='bottom-box'>
          <a href="https://fb.com/itsimoes" _blank>
            <svg className="icon" >
              <FacebookIcon />
            </svg>
          </a>
          <a href="https://pinterest.com/itsimoes" _blank>
            <svg className="icon" >
              <PinterestIcon />
            </svg>
          </a>
          <a href="https://instagram.com/itsimoes" _blank>
            <svg className="icon" >
              <InstagramIcon />
            </svg>
          </a>
        </div>
      </div>
    </Box>
  )
}

export default Timer