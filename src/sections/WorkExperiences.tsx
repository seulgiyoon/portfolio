import React from 'react';
import { Project } from '../components';
import { works } from '../data';

function WorkExperiences() {
  return (
    <section className="main-section">
      <h2>Work Experience</h2>
      <Project projects={works} />
    </section>
  );
}

export default WorkExperiences;
