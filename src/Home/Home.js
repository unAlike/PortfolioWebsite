import './Home.css';
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Home() {
  return (
    <div className="Home">
      <div className='item'>
        <h1 className='home-header'><span>Hi</span> I'm Ryan.</h1>
        <div className='skill'>
          <Typewriter
          words={['Web Developer', 'Game Developer', 'Software Engineer']}
          loop={0 | false}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
          />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
