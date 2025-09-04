import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'AI 내재화 프로젝트',
      startedAt: '2025-05',
      where: 'OpsNow Platform / Momentum Driver',
      descriptions: [
        { content: '조직 차원의 AI 내재화 전략 수립 및 실행, 생산성 혁신 주도' },
        { content: 'Claude Code 기반 CLAUDE.md 팀별 표준화 적용',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'md 파일의 최적화 방법 연구 및 적용' },
            { content: '문서 인덱스, Reflection 커맨드 적용을 통한 md파일 형상관리 배포' },
          ],
        },
        { content: 'Subagent·MCP·Settings 가이드 마련 및 팀 간 규격화',
          descriptions: [
            { content: 'Subagent, mcp, command 등 상황별 적용 방법 공유' },
            { content: 'local (사용자), project 레벨별 claude 설정 규격화' },
          ],
        },
        { content: 'n8n 기반 자동 이슈 처리기·반복 업무 워크플로우 에이전트 설계·개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'GWS 기반 일정 관리 Agent 개발 및 공유' },
            { content: 'Git hook 트리거를 통한 Code 리뷰 Agent 개발 및 공유' },
          ],
        },
        {
          content: 'LLM·RAG 학습 워크숍을 통해 개발 문화 혁신 및 AI 활용 기반 마련',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Vector DB·유사도 검색 구조 이해와 실습 공유' },
            { content: '팀원 대상 RAG와 Vector DB를 적용한 LLM 모델 차이점 hands-on 워크숍 진행' },
            { content: '워크숍 이후 팀원들이 AI 기반 서비스 아키텍처 설계·개발의 전체 흐름(데이터 저장, RAG, 에이전트 자동화 등)을 스스로 구상' },
          ],
        },
      ],
    },
    {
      title: 'EDA 기반 플랫폼 아키텍처 현대화',
      startedAt: '2025-01',
      where: 'OpsNow Platform / Momentum Driver',
      descriptions: [
        { content: 'AWS MSK + Debezium 기반 CDC 아키텍처 설계 및 이벤트 기반 동기화 개발' },
        {
          content: '간헐적 MQ 장애로 인한 데이터 유실 이슈 방지',
          weight: 'MEDIUM',
          descriptions: [
            { content: '서비스간 중요 데이터 Debezium을 통한 CDC 개발' },
            { content: 'ECS 기반 커스텀 Connector 개발로 AWS MSK Connector 대비 60% 비용 절감' },
            {
              content: 'Connector 증설시 비용이 n개x로 증가하던 아키텍처를 선형적 비용 구조로 개발',
            },
            {
              content:
                '최소 비용으로 고효율 아키텍처 개발 / 연간 인프라 비용 약 60% 절감(ECS Fargate 최적화)',
            },
          ],
        },
        {
          content: 'OpsNow 고객 Cloud 자원 수집 배치 MQ → MSK 전환 (진행형)',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기존 MQ 기반 대용량 수집 배치(5분당 약 150만 건)에서 간헐적 장애로 재처리 이슈 존재' },
            { content: '비용 절감을 위해 제한된 MQ 리소스가 안정성을 저해, 성능 및 확장성 부족 문제 발생' },
            { content: 'MSK 기반 아키텍처로 전환하여 안정적 수집 파이프라인 개발' },
            { content: '데이터 인사이트 확보를 위한 확장 가능한 기반 마련 (실시간 처리 및 분석 가능성 강화)' },
            { content: '운영 안정성 및 성능 향상을 통한 수집 배치 효율화' },
          ],
        },
      ],
    },
    {
      title: '2024 Legacy Modernization 및 이중화 SSO 인프라 구축',
      startedAt: '2024-01',
      endedAt: '2024-07',
      where: 'OpsNow Platform / Scrum Master',
      descriptions: [
        { content: 'SSO 통합 완성 및 외부 플랫폼 연동 확장' },
        {
          content: 'SSO 서버 최신화 및 통합 릴리즈',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'OpsNow SSO와 MarketOps SSO 시스템 통합: MarketplaceOps 서비스 종료에 따른 대규모 SSO 통합 작업' },
            { content: 'OpsNow SSO로 전체 사용자 통합 및 마이그레이션, 서로 다른 유저 정보, API 인증 토큰 Claim, 두 플랫폼(공통) API 서버 통합' },
            { content: 'TokenExchange 제거를 통한 전체 인증 아키텍처 단순화' },
            { content: 'Keycloak 22v → 24v 서버 최신화: 기존 코어 의존성을 낮춘 설계로 3주 만에 최신 버전 업그레이드 완료, 최신 버전 적용으로 보안 강화 및 성능 최적화' },
          ],
        },
        {
          content: 'SSO 이중화 및 세션 서버 분리',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Keycloak 임베디드 세션서버(infinispan)로 인한 배포 시 전체 로그아웃 문제 해결' },
            { content: '임베딩된 Infinispan을 독립 캐시 서버로 분리 배포, 이중화된 Keycloak 서버가 단일 캐시 서버를 공유하는 구조 적용' },
            { content: '수시 배포 환경 구성 및 트래픽 분산을 통한 서비스 안정성 대폭 향상' },
          ],
        },
        {
          content: 'Custom SSO 및 외부 서비스 임베딩 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '고객사 SSO 시스템 SAML 연동기능 출시: 고객 포털과 SSO 연동 요구사항 증가에 따른 셀프 서비스 기능 출시' },
            { content: '고객이 직접 OpsNow를 통해 회사별 SSO를 연동할 수 있는 Single Sign On 기능 개발' },
            { content: 'ESG(외부 서비스) ↔ OpsNow 사용자 동기화 총괄: 타사 서비스 임베딩을 위한 전체 개발 리드' },
            { content: 'Keycloak 전반적 설계부터 개발까지 총괄, SSO 연동, 사용자 정보 동기화, 사용자 탈퇴 시 삭제, SAML Mapper를 통한 비즈니스 유저 attribute 동기화 등 전체 시스템 설계 및 개발' },
          ],
        },
      ],
    },
    {
      title: 'AWS Marketplace 과금 시스템',
      startedAt: '2024-02',
      endedAt: '2024-03',
      where: 'OpsNow Platform / Scrum Master',
      descriptions: [
        { content: 'AWS Marketplace 등록 및 과금 Batch 시스템 개발' },
        { content: 'OpsNow 신규 판매채널 및 고객 결제 방법 추가' },
      ],
    },
    {
      title: 'API Gateway 전환 (MSA)',
      startedAt: '2024-02',
      endedAt: '2024-03',
      where: 'OpsNow Platform / Scrum Master',
      descriptions: [
        { content: 'Nginx Proxy → AWS API Gateway 전환, 12개 도메인 통합 관리' },
        { content: '규격화 되어있지 않던 서비스별 API 호출 구조 전면 개편' },
        { content: '서비스 운영 및 확장성 향상에 기여' },
      ],
    },
    {
      title: '멀티 클라우드 계정 헬스체크 시스템',
      startedAt: '2023-08',
      endedAt: '2023-09',
      where: 'OpsNow Platform / Scrum Master',
      descriptions: [
        { content: 'AWS/GCP/NCP/OCI/Azure 벤더 5개 연동, 시간별 2만+ 계정 헬스체크 개발' },
        { content: 'Completable Future 기반의 벤더별 비동기 병렬 SDK 호출 개발' },
        { content: 'RateLimiter 기반 API 호출 제어로 안정성 달성' },
        { content: '고객 Cloud Account 문제로 인한 CS 대폭 감소' },
      ],
    },
    {
      title: '데일리 피드 기능',
      startedAt: '2023-04',
      endedAt: '2023-07',
      where: 'OpsNow Platform / Scrum Master',
      descriptions: [
        { content: '8개 핵심 서비스 항목 기반 이메일, 대시보드 알림/위젯 개발' },
        { content: 'Rabbit MQ를 사용한 서비스별 데이터 수집 및 적재 Batch 개발' },
        { content: '고객별 주요 항목별 대응 속도 향상' },
      ],
    },
    {
      title: '2023 멀티 상품 통합 플랫폼 구축',
      startedAt: '2022-09',
      endedAt: '2023-07',
      where: 'OpsNow Platform / Scrum Master',
      descriptions: [
        { content: '통합 대시보드 런칭, 화이트라벨 자동화 및 Keycloak 업그레이드' },
        {
          content: '멀티 상품 통합 플랫폼(OpsNow360) 런칭을 위한 SSO 연계',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'SSO 시스템 연계 총괄: OpsNow, MarketplaceOps, AlertOps, DevOps, SecurityOps 다섯 개 개별팀(상품)의 SSO 전체 연계' },
            { content: '상품별 상이한 공통 비즈니스 로직 표준화 및 토큰 claim 공통화 개발' },
            { content: 'TokenExchange 구현 및 최적화: 서로 다른 SSO를 사용하는 5개 상품을 하나의 대시보드에서 통합 표시하기 위한 TokenExchange 시스템 구현' },
            { content: 'Zuul 기반의 메인 SSO 토큰으로 모든 상품 API 접근 가능하도록 구현' },
          ],
        },
        {
          content: 'Keycloak 12v ▶ 22v 업그레이드',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'JBoss → Quarkus 플랫폼 전환: 시작 시간 밀리초 단위 달성, 메모리 사용량 50% 감소, 배포 패키지 크기 절반 단축' },
            { content: '커스텀 SPI 최소화 및 표준 기능 전환: 기존 커스텀 SPI로 구현했던 기능들을 새 버전 제공 기능으로 전환하여 커스텀 최소화' },
            { content: '코어 의존성 최소화 아키텍처 설계: 코어 의존성이 높은 SPI의 의존성 최소화 변경으로 추후 추가적인 버전업 시 빠른 적용을 위한 구조 개선, 전체 온바인딩 방식에서 특정 부분만 오버라이딩하는 구조로 변경' },
          ],
        },
        {
          content: '자동화 화이트라벨 Multitenant 개발, Single Tenant(설치형) 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '동적 테마 변경 시스템 구축: SSO 화면 템플릿에 공통 번호 적용 및 테넌트별 API를 통한 실시간 동적 테마 변경 시스템 구현' },
            { content: '15초 자동 프로비저닝 시스템 구축: 고객 초기 데이터(로고, 파비콘, 개인정보 보호정책 등) 설정 시 15초 내 고객용 화이트라벨 자동 생성 시스템 개발' },
            { content: '온프레미스 설치형 버전 지원: 고객사 인프라에 독립 설치되는 싱글테넌트 온프레미스 버전 개발, 동적 API 대신 프로퍼티 파일 기반으로 동작하는 테마 시스템 별도 구현 및 관리' },
            { content: '비즈니스 확장성 확보: 5개 상품 통합 OpsNow360 플랫폼 성공적 런칭, TokenExchange로 복잡한 멀티 상품 API 인증 체계 구축' },
          ],
        },
      ],
    },
    {
      title: 'ISMS-P/CSAP 컴플라이언스 대응',
      startedAt: '2022-03',
      endedAt: '2022-07',
      where: 'OpsNow Platform / Scrum Master',
      descriptions: [
        { content: 'ISMS-P/CSAP 컴플라이언스 취득을 위한 전사 보안 정책 적용 및 보안 위험 요소 개선' },
        {
          content: '개인정보보호 강화',
          weight: 'MEDIUM',
          descriptions: [
            { content: '대규모 데이터 클린징 작업 수행: 기존 사용자 탈퇴 프로세스 부재로 누적된 미사용 고객 데이터 전체 필터링 삭제' },
            { content: 'ISMS-P 규정 준수를 위한 휴면 데이터 → 파기 대기 데이터 → 완전삭제 배치 프로세스 구현' },
            { content: '휴면 프로세스 해지 절차를 커스텀 SPI로 개발하여 Keycloak 통합' },
          ],
        },
        {
          content: 'Keycloak 보안 기능 강화',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Client별 Valid Redirect URL 설정으로 보안 취약점 개선' },
            { content: '테넌트별 MFA 필수 설정 기능 개발' },
            { content: '비밀번호 복기 공격 방어 시스템 활성화 및 구성 설정, 장기 미변경 시 재설정 기능 개발' },
            { content: 'iframe 제한을 위한 Content-Security-Policy 설정' },
            { content: '토큰 암호화 알고리즘 최신 표준 적용' },
          ],
        },
        {
          content: '2022년 주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            { content: '안전 무결성 진화: OpenSource 기반 시스템으로 고객 SSO 연동 안정성 확보, 화이트라벨 고객들의 인증 시스템 신뢰도 및 만족도 개선' },
            { content: '개발 생산성 향상: OpenSource 기반 구조화된 아키텍처 신규 기능 개발 속도 대폭 향상, 커스텀 SPI 개발을 통한 기존 기능 완벽 재구현 및 확장성 확보' },
            { content: '100개+ 프로젝트 Keycloak Adaptor 전환 가이드 및 기술 지원 완료' },
          ],
        },
        {
          content: '엔터프라이즈급 보안 수준 달성 ISMS-P/CSAP',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'ISMS-P/CSAP 컴플라이언스 취득으로 표절적 보안 정책 적용 및 보안 위험 요소 차단' },
            { content: '화이트라벨 관리 복잡성 해소 및 자동 프로비저닝 기반 구축' },
          ],
        },
        {
          content: '운영 효율성 확보',
          weight: 'MEDIUM',
          descriptions: [
            { content: '화이트라벨 관리 복잡성 해소 및 자동 프로비저닝 기반 구축' },
          ],
        },
      ],
    },
    {
      title: 'User Tracking 시스템',
      startedAt: '2022-03',
      endedAt: '2022-04',
      where: 'OpsNow Platform / Scrum Master',
      descriptions: [
        { content: '전사 사이트 GTM 코드 설계·배포, GA Report 작성' },
        { content: 'MS Clarity 연동을 통한 히트맵·세션 리플레이 기능 도입' },
        { content: '고객별, 메뉴별 접속 추이를 통한 메뉴별 운영 관점 의사소통 데이터 제공' },
      ],
    },
    {
      title: 'Keycloak 기반 통합 인증 플랫폼 구축',
      startedAt: '2022-01',
      endedAt: '2022-08',
      where: 'OpsNow Platform / Scrum Master',
      descriptions: [
        { content: 'SpringSecurity → Keycloak 전환 및 ISMS-P/CSAP 컴플라이언스 대응' },
        {
          content: '인증 시스템 전환',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Realm별 멀티테넌트 구성: 30개+ 화이트라벨 완전 독립적 Realm 구성으로 테넌트 간 데이터 격리 및 개별 보안 정책 적용' },
            { content: '기존 시스템 100% 호환성 확보: bcrypt/scrypt 알고리즘을 Keycloak 코어소스에 추가 지원' },
            { content: '기존 MFA의 base64 이중 인코딩 방식을 Keycloak Google Authenticator와 호환되도록 코어소스 수정' },
          ],
        },
        {
          content: '기존 기능 완벽 이식 (Custom SPI 개발)',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Keycloak 미지원 기능들을 위한 커스텀 SPI 개발: AWS SES 이메일 모듈, RabbitMQ, 동시로그인 제한, 공통 비즈니스 로직 등' },
            { content: '100개+ 프로젝트(Java, Angular, Vue)에 Keycloak 인증 체계 전환 및 전체 가이드 지원' },
          ],
        },
        {
          content: 'Legacy 시스템 완벽 연동 이전',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기존 비표준 AD/LDAP 연동을 고객과 소통 제약으로 Legacy SSO 체계를 위한 브릿지 연동 구조' },
            { content: '고객 AD/LDAP(IDP) ↔ Legacy SpringSecurity SSO(SP/IDP) ↔ 신규 Keycloak(SP) 이중 연동 체계 구축' },
          ],
        },
        {
          content: '대규모 자동화 마이그레이션 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'W/L별 고객 대응 시간에 맞춘 구조화된 마이그레이션 시스템 개발' },
            { content: 'W/L 특정 설정 가능한 마이그레이션 코드 구조 설계' },
            { content: 'Keycloak Admin API 기반 Realm → Client → Authentication Flow 순차 자동화를 통한 30개 W/L 8천명 사용자 데이터 100% 이관' },
          ],
        },
      ],
    },
    {
      title: 'Resource Scheduler',
      startedAt: '2021-12',
      endedAt: '2022-02',
      where: 'OpsNow Platform / Full-Stack Engineer',
      descriptions: [
        { content: '태깅 기반 EC2 자동 시작·종료 스케줄링 기능 개발' },
        { content: 'Completable Future 기반의 비동기 인스턴스 Start/Stop 개발' },
        { content: 'Vue.js 기반 스케줄 등록 UI 개발' },
        { content: 'KB, Hanwha 고객사 개발 인프라 비용 45% 절감' },
      ],
    },
    {
      title: 'API 사용량 대시보드 (내부 Admin)',
      startedAt: '2020-10',
      endedAt: '2020-12',
      where: 'OpsNow Platform / Full-Stack Engineer',
      descriptions: [
        { content: '전사 API 호출량/오류/추이 시각화, 실시간 모니터링 대시보드 개발' },
        { content: 'Vue.js, AmChart4를 사용한 대시보드 및 Java 기반 API 개발' },
        { content: '에러 유형별 로그 집계·분석, 운영 품질 개선' },
      ],
    },
    {
      title: 'OpenAPI 서비스',
      startedAt: '2020-04',
      endedAt: '2020-06',
      where: 'OpsNow Platform / Full-Stack Engineer',
      descriptions: [
        { content: 'Asset/Cost/Portal 등 각 서비스별 20+ OpenAPI 설계·구축' },
        { content: 'AWS Gateway + S3 배포' },
        { content: 'API 인증/권한 표준화 및 Redis 캐시 구조 적용' },
      ],
    },
  ],
};

export default project;
