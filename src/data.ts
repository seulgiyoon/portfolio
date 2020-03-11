type Skill = {
  label: string;
  items: string;
};

type Project = {
  title: string;
  description: string;
  documentLink: string;
  position: string;
  stacks: string;
  works: string[];
  imgs: {url:string; text: string}[];
  gifs?: {url: string; title: string; text: string}[];
};

type Contact = {
  label: string;
  value: string;
  url: string;
  isMail?: boolean;
};

const skills: Skill[] = [
  { label: 'Languages', items: 'JavaScript, CSS, HTML' },
  { label: 'Frontend Tools', items: 'React, React Native' },
  {
    label: 'Basic Knowledge',
    items: 'TypeScript, Sass, EXpressJS, MySQL, AWS S3/EC2/RDS',
  },
];

const projects: Project[] = [
  {
    title: '초록 ChoLog',
    description: '식물 관리 어플리케이션 (안드로이드 대응)',
    documentLink:
      'https://www.notion.so/2-009900-ChoLog-d50b43f1fce84d22abebf225b59bb726',
    position: 'Front-end Developer, 팀장 담당',
    stacks: 'React Native, React Navigation, React Native Paper',
    works: [
      '식물 정보, 식물 관리 일지, 식물 관리 항목 CRUD 인터페이스 구현',
      '식물 정보 입력 시, DB에서 검색한 식물 정보를 입력란에 자동 반영하는 기능을 구현하여 사용자 편의성을 높임',
      '여러 컴포넌트에서 공통으로 사용하는 함수들을 파악하고, 그를 모듈화하여 코드 중복을 줄임',
      'API 요청을 한 곳에서 관리할 수 있도록 모듈화하여 관리 편의성을 높임',
      '잠재 서비스 이용자를 대상으로 설문조사 실시, 이틀 간 약 250명의 의견을 모아서 보다 실용적인 방향으로 기획 개선',
      '입력과 수정 시에는 전체화면을 사용하고, 글 작성 후 바로 생성된 내용을 확인할 수 있도록 화면이 이동하는 등 유저 사용성을 고려한 User Flow 및 UI 디자인 설계, 구현',
    ],
    imgs: [
      {url: '/img/01-cholog/01-welcome.png', text: '식물 관리 앱 초록의 로고화면'},
      {url: '/img/01-cholog/02-plants.png', text: '식물 목록을 볼 수 있는 식물 관리 앱 초록의 메인화면'},
      {url: '/img/01-cholog/03-plantInfo.png', text: '식물 정보를 볼 수 있는 식물 관리 앱 초록의 화면'},
      {url: '/img/01-cholog/04-plantLog.png', text: '식물 관리 앱 초록의 식물 관리 일지 화면'},
    ],
  },
  {
    title: '3 Ideas',
    description: '질문과 답변이 이루어지는 소셜 Q&A 서비스 개발 프로젝트',
    documentLink:
      'https://www.notion.so/Project-3-ideas-df56c48e56604be7a1973a6ce49a5af2',
    position: 'Front-end Developer, 팀장 담당',
    stacks: 'React, React Router, Ant Design',
    works: [
      '로그인, 질문글과 답글 CRUD 및 내용 검색 인터페이스 구현',
      'UI 라이브러리 Ant Design을 사용하여 제한된 시간 안에 적정 수준의 디자인을 구현함',
      '인증 유무와 현재 페이지에 따라 페이지 이동 흐름 및 화면에 나타날 컴포넌트를 다르게 설계하여 사용자 경험 향상',
      '키워드를 검색하면 검색된 내용에서 키워드가 포함된 문장을 일부 표시하고,  검색한 키워드를 강조하여 빠른 정보 확인이 가능하도록 함',
    ],
    imgs: [{url: '/img/02-3ideas/01-main.png', text: '프로젝트 3 ideas 메인화면 스크린샷'}],
    gifs: [
      {
        url: '/img/02-3ideas/02_write_answer.gif',
        title: '질문글에 답변 작성하기',
        text: '질문글에 답변을 작성하는 과정을 보여주는 gif 이미지',
      },
      {
        url: '/img/02-3ideas/06_search.gif',
        title: '키워드로 질문글과 답변글 찾기',
        text: '원하는 키워드를 포함한 질문글과 답변글을 찾는 gif 이미지',
      },
    ],
  },
];

const contacts: Contact[] = [
  {
    label: 'Email',
    value: 'sgyoon.info@gmail.com',
    url: 'mailto:sgyoon.info@gmail.com',
    isMail: true,
  },
  { label: 'Blog', value: 'velog.io/@sgyoon', url: 'https://velog.io/@sgyoon' },
  {
    label: 'Github',
    value: 'github.com/seulgiyoon',
    url: 'https://github.com/seulgiyoon',
  },
];

export { skills, projects, contacts };
