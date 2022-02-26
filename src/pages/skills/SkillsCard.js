import React from 'react';
import './skills.css';

const SkillsCard = ({skillName, url}) => {
  return (
    <div className='skills'>
        <img src={url} alt="skill" className='skills-img' />
        <p>{skillName}</p>
    </div>
  )
}

export default SkillsCard