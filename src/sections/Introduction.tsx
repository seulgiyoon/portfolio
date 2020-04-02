import React from 'react';
import { Skills } from '../components';

function Introduction() {
  return (
    <section className="main-section Introduction">
      <div id="intro-description">
        <h1>안녕하세요. 윤슬기입니다.</h1>
        <p className="description">
          디자인과 프로그래밍 사이를 단단하게 잇는 프런트엔드 개발자를 목표로,
          2019년 여름부터 프로그래밍을 공부하고 있습니다. 지난 몇 년 동안에는
          직물 공예가로 일했습니다. 꼼꼼하게 제품을 만들고, 끈질기게 가장 좋은
          제작법을 찾아내고, 아름답게 마무리하던 공예가의 자세 그대로 지금은
          개발 분야를 탐구합니다.
        </p>
      </div>
      <div className="divider"></div>
        <Skills />
    </section>
  );
}

export default Introduction;
