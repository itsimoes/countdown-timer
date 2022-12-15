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
      return <span>{days}:{hours}:{minutes}:{seconds}</span>;
    }
  };

  return (
    <Box className='box'>
      <div className="container">
        <div className='content'>we're lauching soon</div>
        <Countdown
          className='content'
          date={Date.parse("2025-01-01")} //Date must be modified here using ISO 8601 calendar date extended format.
          renderer={renderer}
        />
        <div className='content'>end</div>
      </div>
    </Box>
  )


}

export default Timer