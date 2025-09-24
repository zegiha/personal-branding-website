# Claude Code Project Context

## 프로젝트 개요
- **프로젝트명**: Zegiha (zegiha 개인 브랜딩 웹사이트)
- **설명**: 개인 작업물을 담고 사람들에게 공유하는 포트폴리오/브랜딩 웹사이트
- **아키텍처**: Next.js 기반 Monorepo + MFE (Micro Frontend Architecture)

## 프로젝트 구조

### 메인 구조
```
personal-branding-website/
├── apps/                    # 애플리케이션들
│   ├── client/             # 메인 클라이언트 앱 (Next.js)
│   ├── admin/              # 어드민 관리 앱 (Next.js)
│   └── playgrounds/        # 토이프로젝트들 (iframe으로 통합)
├── packages/               # 공유 패키지들
│   ├── design-kit/         # 디자인 시스템 (CSS 변수, 테마)
│   └── ui-kit/             # React 컴포넌트 라이브러리
├── 서비스 설명문.md         # 상세 기획서 및 IA 설계
└── 서비스 개발 설명문.md    # 기술 스택 및 개발 가이드
```

### 주요 기능 영역
1. **서브 프로젝트 허브** - 각 프로젝트 소개, 설명, 리뷰
2. **블로그 및 시리즈** - 회고, 노트, 운영로그 등
3. **놀이터** - 실험적 토이프로젝트들 (Three.js 등)
4. **이력서 및 포트폴리오**

## 기술 스택

### 프레임워크 & 런타임
- **Next.js 15.5.3** (App Router)
- **React 19.1.0**
- **TypeScript**
- **Node.js**

### 개발 도구
- **Biome** - 코드 포맷팅 및 린팅
- **PNPM** - 패키지 매니저 (workspace 기반)

### 아키텍처 패턴
- **Monorepo** - pnpm workspace 활용
- **MFE (Micro Frontend)** - iframe 및 Next.js multi-zone
- **Design System** - design-kit + ui-kit 구조

## 개발 명령어

### 전역 명령어 (루트에서)
```bash
# 클라이언트 앱 관련
pnpm client dev        # 개발 서버 시작
pnpm client build      # 빌드
pnpm client start      # 프로덕션 시작

# 어드민 앱 관련
pnpm admin dev         # 개발 서버 시작
pnpm admin build       # 빌드
pnpm admin start       # 프로덕션 시작

# 패키지 관련
pnpm design-kit [cmd]  # 디자인킷 명령어
pnpm ui-kit [cmd]      # UI킷 명령어
```

### 코드 품질
```bash
# 포맷팅 및 린팅 (Biome 사용)
npx @biomejs/biome format --write .
npx @biomejs/biome lint --apply .
npx @biomejs/biome check --apply .
```

## 패키지 구조

### design-kit
- **목적**: 디자인 시스템의 토큰 및 CSS 변수 관리
- **주요 기능**:
  - 테마 시스템 (라이트/다크 모드)
  - 색상 팔레트, 타이포그래피, 레이아웃 토큰
  - 서버/클라이언트 테마 헬퍼 함수

### ui-kit
- **목적**: 재사용 가능한 React 컴포넌트 라이브러리
- **의존성**: design-kit 사용
- **주요 컴포넌트**:
  - Typography (Typo) - 텍스트 컴포넌트
  - Flex - 레이아웃 컴포넌트
  - 기타 아토믹 컴포넌트들

## 주요 기능 및 라우팅

### 클라이언트 앱 (apps/client)
```
/ (홈)
├── /projects         # 서브 프로젝트 목록
├── /playground       # 토이 프로젝트들
├── /blog            # 블로그 글 목록
├── /series          # 시리즈 목록
├── /portfolio       # 포트폴리오
├── /search          # 통합 검색
└── /contact         # 문의/건의
```

### API 라우트
```
/api/theme           # 테마 관련 API
/api/theme/mode      # 테마 모드 전환 API
```

## 코드 컨벤션

### 포맷팅 (Biome)
- 들여쓰기: 스페이스 2개
- 줄 너비: 100자
- 세미콜론: 항상 사용
- 따옴표: 더블 쿼터
- JSX: 더블 쿼터

### 파일명 컨벤션
- 컴포넌트: PascalCase
- 유틸리티/헬퍼: camelCase
- 타입 정의: Type/Interface 접두어

## 테마 시스템

### 구조
- **테마**: 색상 스킴 (기본값만 현재 구현)
- **모드**: 라이트/다크 모드
- **CSS 변수**: 모든 스타일링은 CSS 변수 기반

### 사용법
```typescript
// 클라이언트에서 테마 가져오기
import { getThemeFromClient } from 'design-kit/helper/getThemeFromClient';

// 서버에서 테마 가져오기
import { getThemeFromServer } from 'design-kit/helper/getThemeFromServer';
```

## 현재 상태
- 기본 Next.js 앱 구조 설정 완료
- 디자인 시스템 기초 구조 완성
- 테마 시스템 (라이트/다크 모드) 구현 완료
- Typography, Flex 컴포넌트 개발 완료

## 개발 시 주의사항

1. **Workspace 의존성**: 패키지 간 의존성은 `workspace:*` 형태로 관리
2. **CSS 모듈**: TypeScript에서 CSS 모듈 타입 지원 설정됨
3. **MFE 준비**: iframe 기반 토이프로젝트 통합을 위한 구조
4. **코드 품질**: Biome으로 일관된 코드 스타일 유지

## 기획 문서

### 서비스 설명문 (서비스 설명문.md)
상세한 프로젝트 기획서로 다음 내용을 포함:
- **프로젝트 개요**: Zegiha 브랜딩 웹사이트 목적 및 의도
- **타깃 사용자**: 다른 서비스 유입 사용자, 채용 담당자, 블로그 이용자
- **주요 기능**: 서브프로젝트 허브, 블로그/시리즈, 놀이터, 이력서/포트폴리오
- **상세 IA (Information Architecture)**: 글로벌 네비게이션, 각 페이지별 구성 요소

### 서비스 개발 설명문 (서비스 개발 설명문.md)
기술적 구현 가이드:
- **기술 스택**: Next.js Full-stack 개발, Biome 코드 포맷팅
- **MFE 아키텍처**: 모노레포 + iframe + Next.js multi-zone 활용 이유
- **확장성**: 토이프로젝트 통합과 어드민 페이지 분리 목적

> 💡 **팁**: 기획 의도나 요구사항이 명확하지 않을 때는 위 문서들을 참고하여 프로젝트 방향성을 파악하세요.

## 배포 정보
- 패키지 매니저: npm@11.6.0 (packageManager 설정됨)
- 개발 환경: macOS (Darwin 25.0.0)