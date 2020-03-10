import React from 'react';
import { skills } from '../data';

function Skills() {
  return (
    <div>
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div key={index}>
          <p>{skill.label}</p>
          <p>{skill.items}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
