import React from 'react';

type VideosProps = {
  videos: { url: string; coverImg: string; title: string; text: string }[];
};

function Videos(props: VideosProps) {
  const { videos } = props;
  return (
    <div className="Videos">
      <div id="video-list">
        <h4 className="list-title video-list-title">
          시연 영상을 확인하세요
        </h4>
        <div className="video-title-wrapper">
        {videos.map((video, index) => (
          <div key={index}>
            <h5 className="video-title">{video.title}</h5>
            <video controls playsinline muted className="video" preload="metadata" poster={video.coverImg}>
              <source src={video.url} type="video/mp4" />
              시연 영상 보기가 지원되지 않는 브라우저입니다.
            </video>
            {/* <a href={video.url} className="video-title click">
              '{video.title}' 영상 보기 >
            </a> */}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;
