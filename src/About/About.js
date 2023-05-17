import './About.css';
import React from 'react'
import pfp from '../Pictures/pfp.jpg'

function About() {
  return (
    <div className="About">
      <div className='about-me'>
        <h1 className='about-header'>A little bit about me</h1>
        <div className='about-content'>
          <div className='acontent-box'>
            <span class='content-header'>Bio</span>
            <br></br>
            <div class='content-flex'>
            <img src={pfp} id='pfp'/>
              <span id='bio'>
                I am very passionate about technology and how we can utilize/benefit from it. 
                I take the saying "Work smarter not harder" very close to heart because I truly believe that there is always a better way.
                I constantly strive to improve and learn whenever given the opportunity.
                Exploring all types of technology and software has granted me experience in almost every field.
                I am confident in my ability to solve and learn from any problem thrown my way.
              </span>
            </div>
            <div class='content-flex'>
              <span id='bio'>
                Throughout all of my personal projects, I would think of the idea, code it, and then pick apart all of the things about my code that I felt
                could have been done better. After doing this thousands of times, I have fine tuned my ability to code more efficently on the first try.
                Moving forward in my career, I hope to continue to learn all of the Industry standards as well as explore intergrating new technology
                into existing systems. The world is constantly changing and I always want to stay up to date with the newest and most effective techniques.
              </span>
              <img src={pfp} id='pfp'/>
            </div>
          </div>
          <div className='acontent-box'>
          {/* SKILLS */}
          <span class='content-header'>Skills</span>
          <div class='content-flex'>
            <img src={pfp} id='pfp'/>
              <span id='bio'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Accumsan in nisl nisi scelerisque eu ultrices.
                Tellus in metus vulputate eu scelerisque felis. Gravida dictum fusce ut placerat orci. 
                In nibh mauris cursus mattis molestie a iaculis at erat. Dui vivamus arcu felis bibendum ut tristique et. 
                Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. A iaculis at erat pellentesque. 
                
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
