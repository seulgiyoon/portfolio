import React from 'react';
import { Contact } from '../components';
import '../styles/Footer.scss';

function Footer() {
  return (
    <section className="Footer">
      <Contact />
      <div id="copyright">
        <h5>© 2020 Seulgi Yoon</h5>
        <h5>Made with Reactjs, SCSS</h5>
        <h5>
          This site is using
          <a
            href="https://spoqa.github.io/spoqa-han-sans/ko-KR/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spoqa Han Sans KR
          </a>
        </h5>
      </div>
    </section>
  );
}

export default Footer;
