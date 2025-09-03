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
            'AI 내재화 프로젝트 주도: Claude Code 기반 CLAUDE.md 전사 표준화 및 n8n 자동화 워크플로우 구축 (진행중)',
            'MQ → MSK 전환으로 대용량 수집 배치(5분당 150만 건) 안정성 개선 (진행중)',
            'LLM·RAG 학습 워크숍 진행 및 Vector DB 기반 AI 활용 기반 마련',
            'EDA 기반 아키텍처 현대화: AWS MSK + Debezium CDC 설계로 연간 인프라 비용 60% 절감',
          ],
          skillKeywords: ['AI', 'LLM', 'Claude Code', 'RAG', 'n8n', 'AWS MSK', 'Debezium', 'Vector DB', 'EDA'],
        },
        {
          title: 'Scrum Master / Tech Lead',
          startedAt: '2022-01',
          endedAt: '2024-12',
          descriptions: [
            '글로벌 SSO 플랫폼 구축: 4개 리전 확장 및 화이트라벨 30+ 지원으로 프로비저닝 시간 수일→15초 단축',
            'Legacy Modernization: Keycloak 22v→24v 업그레이드로 ECS 메모리 사용량 50% 절감',
            'OpsNow360 멀티상품 통합 플랫폼 런칭 및 TokenExchange 기반 인증체계 구축',
            '멀티 클라우드 헬스체크 시스템: 5개 벤더 2만+ 계정 모니터링으로 CS 대폭 감소',
            '전사 시스템 통합 프로젝트 3회 총괄 및 애자일 스크럼 마스터 역할 수행',
          ],
          skillKeywords: ['Keycloak', 'SSO', 'OAuth2', 'SAML', 'TokenExchange', 'AWS ECS', 'Java', 'Spring Boot', 'Agile', 'Scrum'],
        },
        {
          title: 'Platform / Full-Stack Engineer',
          startedAt: '2020-01',
          endedAt: '2021-12',
          descriptions: [
            'Spring Security → Keycloak 기반 글로벌 인증 플랫폼 전환 및 멀티테넌트 구조 설계',
            'ISMS-P/CSAP 인증 취득 대응: 데이터 클린징 및 보안 정책 수립으로 전사 보안 수준 고도화',
            'Resource Scheduler 개발: 태깅 기반 EC2 자동 관리로 KB, Hanwha 고객사 인프라 비용 45% 절감',
            'OpenAPI 서비스 20+ 구축 및 AWS Gateway + S3 배포, Redis 캐시 구조 적용',
            '백엔드/프론트/인프라 풀스택 개발 및 AWS 기반 클라우드 자동화 환경 구축',
          ],
          skillKeywords: [
            'Spring Security', 'Keycloak', 'OAuth2', 'SAML', 'MFA',
            'AWS ECS', 'Spring Boot', 'Vue.js', 'Redis', 'MySQL', 'API Gateway'
          ],
        },
      ],
    },
  ],
};

export default experience;
