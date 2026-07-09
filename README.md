# DSL 홈페이지 — 배포 & 콘텐츠 관리 가이드

이 사이트는 **서버가 필요 없는 정적(static) 사이트**입니다.
프로젝트 폴더를 그대로 아무 정적 호스팅에 올리면 작동하고, 내용 수정은 **`content.js` 파일 하나**로 끝납니다.

---

## 1. 배포하는 법

### 파일 구조 이해

```
index.html            ← 배포용 진입점 (자동으로 사이트로 이동)
DSL App.dc.html       ← 실제 사이트 (UI 코드)
DSL Website.dc.html   ← 편집용 캔버스 (데스크탑/모바일 미리보기) — 배포에 불필요
content.js            ← ★ 모든 콘텐츠 데이터 (평소 수정하는 유일한 파일)
support.js            ← 사이트 구동 런타임 (수정 금지)
image-slot.js         ← 이미지 슬롯 컴포넌트 (수정 금지)
assets/               ← ★ 로고 · 파트너 로고 · 프로젝트 썸네일/PDF · 인물 사진
_ds/                  ← 디자인 시스템 (수정 금지, 배포에 반드시 포함)
```

### 방법 A — GitHub Pages (추천: 무료, 학회 GitHub 계정 활용)

1. 전달받은 프로젝트 zip의 압축을 풉니다.
2. GitHub에 새 저장소를 만듭니다. 예: `DataScience-Lab-Yonsei/homepage`
3. 압축을 풀고 폴더 내용 전체를 저장소에 push 합니다.
   ```bash
   git init
   git add .
   git commit -m "DSL homepage"
   git remote add origin https://github.com/DataScience-Lab-Yonsei/homepage.git
   git push -u origin main
   ```
4. 저장소 **Settings → Pages → Source: Deploy from a branch → main / (root)** 선택.
5. 1~2분 후 `https://datascience-lab-yonsei.github.io/homepage/` 에서 접속 가능.
6. **이후 업데이트**: 파일을 고치고 `git add . && git commit && git push` 만 하면 자동 반영됩니다.

> 커스텀 도메인(예: dsl-yonsei.com)을 사려면 Settings → Pages → Custom domain에 등록하면 됩니다.

### 방법 B — Netlify Drop (가장 간단, 계정만 있으면 1분)

1. 프로젝트 zip을 다운로드해 압축을 풉니다.
2. https://app.netlify.com/drop 접속 → 폴더를 통째로 드래그.
3. 즉시 `https://아무이름.netlify.app` 주소가 생성됩니다. (사이트 설정에서 주소 변경 가능)
4. 업데이트할 때는 같은 사이트의 Deploys 탭에 폴더를 다시 드래그.

### 방법 C — Cloudflare Pages (무료, 빠른 글로벌 CDN)

**git 없이 드래그 업로드:**
1. https://dash.cloudflare.com 가입 → 좌측 **Workers & Pages → Create → Pages → Upload assets**.
2. 프로젝트 이름 입력(예: `dsl-homepage`) → 압축 푼 폴더를 통째로 드래그 → Deploy.
3. `https://dsl-homepage.pages.dev` 주소가 생성됩니다.
4. 업데이트: 같은 프로젝트에서 **Create new deployment** → 폴더 다시 드래그.

**GitHub 연동(추천):** Pages 생성 시 **Connect to Git**을 선택해 저장소를 연결하면
push할 때마다 자동 배포됩니다. 빌드 설정은 전부 비워두고(Framework: None, Build command: 없음, Output: `/`) 저장만 하면 됩니다.

커스텀 도메인: 프로젝트 → **Custom domains**에 등록. 도메인 DNS를 Cloudflare로 옮기면 HTTPS까지 자동 처리됩니다.

### 방법 D — AWS (Amazon)

**간단한 쪽 — AWS Amplify Hosting:**
1. AWS 콘솔 → **Amplify → Create new app → Deploy without Git** 선택.
2. 압축 푼 폴더를 zip으로 다시 묶어 업로드 → 즉시 `https://....amplifyapp.com` 주소 생성.
3. 업데이트: 새 zip을 다시 업로드. (Git 연동도 가능 — push 시 자동 배포)

**전통적인 쪽 — S3 정적 호스팅:**
1. **S3** → 버킷 생성 (예: `dsl-homepage`) → "Block all public access" 해제.
2. 버킷 → **Properties → Static website hosting** 활성화, Index document: `index.html`.
3. **Permissions → Bucket policy**에 공개 읽기 정책 추가:
   ```json
   { "Version": "2012-10-17", "Statement": [{ "Effect": "Allow", "Principal": "*",
     "Action": "s3:GetObject", "Resource": "arn:aws:s3:::dsl-homepage/*" }] }
   ```
4. 폴더 내용 전체를 버킷에 업로드 (콘솔에서 드래그 가능. 폴더 구조 유지 — `_ds/`, `assets/` 포함).
5. Properties 하단의 **Bucket website endpoint** 주소로 접속.
6. HTTPS·커스텀 도메인이 필요하면 그 앞에 **CloudFront** 배포를 만들어 S3를 origin으로 연결합니다 (+ Route 53으로 도메인 연결).

> 참고: S3+CloudFront는 설정 항목이 많아 학회 홈페이지 용도로는 **Cloudflare Pages나 Amplify가 훨씬 간단**하고, 트래픽 수준을 감안하면 사실상 무료입니다.

### 방법 E — 하나의 HTML 파일로 공유

정식 배포 전에 임시로 공유만 하고 싶으면, 채팅에서 **"단일 HTML 파일로 만들어줘"** 라고 요청하세요.
모든 이미지·폰트·스크립트가 내장된 파일 하나가 나오며, 카톡/메일로 보내면 받는 사람이 바로 열 수 있습니다.

### 배포 시 주의사항

- `_ds/` 폴더를 빼먹으면 디자인이 깨집니다. **폴더 전체를 그대로** 올리세요.
- 편집 화면에서 이미지를 드래그해 넣은 것(썸네일·인물 사진)은 **편집 환경에만 저장**됩니다.
  배포본에 확실히 나오게 하려면 아래 3·4번처럼 파일을 `assets/`에 넣고 `content.js`에 경로를 적어야 합니다.
- 지원하기 버튼의 구글폼 링크 등 외부 링크는 배포 전에 `content.js`에서 채워 넣으세요.

---

## 2. 기본 내용 수정 — `content.js` 한 파일

사이트의 **모든 문구·숫자·명단**은 `content.js` 안에 있습니다. 메모장/VS Code로 열어 텍스트만 고치면 됩니다.

| 수정하고 싶은 것 | `content.js`에서 찾을 위치 |
|---|---|
| 메뉴 이름, 버튼 문구 | `ui:` |
| 홈 화면 문구, 통계 숫자(기수·인원·프로젝트 수) | `home:` → `heroTitle`, `stats` |
| 파트너 기업 로고 | `home:` → `partnerLogos` (+ `assets/partners/`에 파일) |
| 학회 소개, 미션, Why DSL | `about:` |
| 세션 커리큘럼, 스터디 목록 | `activities:` |
| 프로젝트 목록 | `projects:` (아래 3번) |
| 지도교수·운영진·학회원 구성 | `members:` (아래 5번) |
| 모집 기수·일정·자격·이메일 | `recruit:` |
| 연락처, 인스타/깃허브 링크 | `contact:` |

**규칙 두 가지만 기억하세요:**
1. 모든 텍스트는 `{ ko: '한국어', en: 'English' }` 쌍 — 둘 다 채워야 KO/EN 토글이 제대로 작동합니다.
2. 따옴표 `'`, 쉼표 `,`, 중괄호 `{}`를 실수로 지우지 마세요. 저장 후 사이트가 하얗게 나오면 대부분 이 문제입니다 (브라우저에서 F12 → Console에 오류 위치가 표시됩니다).

예) 모집 기수를 바꾸려면:
```js
recruit: {
  title: { ko: '17기 신입 학회원 모집', en: 'Recruiting the 17th Cohort' },  // 16 → 17
```

---

## 3. 프로젝트 추가

### ① 파일 넣기 — `assets/projects/`
- 발표자료 PDF: `assets/projects/프로젝트아이디.pdf`
- 썸네일 이미지: `assets/projects/thumbs/프로젝트아이디.webp` (16:9 권장, png/jpg/webp 가능)
  - PDF 첫 장을 캡처(스크린샷)해 저장하면 좋은 썸네일이 됩니다.
  - 기존 프로젝트 썸네일도 모두 `assets/projects/thumbs/` 폴더에 있습니다.

### ② 데이터 등록 — `content.js`의 `projects: [` 배열 **맨 앞에** 붙여넣기
(맨 앞 = 목록 최상단 + 홈 '대표 프로젝트'에 노출)

```js
{ id: 'my-project',            // 고유 영문 아이디 (중복 금지)
  semester: '2026-2',          // 연도-학기 → 연도 필터 자동 생성
  type: 'modeling',            // 'eda' | 'modeling' | 'industry'(기업연계)
  field: 'cv',                 // 'nlp' | 'cv' | 'gen' | 'rl' | 'mm' | 'rec' | 'ts' | 'ml'
  awarded: false,              // true면 수상 배지 표시
  thumb: 'assets/projects/thumbs/my-project.webp', // 없으면 null
  file: 'assets/projects/my-project.pdf',          // 없으면 null
  title:   { ko: '제목', en: 'Title' },
  summary: { ko: '카드에 보이는 한 줄 요약', en: 'One-line summary' },
  overview:{ ko: '상세 페이지 개요 문단', en: 'Overview paragraph' },
  tech: ['Python', 'PyTorch'],
  result:  { ko: '결과 요약', en: 'Outcome' },
  team: [
    { name: '홍길동', cohort: 15 },   // cohort = 기수 (숫자만, 모르면 null)
    { name: '김철수', cohort: 16 }
  ] },
```

- 분류(종류/분야) 항목 자체를 추가하려면 `projectTypes` / `projectFields` 배열에 한 줄 추가 — 필터 버튼이 자동 생성됩니다.
- `thumb: null`로 두면 해당 카드에 "썸네일을 끌어다 놓으세요" 슬롯이 뜹니다 (편집 환경 전용 — 배포본에는 반드시 경로 지정).

---

## 4. 썸네일 · 인물 사진 업로드

| 사진 종류 | 파일 넣는 곳 | 경로 적는 곳 (`content.js`) |
|---|---|---|
| 프로젝트 썸네일 | `assets/projects/thumbs/` | 해당 프로젝트의 `thumb:` |
| 지도교수 사진 | `assets/people/` (폴더 새로 만들기) | `members.advisor.photo:` |
| 운영진 사진 | `assets/people/` | `members.leads[...]` 각 항목의 `photo:` |
| 파트너 기업 로고 | `assets/partners/` | `home.partnerLogos` 배열 |

예) 지도교수 사진:
```js
advisor: {
  ...
  photo: 'assets/people/prof-park.png'   // null → 경로로 교체
}
```

- 인물 사진은 **정사각형에 가깝게 크롭**하는 것이 좋습니다 (원형으로 표시됨).
- `photo: null`이면 사이트에 빈 슬롯이 표시되고, 편집 환경에서는 드래그로 채울 수 있습니다.
  **배포본에는 반드시 파일 + 경로 방식**을 쓰세요.

---

## 5. 학회원 인원 명부 관리 — `content.js`의 `members:`

현재 구성원 페이지에는 **지도교수 + 운영진(leads) + 학회원 구성 통계**가 표시됩니다.

### 운영진 추가/수정
현재 `leads` 배열은 **비어 있습니다** (실제 명단 확정 전). 아래 형식의 블록을 `leads: [` 와 `]` 사이에 인원 수만큼 넣으면 카드가 자동 생성됩니다 (content.js 안에 주석으로도 적어 두었습니다):
```js
{ name: { ko: '홍길동', en: 'Gildong Hong' },
  role: { ko: '학술부장', en: 'Academic Lead' },
  major: { ko: '응용통계학과 22', en: 'Applied Statistics \u201922' },
  photo: null },   // 또는 'assets/people/hong.png'
```

### 학회원 구성 통계 수정
```js
composition: [
  { value: '38', label: { ko: '15기 활동 인원', en: 'Active members' } },
  ...
]
```

> **기수별 전체 학회원 명단(예: 15기 38명 이름 전체) 섹션은 아직 사이트에 없습니다.**
> 필요하면 채팅으로 "기수별 학회원 명부 섹션 추가해줘"라고 요청하세요 —
> `content.js`에 기수별 이름 배열만 넣으면 표시되는 형태로 만들어 드립니다.

---

## 6. 자주 하는 실수 체크리스트

- [ ] 텍스트 수정 후 `{ ko, en }` 둘 다 고쳤는가?
- [ ] 새 프로젝트의 `id`가 기존과 중복되지 않는가?
- [ ] 이미지/PDF 파일명과 `content.js`의 경로가 정확히 일치하는가? (대소문자 구분)
- [ ] 배포 폴더에 `_ds/`, `support.js`, `image-slot.js`가 포함되어 있는가?
- [ ] 사이트가 하얗게 나오면 → F12 콘솔에서 `content.js` 문법 오류(따옴표·쉼표) 확인
