import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: 'Samsung SDS Vietnam OCI 개발 도입 컨설팅',
      subTitle: 'OpsNow / 글로벌 비지니스 협력',
      at: '2025-02',
      descriptions: [
        {
          content: 'OCI 프로젝트 개발외주 도입을 위한 타당성 검증 및 전략 논의',
        },
        {
          content: '현지 개발팀 인터뷰·역량 진단 및 OpsNow 아키텍처/CI·CD 운영 모델 전파',
        },
        {
          content: '의사소통 비용 최소화 및 장기 운영 방안 확립',
        },
      ],
    },
    {
      title: 'Agile 스터디 & 조직 개선 활동',
      subTitle: 'Bespinglobal / Facilitator & Organizer',
      at: '2023-06',
      descriptions: [
        {
          content: '타 회사 애자일 코치들과 협업한 크로스 조직 애자일 스터디 참여',
        },
        {
          content: '각 조직별 애자일 도입 사례 및 문화 정착 경험 공유, 실무 적용 방안 논의',
        },
        {
          content: 'SAFe 자격 취득 및 사내 Scaled Agile Framework 도입·적용',
        },
        {
          content: '세레모니 및 워크숍 퍼실리테이션, 조직 내 애자일 문화 확산 주도',
        },
      ],
    },
    {
      title: '서비스 기능 사용자 가이드 영상 제작',
      subTitle: 'Bespinglobal / 마케팅팀 협업',
      at: '2022-08',
      descriptions: [
        {
          content:
            '온보딩용 담당 서비스 기능 (리소스스케줄러) 사용자 가이드 영상 제작 및 고객사 배포',
        },
        {
          content: '실제 시나리오 기반 설명 구성으로 사용자 문의 건수 감소',
        },
      ],
    },
    {
      title: '개발자 인터뷰 및 문화 홍보 콘텐츠 제작',
      subTitle: 'Bespinglobal / 마케팅팀 협업',
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
      title: '영베스핀 2기 리더',
      subTitle: 'Bespinglobal / 사내 문화 확산 조직 리더 역임 (1년)',
      at: '2021-01',
      endedAt: '2021-12',
      descriptions: [
        {
          content: '사내 바자회·모금 행사 운영 및 수익금 기부 (초록우산재단)',
        },
        {
          content: '청운보육원 자선 코딩 교육',
        },
        {
          content: '정기 사내 행사 주최 및 총괄',
        },
      ],
    },
  ],
};

export default presentation;
