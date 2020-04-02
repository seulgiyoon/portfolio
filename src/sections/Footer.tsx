import React from 'react';
import { Contact } from '../components';

function Footer() {
  return (
    <section className="Footer">
      <Contact />
      <div id="copyright">
        <p className="credit-text">© 2020 Seulgi Yoon</p>
        <p className="credit-text">Built with ReactJS, Sass,
          <a
            id="spoqa-han-sans-link"
            href="https://spoqa.github.io/spoqa-han-sans/ko-KR/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spoqa Han Sans KR
          </a>
        </p>
      </div>
    </section>
  );
}

export default Footer;
