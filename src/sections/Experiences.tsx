import React from 'react';
import Project from '../components/Project';
import { experiences } from '../data';

function Experiences() {
  return (
    <section className="main-section">
      <h2>Professional Experience</h2>
      <Project projects={experiences} />
    </section>
  )
}

export default Experiences;
