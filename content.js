/* =====================================================================
   DSL 홈페이지 콘텐츠 데이터 — 이 파일만 수정하면 사이트 내용이 바뀝니다.
   모든 텍스트는 { ko, en } 쌍입니다.

   ★ 프로젝트 추가 방법 (아래 projects 배열 맨 앞에 한 블록 복사-붙여넣기):
     id:       고유 영문 아이디 (파일명·썸네일 연결에 사용, 중복 금지)
     semester: '2026-1' 형식 (연도-학기)
     type:     'eda' | 'modeling' | 'industry'   ← projectTypes 참고
     field:    'nlp' | 'cv' | 'mm' | 'rec' | 'ts' | 'ml'  ← projectFields 참고
     thumb:    'assets/projects/파일명.png' — 썸네일 이미지 경로.
               null로 두면 사이트에서 직접 드래그&드롭으로 채울 수 있는
               빈 슬롯이 표시됩니다.
     file:     'assets/projects/파일명.pdf' — 발표자료 PDF 경로 (없으면 null)
     team:     [{ name: '이름', cohort: 기수숫자 }, ...]
   이미지·PDF 파일은 assets/projects/ 폴더에 넣으세요.
   ===================================================================== */
window.DSL_CONTENT = {

  /* ---------- 공통 UI 라벨 ---------- */
  ui: {
    nav: {
      home:     { ko: '홈',        en: 'Home' },
      about:    { ko: '학회 소개',  en: 'About' },
      activities:{ ko: '활동',      en: 'Activities' },
      projects: { ko: '프로젝트',   en: 'Projects' },
      members:  { ko: '활동 구성원', en: 'Members' },
      alumni:   { ko: '알럼나이',   en: 'Alumni' },
      recruit:  { ko: '모집 안내',  en: 'Recruit' },
      contact:  { ko: '기업 협력',  en: 'Contact' }
    },
    apply:     { ko: '지원하기', en: 'Apply' },
    applyNote: { ko: '구글폼 링크 연결 예정', en: 'Google Form link placeholder' },
    viewAll:   { ko: '전체 보기', en: 'View all' },
    back:      { ko: '목록으로', en: 'Back to list' },
    all:       { ko: '전체', en: 'All' },
    year:      { ko: '연도', en: 'Semester' },
    type:      { ko: '종류', en: 'Type' },
    field:     { ko: '분야', en: 'Field' },
    team:      { ko: '팀원', en: 'Team' },
    tech:      { ko: '사용 기술', en: 'Tech stack' },
    result:    { ko: '결과', en: 'Outcome' },
    overview:  { ko: '개요', en: 'Overview' },
    awarded:   { ko: '수상', en: 'Awarded' },
    materials: { ko: '발표 자료 (PDF)', en: 'Slides (PDF)' },
    thumbPlaceholder: { ko: '썸네일 이미지를 끌어다 놓으세요', en: 'Drop a thumbnail image' },
    footer: {
      desc: { ko: '연세대학교 데이터 사이언스 학회', en: 'Yonsei University Data Science Society' },
      copyright: { ko: '© 2026 Data Science Lab. All rights reserved.', en: '© 2026 Data Science Lab. All rights reserved.' }
    }
  },

  /* ---------- 홈 ---------- */
  home: {
    heroEyebrow: { ko: '연세대학교 데이터 사이언스 학회', en: 'YONSEI UNIVERSITY DATA SCIENCE SOCIETY' },
    heroTitle:   { ko: '데이터로 문제를 정의하고,\n모델로 답을 증명합니다', en: 'We frame problems with data,\nand prove answers with models' },
    heroSub:     { ko: 'Data Science Lab은 머신러닝·딥러닝·데이터 분석을 함께 공부하고, 실제 데이터로 프로젝트를 완성하는 연세대학교 중앙 데이터 사이언스 학회입니다.', en: 'Data Science Lab is Yonsei University\u2019s data science society — studying ML, deep learning and analytics together, and shipping projects on real-world data.' },
    ctaProjects: { ko: '프로젝트 보기', en: 'See projects' },
    stats: [
      { value: '2019', label: { ko: '창립', en: 'Founded' } },
      { value: '15기', valueEn: '15th', label: { ko: '활동 기수', en: 'Cohort' } },
      { value: '200+', label: { ko: '누적 학회원', en: 'Alumni & members' } },
      { value: '85+',  label: { ko: '완료 프로젝트', en: 'Projects shipped' } },
      { value: '20+',  label: { ko: '대외 수상', en: 'Awards' } }
    ],
    partnersLabel: { ko: '기업 연계 프로젝트 파트너', en: 'INDUSTRY PROJECT PARTNERS' },
    /* 로고 파일: assets/partners/ 폴더에 추가·교체하세요 */
    partnerLogos: [
      'assets/partners/logo-1.png',
      'assets/partners/logo-2.png',
      'assets/partners/logo-3.png',
      'assets/partners/logo-4.png',
      'assets/partners/logo-5.png',
      'assets/partners/logo-6.png',
      'assets/partners/logo-7.png',
      'assets/partners/logo-8.png',
      'assets/partners/logo-9.png'
    ],
    pillarsTitle: { ko: '학회 활동', en: 'What we do' },
    pillars: [
      { title: { ko: '정규 세션', en: 'Weekly sessions' },
        desc: { ko: '머신러닝 기초부터 딥러닝 심화, 최신 논문 리뷰까지 매주 화요일 학회원이 직접 이끄는 커리큘럼을 운영합니다.', en: 'Member-led weekly curriculum — from ML fundamentals to deep learning and paper reviews, every Tuesday.' } },
      { title: { ko: '프로젝트', en: 'Projects' },
        desc: { ko: 'EDA·모델링·기업연계 세 가지 필수 프로젝트를 통해 문제 정의부터 모델링, 발표까지 완주합니다.', en: 'Three required projects — EDA, modeling, and industry collaboration — from problem framing to final presentation.' } },
      { title: { ko: '학술활동', en: 'Academic activities' },
        desc: { ko: '딥러닝 스터디, 심화 스터디, 그리고 공모전 참가, 연말 알럼나이 개더링 나잇까지, 다양한 활동을 진행합니다.', en: 'Deep learning study groups, advanced studies, competitions, and our year-end alumni gathering night.' } }
    ],
    featuredTitle: { ko: '대표 프로젝트', en: 'Featured projects' },
    partnerCta: {
      title: { ko: '기업과 함께 성장합니다', en: 'We grow with industry partners' },
      desc:  { ko: '산학 프로젝트, 데이터 제공, 특강·멘토링, 채용 연계까지 — DSL과 협력할 방법을 찾아보세요.', en: 'Industry projects, data partnerships, guest lectures, and recruiting — find how to work with DSL.' },
      button:{ ko: '협력 문의하기', en: 'Get in touch' }
    }
  },

  /* ---------- 학회 소개 ---------- */
  about: {
    title: { ko: '학회 소개', en: 'About DSL' },
    mission: { ko: '“열정적인 사람들이 모여, 경쟁력 있는 Data Scientist가 되고자 함께 공부하는 배움의 플랫폼”', en: '\u201cA learning platform where passionate people study together to become competitive data scientists\u201d' },
    missionDesc: { ko: 'DSL은 2019년 1월, 통계와 데이터 사이언스를 공부하는 학생들이 모여 설립한 학회입니다. 연세대학교 응용통계학과 및 일반대학원 통계데이터사이언스학과 박태영 교수님의 지도 아래, 데이터로부터 가치를 창출하고 의사 결정을 내리는 전반적인 과정에 대해 고민할 수 있는 다양한 활동을 진행하고 있습니다.', en: 'Founded in January 2019 by students of statistics and data science, DSL operates under the guidance of Professor Taeyoung Park (Applied Statistics / Graduate School of Statistics & Data Science). We explore the full process of creating value and making decisions from data.' },
    values: [
      { title: { ko: 'Platform', en: 'Platform' },         desc: { ko: '“DSL은 학회원들의 성장을 돕는 배움의 플랫폼입니다.” — mission', en: '\u201cDSL is a learning platform that helps members grow.\u201d — mission' } },
      { title: { ko: 'Competitiveness', en: 'Competitiveness' }, desc: { ko: '“DSL은 경쟁력 있는 Data Scientist가 되는 것을 목표로 합니다.” — vision', en: '\u201cDSL aims to develop competitive data scientists.\u201d — vision' } },
      { title: { ko: 'Passion', en: 'Passion' },           desc: { ko: '“DSL에서 열정적인 사람들과 함께하세요.” — value', en: '\u201cJoin passionate people at DSL.\u201d — value' } }
    ],
    historyTitle: { ko: 'Why DSL?', en: 'Why DSL?' },
    history: [
      { year: '개편', text: { ko: '언제나 새롭고 유용한 기술을 받아들일 수 있도록 매학기 커리큘럼을 개편합니다.', en: 'The curriculum is revised every semester to embrace new, useful technologies.' } },
      { year: '기본기', text: { ko: '변하지 않는 원리와 이론을 갖출 수 있도록 수학·통계학·프로그래밍의 기본기를 탄탄히 다집니다.', en: 'We build solid fundamentals in math, statistics and programming — the principles that don\u2019t change.' } },
      { year: '실전', text: { ko: '모델링·산학협력 프로젝트로 현업 데이터와 최신 모델을 다루며 실전 역량과 협업·교류를 키웁니다.', en: 'Modeling and industry projects build real-world skills with production data and state-of-the-art models.' } },
      { year: '첫걸음', text: { ko: 'DSL은 데이터 사이언티스트가 되기 위한 최고의 첫걸음이라 자부합니다.', en: 'We believe DSL is the best first step toward becoming a data scientist.' } }
    ]
  },

  /* ---------- 활동 / 커리큘럼 ---------- */
  activities: {
    title: { ko: '활동', en: 'Activities' },
    intro: { ko: 'Data Science Lab에서는 정규 세션, 프로젝트, 스터디·세미나 등 다양한 활동이 진행됩니다.', en: 'DSL runs regular sessions, projects, and studies & seminars.' },
    tracks: [
      { name: { ko: '정규 세션', en: 'Regular Sessions' },
        badge: { ko: 'Part 1–3', en: 'Part 1–3' },
        desc: { ko: 'Machine Learning의 기초부터 최신 AI 주제까지 폭넓게 다루며, 이론 학습과 실습을 병행해 배운 내용을 실제 문제에 적용합니다.', en: 'From ML fundamentals to the latest AI topics — theory and hands-on practice applied to real problems.' },
        items: [
          { ko: 'Part 1: Machine Learning — Math for ML · Supervised · Unsupervised', en: 'Part 1: Machine Learning — Math for ML · Supervised · Unsupervised' },
          { ko: 'Part 2: Deep Learning — Intro to DL · CNN · Transformer · LLM Basic', en: 'Part 2: Deep Learning — Intro to DL · CNN · Transformer · LLM Basic' },
          { ko: 'Part 3: Advanced Topics — GM + AE · GAN & Diffusion · LLM Advanced · AI Agent', en: 'Part 3: Advanced Topics — GM + AE · GAN & Diffusion · LLM Advanced · AI Agent' },
          { ko: '이론 학습 + 실습 병행', en: 'Theory + hands-on practice' }
        ] },
      { name: { ko: '프로젝트', en: 'Projects' },
        badge: { ko: '3종', en: '3 types' },
        desc: { ko: 'EDA·모델링·기업연계 프로젝트를 통해 문제 정의부터 인사이트 도출까지 Data Science의 모든 과정을 경험합니다.', en: 'EDA, modeling, and industry projects — the full data science process from framing to insight.' },
        items: [
          { ko: 'EDA 프로젝트 — 전처리·시각화·통계 분석으로 인사이트 도출', en: 'EDA — preprocessing, visualization & statistical analysis for insights' },
          { ko: '모델링 프로젝트 — 주제 발굴부터 모델 구현까지 전 과정 수행', en: 'Modeling — end-to-end, from topic discovery to model implementation' },
          { ko: '기업연계 프로젝트 — 기업과 함께 실무 문제 해결', en: 'Industry — solving real business problems with partner companies' }
        ] },
      { name: { ko: '스터디 & 세미나', en: 'Studies & Seminars' },
        badge: { ko: '연중', en: 'Year-round' },
        desc: { ko: '활동 기수와 이전 기수가 함께 세부 분야를 심도 있게 공부할 수 있도록 스터디와 세미나, 알럼나이 강연을 진행합니다.', en: 'Current and past cohorts study specialized topics in depth — studies, seminars, and alumni talks.' },
        items: [
          { ko: '딥러닝 기초 스터디 — 세션 복습 · 핵심 논문 리뷰 + 코드 구현', en: 'DL basics study — session review, paper reviews & code' },
          { ko: '심화 스터디 — CV · NLP · RecSys · RL · 시계열 · GNN · RAG 등', en: 'Advanced study — CV, NLP, RecSys, RL, time series, GNN, RAG' },
          { ko: 'DSL Tutorial — GitHub · 크롤링 등 프로젝트 필수 툴 실습', en: 'DSL Tutorial — hands-on project tools (GitHub, crawling)' },
          { ko: 'DSL Preview — ML·DL·생성형 AI 개념 브릿지 세미나', en: 'DSL Preview — bridge seminar on ML/DL/GenAI concepts' }
        ] }
    ],
    rhythmTitle: { ko: '함께하는 활동', en: 'More at DSL' },
    rhythm: [
      { period: { ko: '세션', en: 'Sessions' }, text: { ko: '정규 세션 Part 1–3 (ML → DL → Advanced)', en: 'Regular sessions Part 1–3 (ML → DL → Advanced)' } },
      { period: { ko: '프로젝트', en: 'Projects' }, text: { ko: 'EDA · 모델링 · 기업연계 프로젝트', en: 'EDA, modeling & industry projects' } },
      { period: { ko: '스터디', en: 'Studies' }, text: { ko: '딥러닝 기초 · 심화 스터디', en: 'DL basics & advanced studies' } },
      { period: { ko: '세미나', en: 'Seminars' }, text: { ko: 'DSL Tutorial · Preview · 알럼나이 강연', en: 'DSL Tutorial, Preview & alumni talks' } }
    ]
  },

  /* ---------- 프로젝트 분류 ---------- */
  projectTypes: [
    { id: 'eda',      label: { ko: 'EDA', en: 'EDA' } },
    { id: 'modeling', label: { ko: '모델링', en: 'Modeling' } },
    { id: 'industry', label: { ko: '기업연계', en: 'Industry' } }
  ],
  projectFields: [
    { id: 'nlp', label: { ko: 'NLP', en: 'NLP' } },
    { id: 'cv',  label: { ko: 'CV', en: 'CV' } },
    { id: 'gen', label: { ko: '생성모델', en: 'Generative' } },
    { id: 'rl',  label: { ko: '강화학습', en: 'RL' } },
    { id: 'mm',  label: { ko: 'Multi-modal', en: 'Multi-modal' } },
    { id: 'rec', label: { ko: 'Rec-Sys', en: 'Rec-Sys' } },
    { id: 'ts',  label: { ko: '시계열', en: 'Time series' } },
    { id: 'ml',  label: { ko: '머신러닝', en: 'ML' } }
  ],

  /* ---------- 프로젝트 아카이브 ---------- */
  projects: [
    { id: 'attention-explainable', semester: '2026-1', type: 'modeling', field: 'nlp', awarded: false,
      thumb: 'assets/projects/thumbs/attention-explainable.webp', file: 'assets/projects/attention-explainable.pdf',
      title: { ko: 'Is Attention Explainable?', en: 'Is Attention Explainable?' },
      summary: { ko: '수능 영어 문제로 검증한 Attention 기반 설명가능성의 한계', en: 'Testing whether attention explains model reasoning, on Korean CSAT English problems' },
      overview: { ko: 'NLP1팀은 “Attention은 과연 모델의 추론 근거를 설명할 수 있는가?”라는 질문을 검증하기 위해, 수능 영어 순서배열·문장삽입 문제(SOP 태스크)를 풀고 근거를 제시하는 모델을 구현했습니다. arXiv 논문 요약 40만 건으로 기초 학습을 수행한 뒤 2017~2025년 수능·교육청 기출 문제로 도메인 파인튜닝하는 2단계 전이학습 구조를 설계했으며, BERT·BiLSTM·CNN 세 모델을 동일 조건에서 비교했습니다. 핵심 발견은 Attention과 Gradient의 일치도(Kendall τ)가 전 모델에서 0.17~0.21에 그쳤다는 점입니다. LLM(ChatGPT·Gemini·Claude) 및 인간 피험자의 근거 단어와 비교했을 때도 Attention보다 Gradient가 더 높은 일치도를 보였습니다. 추가로 DeBERTa 기반 문장삽입 모델(PMR 최대 95.0%)과 RoBERTa+FusionTransformer 기반 순서배열 모델(PMR 최대 87.9%)도 구현해 성능 상한을 함께 탐색했습니다.', en: 'NLP1 tested whether attention truly explains model reasoning by building models that solve and justify Korean CSAT English ordering/insertion (SOP) tasks. A two-stage transfer-learning setup (400k arXiv abstracts → 2017–2025 CSAT items) compared BERT, BiLSTM and CNN under identical conditions. Attention–gradient agreement (Kendall τ) stayed at 0.17–0.21 across all models, and gradient aligned better with LLM and human rationales than attention did. DeBERTa insertion (PMR up to 95.0%) and RoBERTa+FusionTransformer ordering (up to 87.9%) models probed the performance ceiling.' },
      tech: ['PyTorch', 'BERT', 'BiLSTM', 'CNN', 'DeBERTa', 'RoBERTa'],
      result: { ko: 'Attention을 설명 근거로 직접 사용하는 것의 한계를 실증하고, Gradient 기반 해석이 더 신뢰할 수 있는 대안임을 수능 벤치마크로 검증했습니다.', en: 'Demonstrated the limits of attention as an explanation and validated gradient-based interpretation as a more reliable alternative on a concrete CSAT benchmark.' },
      team: [ { name: '구기현', cohort: 14 }, { name: '권나연', cohort: 14 }, { name: '어희정', cohort: 14 }, { name: '조유빈', cohort: 15 } ] },
    { id: 'irma-agent', semester: '2026-1', type: 'modeling', field: 'nlp', awarded: true,
      thumb: 'assets/projects/thumbs/irma-agent.webp', file: 'assets/projects/irma-agent.pdf',
      title: { ko: 'IRMA: Administrative Agent', en: 'IRMA: Administrative Agent' },
      summary: { ko: '사용자 의도를 능동적으로 파악해 행정 서비스를 연결하는 멀티 에이전트 시스템', en: 'A multi-agent system that proactively routes citizens to the right administrative services' },
      overview: { ko: 'NLP2팀은 분절적인 민원 서비스와 수동적 챗봇의 한계를 극복하기 위해, 사용자의 맥락과 의도를 능동적으로 파악해 최적의 행정 서비스를 연결하는 Interactive Routing Multi-Agent(IRMA) 시스템을 구축했습니다. LangGraph 기반으로 Supervisor·Knowledge·Action 세 에이전트가 계층적으로 결합된 구조를 채택했으며, 약 2만 건의 고신뢰 공공 데이터로 자체 구축한 Supabase DB와 NLP Mapping Tool로 정교한 서비스 탐색을 수행합니다. 1,200개 난이도별 평가셋에서 JSON 파싱·검색 모두 70% 이상의 정합성을 기록했고, 개발·실험 전 과정을 약 10달러 내외의 비용으로 완수해 경제성을 입증했습니다.', en: 'NLP2 built IRMA (Interactive Routing Multi-Agent), which proactively interprets user context and routes citizens to optimal administrative services. Built on LangGraph with hierarchical Supervisor / Knowledge / Action agents, a self-built Supabase DB of ~20k high-trust public records, and a custom NLP mapping tool. Scored 70%+ consistency on a 1,200-item benchmark for both JSON parsing and retrieval, with total development cost around $10.' },
      tech: ['LangGraph', 'Supabase', 'Python', 'LLM'],
      result: { ko: '행정안전부 “AI 기반 민원 서비스 혁신” 공모전 우수상 수상 · 평가셋 정합성 70%+ · 총비용 약 $10', en: 'Excellence award at the MOIS AI civil-service innovation competition; 70%+ benchmark consistency at ~$10 total cost' },
      team: [ { name: 'Dongjune Shin', cohort: 14 }, { name: 'Seoyoon Kim', cohort: 14 }, { name: 'Jungmin Kim', cohort: 15 }, { name: 'Siwon Kim', cohort: 15 }, { name: 'Jiwon Lee', cohort: 15 } ] },
    { id: 'chim-avatar', semester: '2026-1', type: 'modeling', field: 'mm', awarded: false,
      thumb: 'assets/projects/thumbs/chim-avatar.webp', file: 'assets/projects/chim-avatar.pdf',
      title: { ko: '침멀토론: 침착맨 아바타 서비스', en: 'Chim-Mul Debate: Real-time Persona Avatar Service' },
      summary: { ko: '외형·말투·목소리·사고 패턴까지 학습한 디지털 아바타와의 실시간 멀티모달 인터랙션', en: 'Real-time multimodal interaction with a digital avatar that learns a person’s look, voice and reasoning style' },
      overview: { ko: '멀티모달팀은 특정 인물의 외형, 말투, 목소리, 고유한 사고 패턴을 학습한 디지털 아바타와 실시간으로 상호작용하는 멀티모달 파이프라인을 구축했습니다. 2020년 종료된 ‘침펄토론’ 콘텐츠를 기술적 재현의 첫 타겟으로 삼아, 12개 영상 소스와 밈 사전으로 약 5,000쌍의 QA 데이터셋을 구축하고 Kiwi·Gemini API로 페르소나를 모델링했습니다. Whisper 실시간 STT → RAG·LoRA를 적용한 Qwen3-4B 답변 생성 → ElevenLabs 음성 클로닝·ANAM 립싱크 렌더링으로 이어지는 끕김 없는 리얼타임 인터랙션을 구현했습니다. 평가 결과 RAG 기반 Qwen 4B 모델이 페르소나 일치도와 내용 정합성에서 가장 우수한 성능을 보였습니다.', en: 'The multimodal team built a real-time pipeline for interacting with a digital avatar that learns a specific person’s appearance, speech, voice and reasoning patterns, recreating the ended ‘Chim-Peol Debate’ content. ~5,000 QA pairs from 12 video sources and a meme dictionary powered persona modeling (Kiwi, Gemini API); the system chains Whisper STT → RAG/LoRA-tuned Qwen3-4B → ElevenLabs voice cloning + ANAM lip-sync for seamless real-time interaction. RAG-based Qwen 4B scored best on persona alignment and content consistency.' },
      tech: ['Whisper', 'Qwen3-4B', 'RAG · LoRA', 'ElevenLabs', 'ANAM'],
      result: { ko: '개인화된 페르소나 아바타와의 실시간 상호작용 가능성을 입증하고, B2C/B2B 수익화 모델을 설계해 서비스 확장 가능성을 제시했습니다.', en: 'Proved real-time personalized persona interaction is feasible and proposed B2C/B2B monetization models.' },
      team: [ { name: '이건일', cohort: 14 }, { name: '여준호', cohort: 14 }, { name: '조재우', cohort: 14 }, { name: '이은민', cohort: 15 }, { name: '백가은', cohort: 15 } ] },
    { id: 'gaussian-splatting', semester: '2026-1', type: 'modeling', field: 'gen', awarded: false,
      thumb: 'assets/projects/thumbs/gaussian-splatting.webp', file: 'assets/projects/gaussian-splatting.pdf',
      title: { ko: '3D Gaussian Splatting: 실내 공간 3D 생성', en: '3D Gaussian Splatting: Indoor Space Reconstruction' },
      summary: { ko: '3~7장의 실내 사진만으로 공간을 3D로 재구성하는 가상 투어 시스템', en: 'A virtual-tour system reconstructing indoor spaces in 3D from only 3–7 photos' },
      overview: { ko: '생성모델팀은 적은 수의 실내 이미지로 공간을 3차원으로 재구성하는 기술을 기반으로, 부동산·실내공간을 비대면으로 파악할 수 있는 가상 투어 시스템을 구축했습니다. 2D 매물 사진만으로는 내부 구조를 이해하기 어렵다는 문제의식에서 출발해, 3D Gaussian Splatting을 중심으로 DUSt3R·MASt3R로 초기 구조와 카메라 포즈를 안정적으로 추정하고 InstantSplat 파이프라인과 결합해 실시간에 가까운 3D 시각화를 구현했습니다. 카페 리뷰·부동산 매물 이미지로 데이터셋을 구축했으며, 스마트폰으로 찍은 3~7장의 사진만으로도 공간의 형태와 분위기를 파악할 수 있음을 확인했습니다. 사용자가 직접 이미지를 업로드해 결과를 확인할 수 있는 Gradio 웹 UI도 제작했습니다.', en: 'The generative-model team built a virtual-tour system that reconstructs indoor spaces in 3D from a handful of photos. Centered on 3D Gaussian Splatting, DUSt3R/MASt3R estimate initial structure and camera poses from few images, combined with the InstantSplat pipeline for near-real-time visualization. With curated cafe-review and real-estate images, 3–7 smartphone photos sufficed to convey a space’s shape and feel; a Gradio web UI lets users upload images and explore results.' },
      tech: ['3D Gaussian Splatting', 'DUSt3R', 'MASt3R', 'InstantSplat', 'Gradio'],
      result: { ko: '소수 이미지 기반 실내 3D 재구성 가능성을 확인하고, 원룸·인테리어·부동산 분야 가상투어 서비스의 프로토타입을 제시했습니다.', en: 'Validated few-shot indoor 3D reconstruction and delivered a prototype for real-estate/interior virtual tours.' },
      team: [ { name: '신지원', cohort: null }, { name: '배연욱', cohort: null }, { name: '이세원', cohort: null }, { name: '이윤서', cohort: null }, { name: '황수민', cohort: null } ] },
    { id: 'igoda', semester: '2026-1', type: 'modeling', field: 'rec', awarded: false,
      thumb: 'assets/projects/thumbs/igoda.webp', file: 'assets/projects/igoda.pdf',
      title: { ko: 'IGODA — 의도 임베딩 기반 광고 추천', en: 'IGODA — Intent-Embedding Ad Recommendation' },
      summary: { ko: '쿠키 제한 환경에서 행동 로그와 텍스트 의도 정보를 결합한 CTR 추천 모델', en: 'A CTR model combining behavior logs with text-based intent embeddings for cookie-limited environments' },
      overview: { ko: '추천시스템팀은 쿠키 기반 데이터가 제한되는 환경에서의 광고 추천 성능 저하 문제를 해결하기 위해, 사용자 행동 데이터와 텍스트 기반 의도 정보를 결합한 추천 모델을 설계했습니다. 먼저 전체 시퀀스 데이터를 활용한 Transformer 기반 모델(BST)로 이론적 상한 성능을 정의한 뒤, 실제 광고 환경을 반영한 sparse 조건에서 DeepFM 기반 Baseline을 구축했습니다. 사용자 행동 로그로부터 생성한 퍼널 기반 파생 변수를 자연어 템플릿으로 변환하고 Sentence Transformer로 임베딩한 ‘의도 임베딩 피처’를 추가한 Enhanced 모델을 설계했습니다. 비교 결과, 제안 모델은 특히 sparse 유저 그룹에서 AUC가 유의미하게 개선되며 상한 성능에 근접하는 수준까지 성능을 회복함을 확인했습니다.', en: 'The RecSys team tackled ad-recommendation degradation in cookie-limited settings by combining behavior data with text-based intent. A Transformer model (BST) on full sequences defined the upper bound; a DeepFM baseline was built under realistic sparse conditions, then enhanced with ‘intent embedding features’ — funnel-derived variables converted to natural-language templates and embedded with Sentence Transformers. The enhanced model significantly improved AUC for sparse user groups, approaching the upper bound.' },
      tech: ['DeepFM', 'BST', 'Sentence Transformer', 'PyTorch'],
      result: { ko: 'Sparse 유저 그룹에서 AUC 유의미 개선 · 상한 성능 근접 회복', en: 'Significant AUC gains on sparse user groups, recovering near-upper-bound performance' },
      team: [ { name: '안재민', cohort: null }, { name: '이재원', cohort: null }, { name: '조재현', cohort: null }, { name: '현승원', cohort: null } ] },
    { id: 'minecraft-rl', semester: '2026-1', type: 'modeling', field: 'rl', awarded: false,
      thumb: null, file: 'assets/projects/minecraft-rl.pdf',
      title: { ko: 'ROAD TO AGI: BEYOND MINECRAFT RL', en: 'ROAD TO AGI: Beyond Minecraft RL' },
      summary: { ko: '마인크래프트에서 생존 전략을 스스로 학습하는 강화학습 에이전트', en: 'RL agents that learn sustainable survival strategies in Minecraft' },
      overview: { ko: '강화학습팀은 마인크래프트라는 자율적인 환경에서 에이전트가 지속 가능한 생존 전략을 스스로 학습하는 프로젝트를 수행했습니다. 복잡한 생존 과업을 사냥·채굴·건축 세 가지 핵심 태스크로 분해해 접근했습니다. 사냥은 PPO와 Dense Reward Shaping으로 몬스터와의 적정 거리를 유지하며 안정적인 원거리 교전 루프를 구현했고, 채굴은 보상 희소성 문제를 해결하기 위해 계층적 강화학습과 내재적 호기심 모듈(ICM)을 도입했으며, 건축은 행동 모방 학습(Behavior Cloning)으로 기초를 잡고 PPO로 미세 조정했습니다. 결론적으로 RL만으로는 무한한 변수와 복잡한 환경을 모두 일반화하는 데 한계가 있음을 확인했고, 외부 지식을 계층적 행동으로 변환하는 RAG 기반 Knowledge-guided Policy를 향후 연구 방향으로 제시했습니다.', en: 'The RL team trained agents to learn sustainable survival strategies in Minecraft, decomposing survival into hunting, mining and building. Hunting used PPO with dense reward shaping for stable ranged combat; mining tackled reward sparsity with hierarchical RL and an intrinsic curiosity module; building bootstrapped with behavior cloning fine-tuned by PPO. The team identified the limits of pure RL in generalizing over Minecraft’s open-ended complexity and proposed a RAG-based knowledge-guided policy as future work toward AGI.' },
      tech: ['PPO', 'Hierarchical RL', 'ICM', 'Behavior Cloning'],
      result: { ko: '순수 RL의 일반화 한계를 실증하고, RAG 기반 Knowledge-guided Policy로의 확장 방향을 제시했습니다.', en: 'Demonstrated the generalization limits of pure RL and charted a path toward knowledge-guided policies.' },
      team: [ { name: '박창용', cohort: 14 }, { name: '황진우', cohort: 8 }, { name: '고서연', cohort: 14 }, { name: '박현진', cohort: 15 }, { name: '최현', cohort: 15 } ] },
    { id: 'heart-cvgnal', semester: '2026-1', type: 'modeling', field: 'cv', awarded: false,
      thumb: null, /* ← 'assets/projects/heart-cvgnal-thumb.png' 처럼 경로를 넣으면 고정됩니다 */
      file: 'assets/projects/heart-cvgnal.pdf',
      title: { ko: '실시간 호감도 측정 데이팅 시뮬레이터 (Heart CV-gnal)', en: 'Heart CV-gnal — Real-time Attraction-Scoring Dating Simulator' },
      summary: { ko: '순수 컴퓨터 비전만으로 신체 언어에서 실시간 호감도를 측정하는 인터랙티브 데이팅 시뮬레이터', en: 'An interactive dating simulator that scores attraction in real time from body language, using pure computer vision' },
      overview: { ko: 'CV팀은 순수 컴퓨터 비전만으로 실시간 호감도를 측정하는 interactive 데이팅 시뮬레이터를 구축했습니다. 먼저 MediaPipe Holistic으로 468개의 얼굴 랜드마크와 33개의 신체 관절 좌표를 추출하고, 카메라 거리에 불변하는 정규화 비율(mouth ratio, eye ratio, shoulder ratio 등)로 변환해 특징 벡터를 구성했습니다. 이후 3초간의 캘리브레이션 단계에서 개인 기준치를 측정하고, 5초 윈도우 단위로 5가지 신호를 평가해 0~100점 범위의 호감도 점수를 산출했습니다. 추가로 Claude Vision API(Haiku)를 30초 주기의 비동기 데몬 스레드로 연동해 규칙 기반 점수와 VLM 분석 점수를 0.65 : 0.35 비율로 혼합하는 교차 검증 구조를 도입했습니다. 결과는 Flask 웹 서버와 OpenCV 데스크톱 앱 두 가지 형태로 제공됩니다.', en: 'The CV team built an interactive dating simulator that measures attraction in real time using computer vision alone. MediaPipe Holistic extracts 468 facial landmarks and 33 body joints, converted into camera-distance-invariant normalized ratios (mouth, eye, shoulder ratios) to form feature vectors. After a 3-second calibration for personal baselines, five signals are evaluated in 5-second windows to produce a 0–100 attraction score. A Claude Vision API (Haiku) daemon thread runs asynchronously every 30 seconds, cross-validating rule-based scores with VLM analysis at a 0.65 : 0.35 blend. Delivered as both a Flask web server and an OpenCV desktop app.' },
      tech: ['Python', 'MediaPipe Holistic', 'OpenCV', 'Claude Vision API', 'Flask'],
      result: { ko: '음성·텍스트 없이 신체 언어만으로 호감도를 정량화함으로써, 비언어적 신호 기반 감정 인식의 가능성을 탐구했습니다.', en: 'Quantified attraction from body language alone — no audio or text — exploring the potential of nonverbal-signal-based emotion recognition.' },
      team: [
        { name: '윤동영', cohort: 14 }, { name: '신태희', cohort: 14 },
        { name: '박성하', cohort: 15 }, { name: '김재현', cohort: 15 }, { name: '배소윤', cohort: 15 }
      ] },
  ],

  /* ---------- 활동 구성원 ----------
     ★ 구성원 추가 방법: cohorts 배열의 members 안에 아래 형식으로 넣으세요.
       { name: { ko: '홍길동' } }                            ← 이름만
       { name: { ko: '홍길동' }, sub: { ko: '응용통계학과 21' } }  ← 전공/학번 표시
       { name: { ko: '홍길동' }, role: { ko: '회장' } }        ← 운영진 직책 표시
       photo: 'assets/people/파일명.png' 를 넣으면 사진 고정,
       없으면 디폴트 이미지가 표시되고 사이트에서 드래그&드롭으로 채울 수 있습니다. */
  members: {
    title: { ko: '활동 구성원', en: 'Members' },
    intro: { ko: 'Data Science Lab을 이끌어 주시는 지도교수님과 현재 활동 중인 15기·16기 학회원을 소개합니다.', en: 'Our advisor and the active 15th & 16th cohort members of DSL.' },
    /* 지도교수 — photo에 'assets/people/파일명.png' 경로를 넣으면 고정됩니다.
       null이면 사이트에서 직접 드래그&드롭으로 채울 수 있는 빈 슬롯이 표시됩니다. */
    advisor: {
      name: { ko: '박태영 교수님', en: 'Prof. Taeyoung Park' },
      role: { ko: '지도교수', en: 'Advisor' },
      affiliation: { ko: '연세대학교 응용통계학과 · 일반대학원 통계데이터사이언스학과', en: 'Applied Statistics · Graduate School of Statistics & Data Science, Yonsei University' },
      desc: { ko: '2019년 학회 설립부터 DSL을 지도해 주시며, 데이터로부터 가치를 창출하고 의사 결정을 내리는 전 과정을 함께 고민할 수 있도록 학회 활동 전반을 이끌어 주십니다.', en: 'Advising DSL since its founding in 2019, guiding the society through the full process of creating value and making decisions from data.' },
      photo: null
    },
    /* 각 운영진도 photo: 'assets/people/파일명.png' 로 사진을 고정할 수 있습니다 (null = 빈 슬롯) */
    /* 운영진을 추가하려면 아래 형식의 블록을 leads 배열 안에 넣으세요.
       { name: { ko: '홍길동', en: 'Gildong Hong' },
         role: { ko: '회장', en: 'President' },
         major: { ko: '응용통계학과 21', en: 'Applied Statistics \u201921' },
         photo: null },   // photo: 'assets/people/hong.png' 로 사진 고정
    */
    leads: [
    ],
    /* 활동 기수별 명단 — 위쪽에 있는 그룹이 먼저 표시됩니다. (26-2 활동 인원 연명부 기준) */
    cohorts: [
      { id: 'cohort16',
        title: { ko: '16기', en: '16th Cohort' },
        members: [
          { name: { ko: '김나혜' }, sub: { ko: '교육학부 24' } },
          { name: { ko: '김민찬' }, sub: { ko: '응용통계학과 22' } },
          { name: { ko: '김용진' }, sub: { ko: 'IT융합공학과 21' } },
          { name: { ko: '김현준' }, sub: { ko: '응용통계학과 23' } },
          { name: { ko: '김현희' }, sub: { ko: '실내건축학과 24' } },
          { name: { ko: '이정호' }, sub: { ko: '사회학과 22' } },
          { name: { ko: '이주아' }, sub: { ko: '응용통계학과 24' } },
          { name: { ko: '이준희' }, sub: { ko: '산업공학과 24' } },
          { name: { ko: '이혜원' }, sub: { ko: '경영학과 23' } },
          { name: { ko: '전승원' }, sub: { ko: '수학과 21' } },
          { name: { ko: '전유하' }, sub: { ko: '산업공학과 23' } },
          { name: { ko: '조규홍' }, sub: { ko: '응용통계학과 23' } },
          { name: { ko: '조윤상' }, sub: { ko: '산업공학과 22' } },
          { name: { ko: '최유성' }, sub: { ko: 'IT융합공학과 22' } },
          { name: { ko: '한서현' }, sub: { ko: '문화인류학과 24' } }
        ] },
      { id: 'cohort15',
        title: { ko: '15기', en: '15th Cohort' },
        members: [
          { name: { ko: '김시원' }, sub: { ko: '산업공학과 24' } },
          { name: { ko: '김재현' }, sub: { ko: '컴퓨터과학과 22' } },
          { name: { ko: '김정민' }, sub: { ko: '경제학과 22' } },
          { name: { ko: '박성하' }, sub: { ko: '응용통계학과 22' } },
          { name: { ko: '박현진' }, sub: { ko: '경영학과 22' } },
          { name: { ko: '배소윤' }, sub: { ko: '응용통계학과 24' } },
          { name: { ko: '배연욱' }, sub: { ko: '인공지능학과 23' } },
          { name: { ko: '백가은' }, sub: { ko: '대기과학과 24' } },
          { name: { ko: '안재민' }, sub: { ko: '인공지능학과 22' } },
          { name: { ko: '이세원' }, sub: { ko: '응용통계학과 21' } },
          { name: { ko: '이윤서' }, sub: { ko: '응용통계학과 24' } },
          { name: { ko: '이은민' }, sub: { ko: 'IT융합공학과 23' } },
          { name: { ko: '이지원' }, sub: { ko: '응용통계학과 23' } },
          { name: { ko: '조유빈' }, sub: { ko: '응용통계학과 24' } },
          { name: { ko: '최현' }, sub: { ko: '수학과 22' } },
          { name: { ko: '현승원' }, sub: { ko: '응용통계학과 22' } },
          { name: { ko: '황수민' }, sub: { ko: '사회학과 21' } }
        ] }
    ],
    compositionTitle: { ko: '학회원 구성', en: 'Membership' },
    composition: [
      { value: '32', label: { ko: '15·16기 활동 인원', en: 'Active members' } },
      { value: '13', label: { ko: '전공 학과 수', en: 'Majors represented' } },
      { value: '8:2', label: { ko: '이공 : 상경·인문 비율', en: 'STEM : non-STEM ratio' } }
    ]
  },

  /* ---------- 알럼나이 (수료 학회원) ----------
     ★ 기수 추가 방법: cohorts 배열에 { id, title, members } 블록을 추가하세요.
       위쪽에 있는 그룹이 먼저 표시됩니다 (최근 기수부터 정렬 권장).
       구성원 형식은 활동 구성원과 동일합니다.
     ※ 아래 14기 명단은 프로젝트 페이지의 팀원 정보에서 가져온 일부입니다. 실제 명단으로 수정·추가하세요. */
  alumni: {
    title: { ko: '알럼나이', en: 'Alumni' },
    intro: { ko: '활동을 수료한 14기 이전 학회원들입니다. 수료 후에도 세미나·강연·프로젝트 멘토링으로 학회와 함께하고 있습니다.', en: 'Members of the 14th and earlier cohorts who completed the program — staying connected through seminars, talks and mentoring.' },
    careersTitle: { ko: '수료 후 진로', en: 'Where alumni go' },
    careersDesc: { ko: '수료 학회원은 IT 대기업·금융사·스타트업의 데이터 직군과 국내외 대학원으로 진출하고 있습니다.', en: 'Alumni join data roles at major tech firms, financial institutions and startups, or continue to graduate school at home and abroad.' },
    cohorts: [
      { id: 'cohort14',
        title: { ko: '14기', en: '14th Cohort' },
        members: [
          { name: { ko: '고서연' } },
          { name: { ko: '구기현' } },
          { name: { ko: '권나연' } },
          { name: { ko: '박창용' } },
          { name: { ko: '신태희' } },
          { name: { ko: '어희정' } },
          { name: { ko: '여준호' } },
          { name: { ko: '윤동영' } },
          { name: { ko: '이건일' } },
          { name: { ko: '조재우' } },
          { name: { ko: 'Dongjune Shin' } },
          { name: { ko: 'Seoyoon Kim' } }
        ] },
      { id: 'cohort8',
        title: { ko: '8기', en: '8th Cohort' },
        members: [
          { name: { ko: '황진우' } }
        ] }
    ]
  },

  /* ---------- 모집 ---------- */
  recruit: {
    title: { ko: '16기 신입 학회원 모집', en: 'Recruiting the 16th Cohort' },
    intro: { ko: '데이터로 성장하고 싶은 연세인을 기다립니다. 지원서 제출 및 문의: dsl16th.recruiting@gmail.com · 010-5501-6850', en: 'We\u2019re looking for Yonsei students who want to grow with data. Applications & inquiries: dsl16th.recruiting@gmail.com · 010-5501-6850' },
    timelineTitle: { ko: '모집 일정', en: 'Timeline' },
    timeline: [
      { date: '06.24 (수) 23:59', label: { ko: '서류 마감', en: 'Application deadline' } },
      { date: '06.26 (금)',       label: { ko: '서류 합격자 발표', en: 'Screening results' } },
      { date: '06.27 – 06.28',    label: { ko: '면접', en: 'Interviews' } },
      { date: '06.30 (화)',       label: { ko: '최종 합격자 발표', en: 'Final results' } }
    ],
    eligibilityTitle: { ko: '지원 자격', en: 'Eligibility' },
    eligibility: [
      { ko: '연세대학교 재학생 · 휴학생 (전공 무관)', en: 'Yonsei undergraduates on/off leave, any major' },
      { ko: '1년(2개 학기) 활동이 가능한 분', en: 'Able to commit to two semesters' },
      { ko: '매주 화요일 저녁 정규 세션 참여 가능한 분', en: 'Available for Tuesday evening sessions' },
      { ko: 'Python 기초 문법 이해 권장 (필수 아님)', en: 'Basic Python recommended, not required' }
    ],
    processTitle: { ko: '전형 절차', en: 'Process' },
    process: [
      { step: '01', title: { ko: '서류', en: 'Application' }, desc: { ko: '지원 동기와 학습 계획 중심의 서류를 제출합니다.', en: 'Submit a short application on motivation and learning plan.' } },
      { step: '02', title: { ko: '면접', en: 'Interview' },   desc: { ko: '15분 내외의 대면 면접으로 열정과 커밋 가능성을 봅니다.', en: 'A ~15-minute conversation about passion and commitment.' } },
      { step: '03', title: { ko: '합류', en: 'Join' },        desc: { ko: 'OT에서 커리큘럼과 팀을 배정받고 활동을 시작합니다.', en: 'Get your curriculum and team at orientation, and begin.' } }
    ]
  },

  /* ---------- 기업 협력 / 문의 ---------- */
  contact: {
    title: { ko: '기업 협력', en: 'Partner with DSL' },
    intro: { ko: '데이터가 있는 곳에 DSL이 있습니다. 실무 데이터로 함께 문제를 풀 파트너를 찾습니다.', en: 'Where there is data, there is DSL. We\u2019re looking for partners to solve real problems together.' },
    types: [
      { title: { ko: '기업연계 프로젝트', en: 'Industry projects' }, desc: { ko: '학회원들이 학기 동안 배운 내용과 프로젝트 경험을 바탕으로, 기업과 연계하여 기업에서 원하는 결과를 도출합니다.', en: 'Members apply what they\u2019ve learned to deliver the outcomes partner companies need.' } },
      { title: { ko: '데이터 · 인프라 제공', en: 'Data & infra' }, desc: { ko: '비식별 데이터셋, 클라우드 크레딧 등으로 학회 프로젝트를 지원할 수 있습니다.', en: 'Support projects with anonymized datasets or cloud credits.' } },
      { title: { ko: '특강 · 멘토링', en: 'Talks & mentoring' }, desc: { ko: '현업 데이터 사이언티스트의 특강과 프로젝트 멘토링을 환영합니다.', en: 'Guest lectures and project mentoring from practitioners.' } },
      { title: { ko: '채용 연계', en: 'Recruiting' }, desc: { ko: '수료 학회원 대상 채용 공고 공유와 리크루팅 세션을 진행합니다.', en: 'Share openings and run recruiting sessions with our alumni pool.' } }
    ],
    emailLabel: { ko: '이메일', en: 'Email' },
    email: 'dslab.yonsei@gmail.com',
    channelsLabel: { ko: '채널', en: 'Channels' },
    channels: [
      { name: 'Phone', handle: '010-5244-9450' },
      { name: 'Instagram', handle: '@dsl_yonsei' },
      { name: 'GitHub', handle: 'github.com/DataScience-Lab-Yonsei' },
      { name: 'YouTube', handle: 'youtube.com/@dsl-yonsei' }
    ],
    note: { ko: '협력 제안은 DSL 공식 이메일로 보내주시면 운영진이 확인 후 회신드립니다.', en: 'Send proposals to the official DSL email — the team will get back to you.' }
  }
};
