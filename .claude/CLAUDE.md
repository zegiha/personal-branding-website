# Personal Branding Website - 프로젝트 가이드

## 🌐 언어 규칙

**중요: 이 프로젝트에서 작업할 때 반드시 다음 규칙을 따르세요**

- ✅ **모든 답변과 코드 설명은 한국어로 작성**
- ✅ **커밋 메시지는 영어로만 작성**
- ✅ 문서(README, 주석 등)는 한국어/영어 모두 가능

---

## 📋 프로젝트 개요

개인 브랜딩 웹사이트 - Notion을 CMS로 사용하는 블로그 플랫폼

### 주요 기술 스택

- **Frontend**: Next.js 16, React 19, TypeScript
- **Backend**: NestJS, Notion API, AWS S3
- **Styling**: Vanilla Extract (CSS-in-JS)
- **Package Manager**: pnpm workspaces
- **Linter/Formatter**: Biome

---

## 📁 디렉토리 구조

```
personal-branding-website-renew/
├── apps/
│   ├── client/          # Next.js 프론트엔드 (사용자용 블로그 사이트)
│   ├── admin/           # 관리자 페이지
│   ├── backend/         # NestJS API 서버
│   └── playgrounds/     # 실험/테스트용
├── packages/
│   └── notion-article-kit/  # Notion 블록 → React 컴포넌트 변환 라이브러리
└── .claude/             # Claude 설정 및 계획 파일
```

### 각 디렉토리 상세 설명

#### `apps/client/` - 프론트엔드
- 사용자가 보는 블로그 웹사이트
- Notion API에서 가져온 게시글을 렌더링
- Vanilla Extract로 테마 시스템 구현
- React 19 + Next.js 16 + TypeScript 사용

#### `apps/backend/` - API 서버
- NestJS 기반 백엔드 API
- Notion API 연동 및 데이터 변환
- AWS S3를 통한 이미지 업로드 처리
- Swagger 문서 제공

#### `packages/notion-article-kit/` - 공유 라이브러리
- Notion 블록을 TypeScript 타입으로 변환
- React 컴포넌트로 렌더링하는 UI 라이브러리
- client와 backend 모두에서 사용
- Vanilla Extract를 사용한 스타일링

---

## 🔧 개발 가이드

### 명령어

```bash
# 각 앱 실행
pnpm client dev        # 클라이언트 개발 서버
pnpm admin dev         # 관리자 개발 서버
pnpm backend start:dev # 백엔드 개발 서버

# 린트 & 포맷
pnpm client lint       # Biome 린트
pnpm client format     # Biome 포맷
```

### 스타일링 규칙

- **Vanilla Extract 사용**: CSS Modules가 아닌 `.css.ts` 파일 사용
- **테마 시스템**: `apps/client/theme/`에 정의된 semantic 토큰 사용
- **컨벤션**:
  - 색상: `semantic.label.strong`, `semantic.line.normal` 등
  - 간격: `spacing[8]`, `spacing[16]` 등
  - 반경: `radius.medium`, `radius.large` 등

---

## 🎨 Client 컴포넌트 및 테마 가이드

**⚠️ 중요: 이 가이드는 `apps/client/` 작업 시에만 적용됩니다**

**🔄 가이드 변경 감지 시 행동 규칙:**
작업 중 다음과 같은 변경사항을 발견하면 **즉시 모든 작업을 중단**하고, CLAUDE.md 파일을 업데이트한 후 사용자에게 보고하세요:
- 컴포넌트 파일/폴더 위치 변경
- Theme 토큰 구조 변경
- 컴포넌트 props 인터페이스 변경
- 새로운 컴포넌트 추가

### Theme 시스템 (`apps/client/theme/`)

**가져오기:**
```typescript
import { semantic, spacing, radius } from '@/theme'
```

**주요 토큰:**

#### Colors (semantic)
- **텍스트**: `semantic.label.strong`, `semantic.label.normal`, `semantic.label.weak`
- **배경**: `semantic.fill.normal`, `semantic.fill.weak`
- **경계선**: `semantic.line.normal`
- **강조색**: `semantic.accent.red`, `semantic.accent.pink`, `semantic.accent.blue`, `semantic.accent.yellow`, `semantic.accent.green`
- **흑백**: `semantic.black.variable`, `semantic.white.variable`

#### Spacing
`spacing[2]`, `spacing[4]`, `spacing[6]`, `spacing[8]`, `spacing[12]`, `spacing[16]`, `spacing[20]`, `spacing[24]`, `spacing[28]`, `spacing[32]`, `spacing[36]`, `spacing[48]`, `spacing[64]` (단위: px)

#### Border Radius
`radius.small` (6px), `radius.medium` (8px), `radius.large` (16px), `radius.xlarge` (36px), `radius.circular` (9999px)

### 공용 컴포넌트 (`apps/client/components/`)

**가져오기:**
```typescript
import { Icon, Text, Badge, Chip, Section, SectionGroup } from '@/components'
```

#### `<Text />` - 텍스트 컴포넌트
```tsx
<Text
  type="display|headline|label|caption"  // 타이포그래피 카테고리
  size="large|medium|small"               // 크기
  color="normal|strong|weak|red|blue|..." // 색상
  weight="regular|medium|bold"            // 폰트 굵기 (optional)
  as="h1|h2|h3|p|span|..."               // HTML 태그 (optional)
>
  텍스트 내용
</Text>
```

**예시:**
```tsx
<Text type="headline" size="large" color="strong">제목</Text>
<Text type="label" size="medium" color="normal">본문</Text>
```

#### `<Icon />` - 아이콘 컴포넌트
```tsx
<Icon
  name="heart|share|close|menu|search|..." // 아이콘 이름
  size={18}                                 // 크기 (px, optional, 기본값: 24)
  fill={true}                              // 채우기 여부 (optional)
  thick={false}                            // 두꺼운 선 (optional)
  color="normal|strong|red|blue|..."       // 색상 (optional)
/>
```

**사용 가능한 아이콘:**
article, calendar, chevronDown, chevronLeft, chevronRight, chevronUp, close, copy, edit, email, heart, info, invisible, link, menu, multiPerson, newWindow, pause, play, search, series, share, star, time, visible

**예시:**
```tsx
<Icon name="heart" size={18} color="red" fill={true} />
<Icon name="menu" size={24} color="normal" />
```

#### `<Badge />` - 배지 컴포넌트
```tsx
<Badge
  color="gray|red|pink|blue|yellow|green"
  translucent={true}  // 반투명 스타일 (optional)
>
  배지 텍스트
</Badge>
```

#### `<Chip />` - 칩 컴포넌트
```tsx
<Chip>칩 내용</Chip>
```

#### `<Section />` - 섹션 래퍼
```tsx
<Section className={styles.section}>
  {/* 콘텐츠 */}
</Section>
```

#### `<SectionGroup />` - 섹션 그룹
```tsx
<SectionGroup>
  <Section>...</Section>
  <Section>...</Section>
</SectionGroup>
```

### Vanilla Extract 스타일링 패턴

**스타일 파일 작성 (`styles.css.ts`):**
```typescript
import { style } from '@vanilla-extract/css';
import { semantic, spacing, radius } from '@/theme';

export const container = style({
  padding: spacing[16],
  borderRadius: radius.medium,
  border: `1px solid ${semantic.line.normal}`,
  backgroundColor: semantic.fill.normal,
});

export const title = style({
  color: semantic.label.strong,
  marginBottom: spacing[8],
});
```

**컴포넌트에서 사용:**
```tsx
import { container, title } from './styles.css';

function MyComponent() {
  return (
    <div className={container}>
      <h2 className={title}>제목</h2>
    </div>
  );
}
```

---

## 💡 참고사항

- 이 프로젝트는 **모노레포 구조**로 여러 앱과 패키지가 workspace로 관리됨
- **notion-article-kit**은 Notion 블록을 React 컴포넌트로 변환하는 핵심 라이브러리
- 이미지는 AWS S3에 업로드되며, Notion의 이미지 URL은 만료될 수 있음