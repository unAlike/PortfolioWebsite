import './Contact.css';
import React from 'react'
import { SiGmail } from 'react-icons/si'

function Contact() {
  return (
    <div className="Contact">
      <div className='about-me'>
        <section title='Contact Info'>
          <h1 className='Contact-header'>Contact Information</h1>
          <div className='about'>
            <div id='info'>
              <h2>I'd love to chat.</h2>
              <div className='widg'>
                <SiGmail/>
                <span>     Ryan.Ungerleider@gmail.com</span>
                
              </div>
            </div>
            <div id='sendemail'>
              <p>other stuff</p>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
}

export default Contact;
