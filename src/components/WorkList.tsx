import React from 'react';
import { ListType, WorkListType } from '../dataTypes';

type WorkListProps = {
  works: WorkListType;
};

function WorkList({ works }: WorkListProps) {
  const { simpleStyle, workList } = works;
  return (
    <div className="Works">
      <h4 className="list-title">저는 이런 일을 담당했습니다</h4>
      {simpleStyle ? (
        <ul className="contribute-list">
          {(workList as string[]).map((work, index: number) => (
            <li className="contribute" key={index}>
              {work}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="">
          {(workList as ListType[]).map((work, index) => (
            <li className="" key={index}>
              <p className="">
                {work.title}
                <span>기여도 {work.percent}%</span>
              </p>
              <ul className="contribute-list">
                {work.details.map((detail, index) => (
                  <li className="contribute" key={index}>
                    {detail}
                  </li>
                ))}
              </ul>
              <p>사용기술 - {work.stacks}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WorkList;
