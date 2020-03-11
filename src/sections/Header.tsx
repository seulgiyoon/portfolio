import React from 'react';
import '../styles/Header.scss';

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
            id="logo"
            src="/img/Profile.jpg"
            alt="윤슬기의 프로필 일러스트"
          />
        </button>
        <a
          href="https://drive.google.com/file/d/1f48OHvRkZok9frxKSVM-WW_jMDTZEXJf/view?usp=sharing"
          id="show-cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          이력서 >
        </a>
      </nav>
    </section>
  );
}

export default Header;
