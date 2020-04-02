import React from 'react';

function Header() {
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <section className="Header">
      <nav>
        <button className="btn" id="logo-wrapper" onClick={scrollTop}>
          <img
            id="logo-image"
            src="/img/Profile.jpg"
            alt="페이지 맨 위로 이동하기"
          />
        </button>
        <a
          href="https://drive.google.com/file/d/1XrMRXHefB_jiwiMteyKwK5pr_d4S8pO4/view?usp=sharing"
          id="show-cv-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          이력서 보기 >
        </a>
      </nav>
    </section>
  );
}

export default Header;
