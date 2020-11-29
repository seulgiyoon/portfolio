import React from 'react';
import { Project } from '../components';
import { projects } from '../data';

function PersonalProjects() {
  return (
    <section className="main-section">
      <h2>Personal Project</h2>
      <Project projects={projects} />
    </section>
  );
}

export default PersonalProjects;
