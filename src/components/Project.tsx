import React from 'react';
import Slider from 'react-slick';
import { projects } from '../data';

function Project() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Project">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          {project.imgs.length > 1 ? (
            <Slider {...settings} className="slider">
              {project.imgs.map((img, index) => (
                <div key={index}>
                  <img src={img.url} alt={img.text} className="slider-image" />
                </div>
              ))}
            </Slider>
          ) : (
            <img src={project.imgs[0].url} alt={project.imgs[0].text} className="project-single-image"/>
          )}
          <h3>{project.title}</h3>
          <h4>{project.description}</h4>
          <a
            className="project-document-link"
            href={project.documentLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            프로젝트 소개 문서 보기 >
          </a>
          <div className="position-and-stacks">
            <h5>{project.position}</h5>
            <h5>{project.stacks} 사용</h5>
          </div>
          <ul className="contribute-list">
            {project.works.map((work, index) => (
              <li className="contribute" key={index}><h5>{work}</h5></li>
            ))}
          </ul>
          {project.gifs ? (
            <div id="gif-list">
              <h4 id="gif-list-title">시연 GIF 이미지</h4>
              {project.gifs.map((gif, index) => (
                <div key={index}>
                  <h5 className="gif-title">{gif.title}</h5>
                  <div className="gif-title-click">
                    <a href={gif.url}>'{gif.title}' GIF 보기 ></a>
                  </div>
                  <img src={gif.url} alt={gif.text} className="gif" />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Project;
