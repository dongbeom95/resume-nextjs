import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: 'OCI 개발 도입 컨설팅',
      subTitle: 'Technical Envoy / Architect at Samsung SDS Vietnam',
      at: '2025-02',
      descriptions: [
        {
          content: 'OCI 개발 도입 타당성 검증 및 전략 논의',
        },
        {
          content: '현지 개발팀 인터뷰·역량 진단 및 아키텍처/CI·CD 운영 모델 전파',
        },
      ],
    },
    {
      title: 'Agile 스터디 & 조직 개선 활동',
      subTitle: 'Facilitator & Organizer',
      at: '2023-06',
      descriptions: [
        {
          content: '내부/외부 Agile 스터디 주관, SAFe 및 Scrum 사례 공유',
        },
        {
          content: '세레모니 및 워크숍 퍼실리테이션, 조직 내 애자일 문화 확산',
        },
      ],
    },
    {
      title: '서비스 기능 사용자 가이드 영상 제작',
      subTitle: 'Producer & Content Creator',
      at: '2022-08',
      descriptions: [
        {
          content: '온보딩용 서비스 기능 사용자 가이드 영상 제작 및 사내 공유',
        },
        {
          content: '실제 시나리오 기반 설명 구성으로 사용자 문의 건수 감소',
        },
      ],
    },
    {
      title: '개발자 인터뷰 및 문화 홍보 콘텐츠 제작',
      subTitle: 'Speaker & Marketing Collaborator',
      at: '2022-05',
      descriptions: [
        {
          content: '개발자 인터뷰 영상 촬영 및 사내 개발 문화 브랜딩 활동',
        },
        {
          content: '마케팅팀 협업으로 사내 인지도 및 개발팀 위상 강화',
        },
      ],
    },
    {
      title: '영베스핀 2기 리더 & 사회공헌 활동',
      subTitle: 'Community Leader & CSR Contributor',
      at: '2021-07',
      descriptions: [
        {
          content: '사내 바자회·모금 행사 운영 및 수익금 기부',
        },
        {
          content: '청운보육원 코딩 교육, 초록우산재단 정기 기부',
        },
      ],
    },
  ]
  ,
};

export default presentation;
