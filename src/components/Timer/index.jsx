import { Box } from '@mui/material'
import React from 'react'
import './style.css'
import Countdown from 'react-countdown';

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
        <div className='content top-box'>we're lauching soon</div>
        <Countdown
          // date={Date.parse("2025-01-01")} // Used in real situations - Date must be modified here using ISO 8601 calendar date extended format.
          date={Date.now() + 1209600000 }    // Used for FrontEnd Mentor challenge
          renderer={renderer}
        />
        <div className='content bottom-box'>end</div>        
      </div>      
    </Box>
  )
}

export default Timer