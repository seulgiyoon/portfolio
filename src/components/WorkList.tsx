import React from 'react';

type WorkListProps = {
  simpleStyle: boolean;
  workList: string[];
};

function WorkList(props: WorkListProps) {
  const { workList } = props;
  return (
    <div className={'Works'}>
      <h4 className="list-title">저는 이런 일을 담당했습니다</h4>
      <ul className="contribute-list">
        {workList &&
          workList.map((work, index) => (
            <li className="contribute" key={index}>
              {work}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default WorkList;
