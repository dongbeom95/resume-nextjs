import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '옵스나우 (前 베스핀글로벌)',
      positions: [
        {
          title: 'Momentum Driver / Platform Engineer',
          startedAt: '2025-01',
          descriptions: [
            '조직 차원의 AI 내재화 및 생산성 혁신 주도 (Claude Code, CLAUDE.md, n8n 기반 자동화)',
            'EDA 기반 아키텍처 전환 로드맵 설계 (AWS MSK + Debezium)',
            '전사 AI 학습 워크숍 진행 및 개발 문화 내재화',
          ],
          skillKeywords: ['AI', 'LLM', 'Claude', 'RAG', 'n8n', 'AWS MSK', 'Debezium', 'Agile', 'Scrum'],
        },
        {
          title: 'Scrum Master / Tech Lead',
          startedAt: '2022-01',
          endedAt: '2024-12',
          descriptions: [
            '전사 시스템 전환·통합 프로젝트 3회 총괄, 일정/리스크/의사결정 조율',
            'Keycloak 업그레이드 및 커스텀 SPI 표준화로 대규모 인증 플랫폼 고도화',
            '멀티상품 플랫폼 OpsNow360 런칭 및 TokenExchange 기반 인증체계 구축',
            '애자일 스크럼 마스터로 팀간 협업·퍼실리테이션 수행',
          ],
          skillKeywords: ['Keycloak', 'SSO', 'OAuth2', 'SAML', 'LDAP', 'Quarkus', 'Java', 'Spring Boot', 'Agile', 'Scrum'],
        },
        {
          title: 'Platform / Full-Stack Engineer',
          startedAt: '2020-01',
          endedAt: '2021-12',
          descriptions: [
            'Spring Security 기반 인증 시스템을 Keycloak 기반 글로벌 플랫폼으로 전환',
            'ISMS-P/CSAP 인증 취득 대응, 데이터 클린징 및 보안 체계 강화',
            '백엔드/프론트/인프라 전반을 아우르는 풀스택 서비스 개발 경험',
            'AWS 기반 클라우드 운영 및 자동화 환경 구축',
          ],
          skillKeywords: [
            'Spring Security', 'Keycloak', 'OAuth2', 'SAML', 'MFA',
            'AWS ECS', 'Spring Boot', 'Redis', 'MySQL'
          ],
        },
      ],
    },
  ],
};

export default experience;
