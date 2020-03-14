import React from 'react';

type GifProps = {
  gifs: { url: string; title: string; text: string }[];
};

function Gifs(props: GifProps) {
  const { gifs } = props;
  return (
    <div className="Gifs">
      <div id="gif-list">
        <h4 className="list-title gif-list-title">
          시연 GIF 이미지를 확인하세요
        </h4>
        <div className="gif-title-wrapper">
        {gifs.map((gif, index) => (
          <div key={index}>
            <h5 className="gif-title">{gif.title}</h5>
            <img src={gif.url} alt={gif.text} className="gif" />
            <a href={gif.url} className="gif-title click">
              '{gif.title}' GIF 보기 >
            </a>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Gifs;
