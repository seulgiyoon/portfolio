import React from 'react';
import Slider from 'react-slick';
import { projects } from '../data';
import '../styles/Project.scss';

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
                  <img src={img} alt="" />
                </div>
              ))}
            </Slider>
          ) : (
            <img src={project.imgs[0]} alt="" />
          )}
          <h3>{project.title}</h3>
          <h4>{project.description}</h4>
          <a
            className="document-link"
            href={project.documentLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            프로젝트 소개 문서 보기 >
          </a>
          <div className="positions">
            <h5>{project.position}</h5>
            <h5>{project.stacks} 사용</h5>
          </div>
          <ul>
            {project.works.map((work, index) => (
              <li className="work"><h5 key={index}>{work}</h5></li>
            ))}
          </ul>
          {project.gifs ? (
            <div id="gif-list">
              <h4 id="gif-list-title">시연 GIF 이미지</h4>
              {project.gifs.map((gif, index) => (
                <div key={index}>
                  <h5 className="gif-title">{gif.title}</h5>
                  <div className="gif-titles-click">
                    <a href={gif.url}>{gif.title} GIF 확인 ></a>
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
