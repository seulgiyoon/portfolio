// @ts-nocheck

import React from 'react';
import Slider from 'react-slick';
import { ProjectType } from '../dataTypes';
import Videos from './Videos';
import Works from './Works';

type ProjectProps = {
  projects: ProjectType[];
};

function Project(props: ProjectProps) {
  const { projects } = props;
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Project">
      {projects.map((project, index: number) => (
        <div key={index} className="project-item">
          {project.imgs && project.imgs.length > 1 && (
            <Slider {...settings} className="slider">
              {project.imgs.map((img, index) => (
                <div key={index}>
                  <img src={img.url} alt={img.text} className="slider-image" />
                </div>
              ))}
            </Slider>
          )}
          {project.imgs && project.imgs.length === 1 && (
            <img
              src={project.imgs[0].url}
              alt={project.imgs[0].text}
              className="project-single-image"
            />
          )}
          <h3>{project.title}</h3>
          <p className="description">{project.description}</p>
          <div className="project-document-link">
            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link.title} >
            </a>
          </div>
          {project.serviceDetail && (
            <div className="project-service-detail">
              <p className="sub-information">{project.serviceDetail}</p>
            </div>
          )}
          <div className="position-projectInfo">
            <p className="sub-information">{project.projectInfo.date}</p>
            <p className="sub-information">{project.projectInfo.position}</p>
            <p className="sub-information">{project.projectInfo.stacks}</p>
          </div>
          {project.works && <Works works={project.works} />}
          {project.videos && <Videos videos={project.videos} />}
          {project.extraText && <p className="description" id="project-experience">{project.extraText}</p>}
        </div>
      ))}
    </div>
  );
}

export default Project;
