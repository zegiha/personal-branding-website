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
- **Next.js 15.5.3** (App Router + Turbopack)
- **React 19.1.0**
- **TypeScript**
- **Node.js**

### 주요 라이브러리
- **classnames** - CSS 클래스 조합 유틸리티
- **material-symbols** - 구글 Material Symbols 아이콘
- **swiper** - 터치 슬라이더/캐러셀
- **zod** - TypeScript 스키마 검증
- **katex** - 수학 수식 렌더링
- **@notionhq/client** - Notion API (Admin 앱)

### 개발 도구
- **Biome 2.2.0** - 코드 포맷팅 및 린팅
- **PNPM 10.16.1** - 패키지 매니저 (workspace 기반)

### 아키텍처 패턴
- **Monorepo** - pnpm workspace 활용
- **MFE (Micro Frontend)** - iframe 및 Next.js multi-zone
- **Design System** - design-kit + ui-kit 구조
- **Atomic Design** - Atom/Molecule/Organism/Foundation 구조

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
  - **테마 시스템**: 라이트/다크 모드, 테마 전환
  - **토큰 시스템**:
    - Palette: 색상 팔레트 (default 테마)
    - Typography: 폰트, 크기, 행간 등
    - Layout: width, spacing, grid 등
    - Motion: duration, timing 애니메이션 토큰
  - **헬퍼 함수**:
    - `getThemeFromClient/Server`: 테마 정보 가져오기
    - `getThemeModeFromClient/Server`: 테마 모드 가져오기
    - `changeTheme/changeThemeMode`: 테마/모드 변경
    - `getWidthClass/getWidthStyle`: width 유틸리티
    - `getTextColorForImage`: 이미지 색상 분석
    - `getDesignKitClass`: 디자인킷 클래스 생성

### ui-kit
- **목적**: 재사용 가능한 React 컴포넌트 라이브러리
- **의존성**: design-kit, material-symbols, zod
- **Atomic Design 구조**:
  - **Foundation** (기초 컴포넌트):
    - `Typo`: 텍스트 컴포넌트 (다양한 변형)
    - `Flex`: 플렉스 레이아웃 컴포넌트
    - `Grid`: 그리드 레이아웃 컴포넌트
    - `Icon`: Material Symbols 아이콘 래퍼
  - **Atom** (단일 UI 요소):
    - `Badge`: 배지 컴포넌트
    - `Button`: 기본 버튼
    - `IconButton`: 아이콘 버튼
    - `TextButton`: 텍스트 버튼
    - `LinkButton`: 링크 버튼
    - `IconLinkButton`: 아이콘 링크 버튼
    - `TextLinkButton`: 텍스트 링크 버튼
    - `Chip`: 칩/태그 컴포넌트
    - `Katex`: 수학 수식 렌더링
    - `HeadlineSection`: 섹션 헤드라인
    - `HeadlineSectionContainer`: 헤드라인 컨테이너
  - **Molecule** (조합 컴포넌트):
    - `CarouselNavigation`: 캐러셀 네비게이션
  - **Organism** (복합 컴포넌트):
    - `Carousel`: Swiper 기반 캐러셀

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
- **테마**: 색상 스킴 (현재 `default` 테마만 구현)
- **모드**: 라이트/다크 모드
- **CSS 변수**: 모든 스타일링은 CSS 변수 기반 (`--palette-*`, `--typo-*` 등)
- **쿠키 기반**: 테마/모드 정보는 쿠키에 저장하여 SSR 지원

### 사용법

#### 테마 정보 가져오기
```typescript
// 클라이언트 컴포넌트에서
'use client';
import { getThemeFromClient } from 'design-kit/helper/getThemeFromClient';
const theme = getThemeFromClient();

// 서버 컴포넌트에서
import { getThemeFromServer } from 'design-kit/helper/getThemeFromServer';
const theme = await getThemeFromServer();
```

#### 테마 모드 가져오기
```typescript
// 클라이언트
import { getThemeModeFromClient } from 'design-kit/helper/getThemeModeFromClient';
const mode = getThemeModeFromClient();

// 서버
import { getThemeModeFromServer } from 'design-kit/helper/getThemeModeFromServer';
const mode = await getThemeModeFromServer();
```

#### 테마 변경하기
```typescript
// 클라이언트에서만 사용
import { changeTheme } from 'design-kit/helper/changeTheme';
import { changeThemeMode } from 'design-kit/helper/changeThemeMode';
import { ThemeEnum } from 'design-kit/const/ThemeEnum';
import { ThemeModeEnum } from 'design-kit/const/ThemeModeEnum';

await changeTheme(ThemeEnum.DEFAULT);
await changeThemeMode(ThemeModeEnum.DARK);
```

### API 라우트
- `POST /api/theme`: 테마 변경
- `POST /api/theme/mode`: 테마 모드 변경

## 주요 컴포넌트 사용법

### Foundation 컴포넌트

#### Typo (Typography)
```typescript
import { Typo } from 'ui-kit';

<Typo variant="h1">제목</Typo>
<Typo variant="body" weight="bold">본문</Typo>
```

#### Flex (Flexbox Layout)
```typescript
import { Flex } from 'ui-kit';

<Flex direction="row" gap={16} align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

#### Icon (Material Symbols)
```typescript
import { Icon } from 'ui-kit';

<Icon name="home" size={24} />
<Icon name="settings" filled />
```

### Atom 컴포넌트

#### Button 계열
```typescript
import { Button, IconButton, TextButton } from 'ui-kit/atom';

<Button onClick={handleClick}>클릭</Button>
<IconButton icon="favorite" onClick={handleLike} />
<TextButton>텍스트 버튼</TextButton>
```

#### Badge & Chip
```typescript
import { Badge, Chip } from 'ui-kit/atom';

<Badge count={5} />
<Chip label="React" onRemove={handleRemove} />
```

#### Katex (수식 렌더링)
```typescript
import { Katex } from 'ui-kit/atom';

<Katex math="E = mc^2" block />
<Katex math="\int_0^1 x^2 dx" />
```

### Organism 컴포넌트

#### Carousel
```typescript
import { Carousel } from 'ui-kit/organism';

<Carousel>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</Carousel>
```

## 현재 상태
- ✅ Next.js 15 앱 구조 설정 완료 (Client + Admin)
- ✅ 디자인 시스템 완성:
  - design-kit: 테마, 토큰, 모션 시스템
  - ui-kit: Atomic Design 기반 컴포넌트 라이브러리
- ✅ 테마 시스템 구현 완료 (라이트/다크 모드 + 전환 API)
- ✅ 기본 컴포넌트 구현:
  - Foundation: Typo, Flex, Grid, Icon
  - Atom: Button 계열, Badge, Chip, Katex 등
  - Molecule/Organism: Carousel 시스템
- ✅ Turbopack 빌드 최적화 적용
- ✅ Notion API 연동 준비 (Admin 앱)

## 개발 시 주의사항

1. **Workspace 의존성**: 패키지 간 의존성은 `workspace:*` 형태로 관리
2. **PeerDependencies**: 공통 라이브러리는 루트에서 관리, 각 앱은 peerDependencies 사용
3. **CSS 모듈**: TypeScript에서 CSS 모듈 타입 지원 설정됨 (`css-module.d.ts`)
4. **Atomic Design**: ui-kit은 Foundation > Atom > Molecule > Organism 구조 준수
5. **디자인 토큰**: 직접 CSS 값 대신 design-kit의 CSS 변수 사용
6. **테마 시스템**: 서버/클라이언트 환경에 맞는 헬퍼 함수 사용
7. **아이콘**: material-symbols 라이브러리의 `Icon` 컴포넌트 사용
8. **MFE 준비**: iframe 기반 토이프로젝트 통합을 위한 구조
9. **코드 품질**: Biome으로 일관된 코드 스타일 유지
10. **Turbopack**: dev/build 시 --turbopack 플래그 사용 (성능 최적화)

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
- **패키지 매니저**: pnpm@10.16.1 (packageManager 설정됨)
- **개발 환경**: Linux (WSL2)
- **Node.js**: LTS 버전 권장
- **빌드 도구**: Turbopack (Next.js 내장)