import React from 'react';
import { skills } from '../data';

function Skills() {
  return (
    <div className="Skills">
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div key={index} className="skill-list">
          <h5 className="skill-label">{skill.label}</h5>
          <h5 className="skill-items">{skill.items}</h5>
        </div>
      ))}
    </div>
  );
}

export default Skills;
