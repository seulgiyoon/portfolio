import React from 'react';
import { Project } from '../components';
import { projects } from '../data';

function Projects() {
  return (
    <section className="main-section">
      <h2>Projects</h2>
      <Project projects={projects} />
    </section>
  );
}

export default Projects;
