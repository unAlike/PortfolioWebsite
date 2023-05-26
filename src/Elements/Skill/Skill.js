import './Skill.css';
import React from 'react';

function Skill({skill, years}) {
  return (
    <div className='skill-box'>
        <div className='skill-content'>
            <p>{skill}</p>
            <p className='year'>Years: {years}</p>
        </div>
    </div>
  );
}

export default Skill;
