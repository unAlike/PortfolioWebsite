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
                I am very passionate about technology and how we can utilize/benefit from it. 
                I take the saying "Work smarter not harder" very close to heart because I truly believe that there is always a better way.
                I constantly strive to improve and learn whenever given the opportunity.
                Exploring all types of technology and software has granted me experience in almost every field.
                I am confident in my ability to solve and learn from any problem thrown my way.
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
                I am very passionate about technology and how we can utilize/benefit from it. 
                I take the saying "Work smarter not harder" very close to heart because I truly believe that there is always a better way.
                I constantly strive to improve and learn whenever given the opportunity.
                Exploring all types of technology and software has granted me experience in almost every field.
                I am confident in my ability to solve and learn from any problem thrown my way.
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
