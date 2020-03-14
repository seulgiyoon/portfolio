import React from 'react';
import Slider from 'react-slick';
import { ProjectType } from '../dataTypes';
import Gifs from './Gifs';
import Works from './Works';

type ProjectProps = {
  projects: ProjectType[];
};

function Project(props: ProjectProps) {
  const { projects } = props;
  const settings = {
    dots: true,
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
          <h4>{project.description}</h4>
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
              <h5>{project.serviceDetail}</h5>
            </div>
          )}
          <div className="position-projectInfo">
            <h5>{project.projectInfo.date}</h5>
            <h5>{project.projectInfo.position}</h5>
            <h5>{project.projectInfo.stacks}</h5>
          </div>
          {project.works && <Works works={project.works} />}
          {project.gifs && <Gifs gifs={project.gifs} />}
          {project.extraText && <h4 id="project-experience">{project.extraText}</h4>}
        </div>
      ))}
    </div>
  );
}

export default Project;
