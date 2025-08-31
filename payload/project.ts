import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'AI 내재화 프로젝트',
      startedAt: '2025-05',
      where: 'OpsNow Platform',
      descriptions: [
        { content: '조직 차원의 AI 내재화 전략 수립 및 실행, 생산성 혁신 주도' },
        { content: 'Claude Code 기반 CLAUDE.md 전사 표준화 적용' },
        { content: 'subagent·MCP·settings 가이드 마련 및 팀 간 규격화' },
        { content: 'n8n 기반 자동 이슈 처리기·반복 업무 워크플로우 에이전트 설계·개발(진행형)' },
        {
          content: 'LLM·RAG 학습 워크숍을 통해 개발 문화 혁신 및 AI 활용 기반 마련',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Vector DB·유사도 검색 구조 이해와 실습 공유' },
            { content: '전사 개발팀 대상 AI 활용 사례 전파 및 가이드' }
          ]
        }
      ]
    },
    {
      title: 'EDA 기반 플랫폼 아키텍처 현대화',
      startedAt: '2025-01',
      where: 'OpsNow Platform',
      descriptions: [
        { content: 'AWS MSK + Debezium 기반 CDC 아키텍처 설계 및 이벤트 기반 동기화 구현' },
        {
          content: '데이터 동기화 유실·지연 문제 해소, 이벤트 추적 가능 구조 확립',
          weight: 'HIGH',
          descriptions: [
            { content: 'Kafka Streams로 비즈니스 로직 변환/분기 처리' },
            { content: '연간 인프라 비용 약 60% 절감(ECS Fargate 최적화)' }
          ]
        }
      ]
    },
    {
      title: 'Kill Legacy 및 이중화 SSO 인프라',
      startedAt: '2024-01',
      endedAt: '2024-07',
      where: 'OpsNow Platform',
      descriptions: [
        { content: '이중 SSO 아키텍처를 단일 시스템으로 완전 통합, 사용자/API/토큰 전면 재설계' },
        { content: 'Keycloak 22v → 24v 업그레이드(3주 내 완료), 최신화 및 안정성 개선' },
        { content: '서버 이중화 및 수시 배포 체계 확립, 운영 복잡성 해소' }
      ]
    },
    {
      title: 'AWS Marketplace 과금 시스템',
      startedAt: '2024-02',
      endedAt: '2024-03',
      where: 'OpsNow Platform',
      descriptions: [
        { content: 'AWS Marketplace 등록 및 과금 모델 설계' },
        { content: '고객별 과금·결제 프로세스 자동화' }
      ]
    },
    {
      title: 'API Gateway 전환 (MSA)',
      startedAt: '2024-02',
      endedAt: '2024-03',
      where: 'OpsNow Platform',
      descriptions: [
        { content: 'Nginx → AWS API Gateway 전환, 12개 도메인 통합 관리' },
        { content: 'OpenAPI 인증/라이프사이클 표준화, 운영 단순화' }
      ]
    },
    {
      title: '멀티 클라우드 계정 헬스체크 시스템',
      startedAt: '2023-08',
      endedAt: '2023-09',
      where: 'OpsNow Platform',
      descriptions: [
        { content: 'AWS/GCP/NCP/OCI/Azure 벤더 5개 연동, 분당 1만+ 계정 헬스체크 구현' },
        { content: '비동기 처리와 RateLimiter 기반 API 호출 제어로 안정성 확보' }
      ]
    },
    {
      title: '데일리 피드 기능',
      startedAt: '2023-04',
      endedAt: '2023-07',
      where: 'OpsNow Platform',
      descriptions: [
        { content: '8개 핵심 서비스 항목 기반 자동 알림·리포팅 기능 개발' },
        { content: '고객 맞춤형 우선순위 로직 설계로 활용도 증대' }
      ]
    },
    {
      title: 'OpsNow360 멀티 상품 통합 플랫폼',
      startedAt: '2022-09',
      endedAt: '2023-07',
      where: 'OpsNow Platform',
      descriptions: [
        { content: '5개 주요 상품을 단일 플랫폼으로 통합, 전면적 Keycloak 연계' },
        {
          content: 'TokenExchange 기반 인증으로 멀티 상품 간 접근 권한 통합',
          weight: 'MEDIUM',
          descriptions: [
            { content: '공통 클레임·정책 정의 및 API 인증 구조 표준화' },
            { content: '설치형 고객 환경과 클라우드 환경 동시 지원' }
          ]
        }
      ]
    },
    {
      title: 'User Tracking 시스템',
      startedAt: '2022-03',
      endedAt: '2022-04',
      where: 'OpsNow Platform',
      descriptions: [
        { content: '전사 사이트 GTM 코드 설계·배포, 사용자 행동 데이터 수집' },
        { content: 'Clarity 연동으로 히트맵·세션 리플레이 기능 도입' }
      ]
    },
    {
      title: 'Resource Scheduler',
      startedAt: '2021-12',
      endedAt: '2022-02',
      where: 'OpsNow Platform',
      descriptions: [
        { content: '태깅 기반 EC2/GCE VM 자동 시작·종료 스케줄링' },
        { content: '정책 기반 자원 운영, 온디맨드 비용 40% 절감' }
      ]
    },
    {
      title: '글로벌 엔터프라이즈급 멀티테넌트 SSO 플랫폼',
      startedAt: '2020-01',
      endedAt: '2025-08',
      where: 'OpsNow Platform',
      descriptions: [
        { content: 'Realm 기반 멀티테넌트 구성 및 화이트라벨(30+) 지원, 글로벌 인증 플랫폼 확립' },
        {
          content: '불안정했던 인증 시스템을 4개 리전까지 확장, 글로벌 운영 안정성 확보',
          weight: 'HIGH',
          descriptions: [
            { content: '화이트라벨 고객 대응 시간 수일 → 15초 자동 프로비저닝 수준 단축' },
            { content: 'ECS 메모리 사용량 50% 절감(Keycloak 업그레이드 효과)' }
          ]
        },
        { content: 'ISMS-P/CSAP 인증 취득 및 보안 정책 수립, 전사 보안 수준 고도화' }
      ]
    },
    {
      title: 'API 사용량 대시보드 (내부 Admin)',
      startedAt: '2020-10',
      endedAt: '2020-12',
      where: 'OpsNow Platform',
      descriptions: [
        { content: '전사 API 호출량/오류/추이 시각화, 실시간 모니터링' },
        { content: '에러 유형별 로그 집계·분석, 운영 품질 개선' }
      ]
    },
    {
      title: 'OpenAPI 서비스',
      startedAt: '2020-04',
      endedAt: '2020-06',
      where: 'OpsNow Platform',
      descriptions: [
        { content: 'Asset/Cost/Portal 등 20+ OpenAPI 설계·구축' },
        { content: 'API 인증/권한 표준화 및 Redis 캐시 구조 적용' }
      ]
    }
  ],
};

export default project;
