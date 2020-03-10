import React from 'react';
import Slider from 'react-slick';
import { projects } from '../data';

function Project() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <Slider {...settings}>
            {project.imgs.map((img, index) => (
              <div key={index}>
                <img src={img} alt=""/>
              </div>
            ))}
          </Slider>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.documentLink} target="_blank" rel="noopener noreferrer">프로젝트 소개 문서 보기 ></a>
          <div>
            <p>{project.position}</p>
            <p>{project.stacks} 사용</p>
          </div>
          <div>
            {project.works.map((work, index) => (
              <p key={index}>{work}</p>
            ))}
          </div>
        </div>
        )
      )}
    </div>
  )
}

export default Project;
