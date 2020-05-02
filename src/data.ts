const skills = [
  { label: 'Languages', items: 'JavaScript, CSS, HTML' },
  { label: 'Frontend Tools', items: 'React, React Native' },
  {
    label: 'Basic Knowledge',
    items: 'TypeScript, Sass, EXpressJS, MySQL, AWS S3/EC2/RDS',
  },
];

const projects = [
  {
    title: '초록 ChoLog',
    description: '식물 관리 어플리케이션 (안드로이드 대응)',
    link: {
      title: `자세한 '초록' 프로젝트 소개 문서 보기`,
      url:
        'https://www.notion.so/2-009900-ChoLog-d50b43f1fce84d22abebf225b59bb726',
    },
    serviceDetail: `'반려 식물'이라는 단어가 등장할 만큼 식물을 키우는 사람들이 늘어난 시대. 보다 편리하고 간단하게 식물을 관리하고 정보를 기록할 수 있도록 기획한 식물 관리 모바일 앱입니다.`,
    projectInfo: {
      date: '2020.02 - 현재',
      position: 'Front-end Developer, 팀장 담당',
      stacks: 'React Native, React Navigation, React Native Paper 사용',
    },
    works: [
      '식물 정보, 식물 관리 일지, 식물 관리 항목 CRUD 인터페이스 구현',
      '식물 정보 입력 시, DB에서 검색한 식물 정보를 입력란에 자동 반영하는 기능을 구현하여 사용자 편의성을 높임',
      '여러 컴포넌트에서 공통으로 사용하는 함수들을 파악하고, 그를 모듈화하여 코드 중복을 줄임',
      'API 요청을 한 곳에서 관리할 수 있도록 모듈화하여 관리 편의성을 높임',
      '잠재 서비스 이용자를 대상으로 설문조사 실시, 이틀 간 약 250명의 의견을 모아서 보다 실용적인 방향으로 기획 개선',
      '입력과 수정 시에는 전체화면을 사용하고, 글 작성 후 바로 생성된 내용을 확인할 수 있도록 화면이 이동하는 등 유저 사용성을 고려한 User Flow 및 UI 디자인 설계, 구현',
    ],
    imgs: [
      {
        url: '/img/01-cholog/01-welcome.jpg',
        text: '식물 관리 앱 초록의 로고화면',
      },
      {
        url: '/img/01-cholog/02-plants.jpg',
        text: '식물 목록을 볼 수 있는 식물 관리 앱 초록의 메인화면',
      },
      {
        url: '/img/01-cholog/03-plantInfo.jpg',
        text: '식물 정보를 볼 수 있는 식물 관리 앱 초록의 화면',
      },
      {
        url: '/img/01-cholog/04-plantLog.jpg',
        text: '식물 관리 앱 초록의 식물 관리 일지 화면',
      },
      {
        url: '/img/01-cholog/05-logList01.jpg',
        text: '식물 관리 앱 초록의 식물 관리 일지 달력 화면',
      },
      {
        url: '/img/01-cholog/06-logList02.jpg',
        text: '식물 관리 앱 초록의 식물 관리 일지 목록 화면',
      },
    ],
  },
  {
    title: '3 Ideas',
    description: '질문과 답변이 이루어지는 소셜 Q&A 서비스 개발 프로젝트',
    link: {
      title: `자세한 '3 Ideas' 프로젝트 소개 문서 보기`,
      url:
        'https://www.notion.so/Project-3-ideas-df56c48e56604be7a1973a6ce49a5af2',
    },
    serviceDetail: `내 질문에 달린 답변들. 모두 마음에 들어서 한 가지 답변만 선택하기 어려울 때가 있습니다. 3 ideas에서는 다른 사람들이 추천하는 답변이 무엇인지 확인하고, 마음에 드는 답변을 세 개까지 선택할 수 있습니다.`,
    projectInfo: {
      date: '2020.01',
      position: 'Front-end Developer, 팀장 담당',
      stacks: 'React, React Router, Ant Design 사용',
    },
    works: [
      '로그인, 질문글과 답글 CRUD 및 내용 검색 인터페이스 구현',
      'UI 라이브러리 Ant Design을 사용하여 제한된 시간 안에 적정 수준의 디자인을 구현함',
      '인증 유무와 현재 페이지에 따라 페이지 이동 흐름 및 화면에 나타날 컴포넌트를 다르게 설계하여 사용자 경험 향상',
      '키워드를 검색하면 검색된 내용에서 키워드가 포함된 문장을 일부 표시하고,  검색한 키워드를 강조하여 빠른 정보 확인이 가능하도록 함',
    ],
    imgs: [
      {
        url: '/img/02-3ideas/01-main.jpg',
        text: '프로젝트 3 ideas 메인화면 스크린샷',
      },
    ],
    videos: [
      {
        url: '/img/02-3ideas/02_write_answer.mp4',
        title: '질문글에 답변 작성하기',
        text: '질문글에 답변을 작성하는 과정을 보여주는 영상',
      },
      {
        url: '/img/02-3ideas/06_search.mp4',
        title: '키워드로 질문글과 답변글 찾기',
        text: '원하는 키워드를 포함한 질문글과 답변글을 찾는 영상',
      },
    ],
  },
];

const experiences = [
  {
    title: '까치당',
    description:
      '아름답고 실용적인 직물 제품과 자수 키트를 기획하고 만드는 브랜드',
    link: {
      title: '제품을 소개하는 홈페이지 둘러보기',
      url: 'http://www.kkachidang.com',
    },
    projectInfo: {
      date: '2015.05-2019.07',
      position: '대표',
      stacks: '브랜드 마케팅 및 제품 디자인, 생산과 판매',
    },
    extraText:
      '4년여간 1인 브랜드를 꾸리며 브랜드와 제품을 만들고 다듬는 과정을 경험했습니다. 더불어 여러 차례의 협업과 공동 주최 이벤트를 통해 동료와 함께 일하는 법을 익혔습니다.',
    imgs: null,
  },
];

const contacts = [
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

export { skills, projects, experiences, contacts };
