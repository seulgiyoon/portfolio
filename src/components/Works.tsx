import React from 'react';

type WorksProps = {
  works: string[];
};

function Works(props: WorksProps) {
  const { works } = props;
  return (
    <div className={"Works"}>
      <h4 className="list-title">저는 이런 일을 담당했습니다</h4>
      <ul className="contribute-list">
        {works &&
          works.map((work, index) => (
            <li className="contribute" key={index}>
              {work}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Works;
