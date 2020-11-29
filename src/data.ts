const skills = [
  { label: 'Languages', items: 'HTML, CSS, JavaScript' },
  { label: 'Frontend Tools', items: 'React, React Native' },
  {
    label: 'Basic Knowledge',
    items: 'TypeScript, styled-components, Redux, MySQL, AWS S3',
  },
];

const works = [
  {
    title: '핏펫 Fitpet',
    description: '반려동물 헬스케어 솔루션',
    link: {
      title: '핏펫 홈페이지 바로가기',
      url: 'http://fitpet.co.kr/',
    },
    serviceDetail:
      '새로운 서비스를 개발하고, 기존 서비스를 유지보수 및 개선하고 있습니다. 많은 서비스가 네이티브 앱과 웹뷰로 연결되기에, 앱과 웹뷰 사이를 잇는 과정에도 참여합니다. 사내에서 사용하는 어드민 기능을 개선하는 역할도 맡고 있습니다.',
    projectInfo: {
      date: '2020.05.25 - 현재',
      position: '서비스 개발팀 | Frontend Developer',
    },
    works: {
      simpleStyle: false,
      workList: [
        {
          title: `반려동물 제품 정기배송 서비스 'FitpetGo' 개발(릴리즈 준비중)`,
          percent: 30,
          details: [
            `Atomic 디자인에 기반하여 재사용성을 고려한 컴포넌트 작성`,
            `localStorage를 활용, 사용자의 설문 응답 결과를 브라우저에 저장하여 설문 도중에 이탈 후 재진입 시 이탈한 곳에서 설문을 시작할 수 있도록 구성`,
          ],
          stacks: 'React, TypeScript, Redux, Redux thunk, styled-components',
        },
        {
          title: `반려동물 제품 쇼핑몰 'FitpetMall' 리뉴얼 디자인 퍼블리싱(릴리즈 준비중)`,
          percent: 50,
          details: [`디자인과 일치하고 기능을 구현하기 용이하도록 퍼블리싱`],
          stacks: 'HTML, CSS',
        },
      ],
    },
  },
  {
    title: '까치당',
    description:
      '아름답고 실용적인 직물 제품과 자수 키트를 기획하고 만드는 브랜드',
    link: {
      title: '제품을 소개하는 홈페이지 둘러보기',
      url: 'http://www.kkachidang.com',
    },
    projectInfo: {
      date: '2015.05 - 2019.07',
      position: '대표',
      stacks: '브랜드 마케팅 및 제품 디자인, 생산과 판매',
    },
    serviceDetail:
      '4년여간 1인 브랜드를 꾸리며 브랜드와 제품을 만들고 다듬는 과정을 경험했습니다. 더불어 여러 차례의 협업과 공동 주최 이벤트를 통해 동료와 함께 일하는 법을 익혔습니다.',
    imgs: null,
    works: {
      simpleStyle: true,
      workList: [
        `크라우드 펀딩 플랫폼 '텀블벅'에서 십자수 키트 개발 프로젝트를 3회 개최하여 모두 성공`,
        `갤러리 '포터리밈'에서 '이달의 작가'로 선정되어 공예품 및 자수 작품 전시`,
      ],
    },
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
    serviceDetail: `편리하고 간단하게 식물을 관리하고 정보를 기록할 수 있도록 기획한 식물 관리 모바일 앱입니다. 코딩 교육기관에서 만난 4인이 팀을 이루어 만들었습니다. 앱 마켓에는 릴리즈 하지 않았습니다.`,
    projectInfo: {
      date: '2020.02',
      position: 'Front-end Developer, 팀장 담당',
      stacks: 'React Native, React Navigation, React Native Paper 사용',
    },
    works: {
      simpleStyle: true,
      workList: [
        '식물 정보, 식물 관리 일지, 식물 관리 항목 CRUD 인터페이스 구현',
        '식물 정보 입력 시, DB에서 검색한 식물 정보를 입력란에 자동 반영하는 기능을 구현하여 사용자 편의성을 높임',
        '여러 컴포넌트에서 공통으로 사용하는 함수들을 파악하고, 그를 모듈화하여 코드 중복을 줄임',
        'API 요청을 한 곳에서 관리할 수 있도록 모듈화하여 관리 편의성을 높임',
        '잠재 서비스 이용자를 대상으로 설문조사 실시, 이틀 간 약 250명의 의견을 모아서 보다 실용적인 방향으로 기획 개선',
        '입력과 수정 시에는 전체화면을 사용하고, 글 작성 후 바로 생성된 내용을 확인할 수 있도록 화면이 이동하는 등 유저 사용성을 고려한 User Flow 및 UI 디자인 설계, 구현',
      ],
    },
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

export { skills, works, projects, contacts };
