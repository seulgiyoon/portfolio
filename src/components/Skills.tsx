import React from 'react';
import { skills } from '../data';

function Skills() {
  return (
    <div className="Skills">
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div key={index} className="skill-list">
          <p className="sub-information skill-label">{skill.label}</p>
          <p className="sub-information skill-items">{skill.items}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
