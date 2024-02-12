import React, { useState } from 'react';
import './thank.css';
let message = " "
const ThankYouPage = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount === 9) {
        return(
       message = "❤️ Thank you ❤️"
      )
    }
   
  };

  return (
    <div className='thankyou'>
        
      <h2>{message}</h2>
      <h3>count = {clickCount}</h3>
      <button onClick={handleClick} className='thank-btn'>Click me🤗</button>
    </div>
  );
};

export default ThankYouPage;