import React from 'react';
import { Contact } from '../components';
import '../styles/Footer.scss';

function Footer() {
  return (
    <section className="Footer">
      <Contact />
      <div id="copyright">
        <h6>© 2020 Seulgi Yoon</h6>
        <h6>Built with Reactjs, Sass,
          <a
            href="https://spoqa.github.io/spoqa-han-sans/ko-KR/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spoqa Han Sans KR
          </a>
        </h6>
      </div>
    </section>
  );
}

export default Footer;
