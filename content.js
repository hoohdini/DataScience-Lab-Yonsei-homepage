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
      staff:    { ko: '운영진',     en: 'Leadership' },
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
    { id: 'ml',  label: { ko: '머신러닝', en: 'ML' } },
    { id: 'da',  label: { ko: '데이터 분석', en: 'Data analysis' } }
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
    /* ---------- 26-1 EDA 프로젝트 (노션 [26-1] EDA 프로젝트 페이지 기준) ----------
       발표 자료 PDF는 assets/projects/ 에 아래 파일명으로 넣은 뒤 file: 경로를 채우세요.
       eda-sports.pdf · eda-semiconductor.pdf · eda-media.pdf · eda-bike.pdf · eda-education.pdf · eda-economy.pdf */
    { id: 'eda-sports', semester: '2026-1', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/eda-sports.webp', file: null, /* 'assets/projects/eda-sports.pdf' */
      title: { ko: 'WHO IS THE BEST F1 DRIVER?', en: 'Who Is the Best F1 Driver?' },
      summary: { ko: 'Formula 1 랩 단위 주행 데이터로 드라이버 성과의 구조적 요인을 분해한 EDA', en: 'Decomposing what drives F1 driver performance using lap-level race data' },
      overview: { ko: '스포츠팀은 Formula 1 공식 레이스 데이터를 기반으로 드라이버 성과를 구성하는 핵심 요인을 정량적으로 분해·분석했습니다. 단순한 최종 순위나 포인트가 아닌, 랩 단위 주행 데이터와 레이스 이벤트 로그를 활용해 드라이버 간 성과 차이가 발생하는 구조적 원인을 탐색했습니다. 랩타임 분포, 타이어 스틴트별 성능 변화, 추월 및 트랙 포지션 변동, DNF 및 랩 손실 등 주요 퍼포먼스 지표를 전처리·표준화한 뒤 시즌·서킷·드라이버 단위로 EDA를 수행했고, 단일 성적 지표로는 포착되지 않는 주행 페이스 안정성, 타이어 관리 능력, 레이스 리스크 노출 정도를 계량적으로 비교·시각화했습니다. 일부 지표에 대해서는 파생 지표를 설계해 드라이버의 ‘안정성(Stability)’과 ‘일관성(Consistency)’을 수치화했으며, 동일한 포인트 획득 성과를 보이더라도 성과의 질적 차이가 존재함을 확인했습니다.', en: 'The sports team quantitatively decomposed the key factors behind Formula 1 driver performance using official race data. Rather than final standings or points, it used lap-level telemetry and race event logs to explore the structural causes of performance gaps. Lap-time distributions, stint-by-stint tire performance, overtakes and track-position changes, DNFs and lost laps were preprocessed and standardized, then explored by season, circuit and driver. The team compared and visualized pace stability, tire management and race-risk exposure — dimensions a single results metric cannot capture — and designed derived “Stability” and “Consistency” indices, showing that drivers with identical points can differ markedly in the quality of their performance.' },
      tech: ['Python', 'EDA', 'Formula 1 레이스 데이터'],
      result: { ko: 'F1 드라이버 평가를 결과 중심에서 과정 중심으로 확장하고, 복합 성과 지표 설계의 중요성을 제시했습니다.', en: 'Extended F1 driver evaluation from outcomes to process, highlighting the value of composite performance metrics.' },
      team: [ { name: '신태희', cohort: 14 }, { name: '구기현', cohort: 14 }, { name: '신동준', cohort: 14 }, { name: '이건일', cohort: 14 }, { name: '김시원', cohort: 15 }, { name: '박현진', cohort: 15 } ] },
    { id: 'eda-semiconductor', semester: '2026-1', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/eda-semiconductor.webp', file: null, /* 'assets/projects/eda-semiconductor.pdf' */
      title: { ko: 'Factors Influencing Lithography Mask Optimization', en: 'Factors Influencing Lithography Mask Optimization' },
      summary: { ko: 'LithoBench 데이터로 계산 리소그래피 공정의 오차 전파와 기하학적 복잡성을 분석', en: 'Analyzing error propagation and geometric complexity in computational lithography with LithoBench' },
      overview: { ko: '반도체팀은 LithoBench 데이터셋을 기반으로 계산 리소그래피 공정에서의 오차 전파와 기하학적 복잡성을 분석하는 탐색적 데이터 분석을 수행했습니다. Target, pixelILT, litho, resist, printed 단계 데이터를 활용해 단계별 오차 기여도를 정량화하고, 패턴 특성과 최종 인쇄 성능 간의 관계를 분석했습니다. 그 결과 Target에서 PixelILT로 넘어가는 단계에서 오차 발생 비중이 가장 크다는 점을 확인했으며, Metal 계열은 형상 복잡도와 CD의 복합적 영향이, Via 계열은 Spacing 요인이 주요 성능 결정 요인으로 작용함을 확인했습니다. 합성 데이터와 실제 데이터를 비교한 결과 기하학적 복잡도가 높을수록 printed 성능이 저하되는 경향이 나타났으며, FFT 기반 분석이 이러한 복잡성 정량화에 효과적임을 보였습니다.', en: 'The semiconductor team ran an exploratory analysis of error propagation and geometric complexity in computational lithography using the LithoBench dataset. Using Target, pixelILT, litho, resist and printed stage data, it quantified each stage’s error contribution and related pattern characteristics to final print quality. The Target → PixelILT step accounted for the largest share of error; for Metal layers, shape complexity combined with CD was decisive, while Spacing dominated for Via layers. Comparing synthetic and real data showed printed quality degrading with geometric complexity, and FFT-based analysis proved effective for quantifying that complexity.' },
      tech: ['Python', 'FFT 분석', 'LithoBench'],
      result: { ko: 'Layer 특성에 맞춘 차별화된 OPC/ILT 전략이 필요하다는 인사이트를 제시했습니다.', en: 'Showed that OPC/ILT strategies should be differentiated by layer characteristics.' },
      team: [ { name: '백승이', cohort: 13 }, { name: '권나연', cohort: 14 }, { name: '여준호', cohort: 14 }, { name: '배연욱', cohort: 15 }, { name: '백가은', cohort: 15 } ] },
    { id: 'eda-media', semester: '2026-1', type: 'eda', field: 'nlp', awarded: false,
      thumb: 'assets/projects/thumbs/eda-media.webp', file: null, /* 'assets/projects/eda-media.pdf' */
      title: { ko: '구조, 의미, 그리고 맥락: 가사로 조명한 한국 대중가요 30년의 지형도', en: 'Structure, Meaning and Context: 30 Years of K-pop Through Its Lyrics' },
      summary: { ko: '1996~2025 멜론 월간차트 가사를 NLP로 분해해 한국 대중가요의 패러다임 전환을 추적', en: 'Tracing the paradigm shift in Korean pop lyrics with NLP on 30 years of Melon monthly charts' },
      overview: { ko: '미디어팀은 1996년부터 2025년까지의 멜론 월간차트 데이터를 활용해 한국 대중가요 가사의 변화 과정을 구조적·의미적 관점에서 정량적으로 분해하고 분석했습니다. 30년 시계열 텍스트 데이터에 자연어 처리 기법을 적용해 최근 대두된 ‘이지 리스닝’ 트렌드와 언어 혼용 현상의 실체를 데이터로 탐색했습니다. 분석 결과, 신곡 진입 장벽이 높아지는 차트 고착화 속에서 가사가 ‘읽고 이해하는 문학적 서사’에서 ‘듣고 즐기는 소리의 질감’으로 패러다임이 전환되었음을 확인했습니다. 거시적으로는 정보 밀도와 영어 비중이 폭발적으로 증가하며 의미보다 청각적 쾌감을 중시하는 경향이 뚜렷해졌고, 미시적으로는 IMF나 코로나19 같은 사회적 사건이 ‘방’, ‘혼자’ 같은 개인의 라이프스타일과 미시적 공간의 변화로 치환되어 투영됨을 규명했습니다. 또한 여성 화자의 서사가 수동적 기다림에서 주체적 능동성으로 변화하는 과정을 젠더 주체성 지수로 수치화해 입증했습니다.', en: 'The media team quantitatively decomposed how Korean pop lyrics changed structurally and semantically using Melon monthly chart data from 1996 to 2025. Applying NLP to 30 years of text, it examined the recent “easy listening” trend and code-mixing with data. Amid chart entrenchment that raises the barrier for new songs, lyrics shifted from “literary narratives to read and understand” to “sonic texture to hear and enjoy.” Macro-level, information density and English share rose sharply as auditory pleasure overtook meaning; micro-level, major events such as the IMF crisis and COVID-19 were refracted into personal lifestyles and intimate spaces (“room,” “alone”). A gender-agency index also showed female narrators moving from passive waiting to active agency.' },
      tech: ['Python', 'NLP', '멜론 월간차트 (1996–2025)'],
      result: { ko: '한국 대중가요 가사가 언어 장벽을 낮추는 동시에 직관적 청각 감각을 극대화하는 방향으로 진화해 왔음을 데이터로 입증했습니다.', en: 'Demonstrated with data that K-pop lyrics have evolved to lower language barriers while maximizing intuitive auditory appeal.' },
      team: [ { name: '조재우', cohort: 14 }, { name: '조재현', cohort: 14 }, { name: '김정민', cohort: 15 }, { name: '이은민', cohort: 15 }, { name: '조유빈', cohort: 15 }, { name: '현승원', cohort: 15 } ] },
    { id: 'eda-bike', semester: '2026-1', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/eda-bike.webp', file: null, /* 'assets/projects/eda-bike.pdf' */
      title: { ko: '따릉이 운영 전략 제언', en: 'Operating Strategy for Seoul’s Ttareungyi Bike-Share' },
      summary: { ko: '3개년 대여·반납·결제 데이터로 따릉이 수급 불균형을 진단하고 운영 전략을 제안', en: 'Diagnosing supply imbalance in Seoul’s public bike-share and proposing rebalancing strategies' },
      overview: { ko: '도시환경팀은 서울시 공공자전거 ‘따릉이’의 이용 데이터를 기반으로 서비스의 지속 가능성을 확보하고 운영 적자를 개선하기 위한 정량적 분석을 수행했습니다. 3개년치 상반기 대여소별 대여·반납 이력과 결제 데이터를 정비하고 대여소 위치 정보를 결합해 자전거 불균형 문제를 수치화했으며, 이용 건수·이용 시간·이동 거리 등 다각적인 지표로 이용 행태를 진단했습니다. 데이터 시각화를 통해 출퇴근 시간대의 이용 집중 현상과 이로 인한 자전거 부족 문제를 식별하고, 비효율적으로 운영되는 대여소의 특징을 도출했습니다. 이를 해결하기 위해 이용률 기반의 대여소 재배치 전략과 실무적인 자전거 수급 최적화 방안을 제안했습니다.', en: 'The urban-environment team analyzed usage data from Seoul’s public bike-share “Ttareungyi” to improve sustainability and reduce operating losses. It cleaned three years of first-half rental/return and payment records, joined station locations to quantify bike imbalance, and diagnosed usage behavior through trip counts, durations and distances. Visualizations revealed commute-hour concentration and resulting shortages, and characterized inefficiently run stations. The team proposed usage-based station rebalancing and practical supply optimization measures.' },
      tech: ['Python', 'EDA · 시각화', '따릉이 대여·반납·결제 데이터'],
      result: { ko: '공공 모빌리티로서의 가치를 유지하면서 장기 운영 안정성을 높일 수 있는 데이터 기반 정책 인사이트를 제시했습니다.', en: 'Delivered data-driven policy insights for long-term operational stability while preserving public-mobility value.' },
      team: [ { name: '신지원', cohort: 14 }, { name: '이재원', cohort: 14 }, { name: '이윤서', cohort: 15 }, { name: '최현', cohort: 15 }, { name: '황수민', cohort: 15 } ] },
    { id: 'eda-education', semester: '2026-1', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/eda-education.webp', file: null, /* 'assets/projects/eda-education.pdf' */
      title: { ko: '같은 점수, 다른 과정: 과정 기반 문항·학습자 단위 분석', en: 'Same Score, Different Process: Process-Based Item & Learner Analysis' },
      summary: { ko: '산타토익 EdNet 데이터로 문항 ‘혼란도’를 정의하고 학습 행동 기반으로 학습자를 군집화', en: 'Defining item “confusion” and clustering learners by process behavior on the EdNet dataset' },
      overview: { ko: '교육팀은 산타토익 EdNet 데이터를 활용해 결과 중심 평가를 넘어 과정 중심 평가로 나아가기 위한 혼란도 지표 설정과 학습 과정 행동변수 기반 학생 군집화를 진행했습니다. 분석은 (1) 문항 단위, (2) 학습자 단위, (3) 문항·학습자 통합 단위로 이루어졌습니다. 문항 단위에서는 문항반응이론(IRT)의 문항 난이도를 결과 난이도로, 응답 시간과 응답 변경 횟수 기반 로지스틱 회귀로 정의한 ‘혼란도’를 과정 난이도로 삼아 문항을 4가지 유형(고난이도-고혼란도 등)으로 분류하고 선지 선택 불확실성, 응답시간 분산, 문항 태그 수, 토익 파트 등을 탐색했습니다. 학습자 단위에서는 학습 연속 일수, 선지 선택 취소율, 자료 재생률 등 행동변수와 IRT 능력을 함께 분석해 4개 집단으로 유형화했으며, 통합 분석에서는 IRT 능력은 비슷하지만 행동 유형이 상이한 두 집단을 집중 비교했습니다.', en: 'The education team used the Santa TOEIC EdNet dataset to move beyond outcome-based assessment: defining an item-level “confusion” index and clustering learners by process behavior. Analysis ran at (1) item, (2) learner and (3) combined levels. For items, IRT difficulty served as outcome difficulty while a logistic-regression “confusion” score built from response time and answer changes served as process difficulty, yielding four item types and exploration of choice uncertainty, response-time variance, tag counts and TOEIC parts. For learners, streak days, answer-cancel rate and material replay rate were combined with IRT ability to form four clusters; the combined analysis focused on two groups with similar ability but distinct behavior.' },
      tech: ['Python', 'IRT', 'Logistic Regression', 'Clustering', 'EdNet'],
      result: { ko: '점수 등 결과 수치를 넘어선 과정 중심 평가의 가능성을 제시했습니다.', en: 'Showed the potential of process-based assessment beyond raw scores.' },
      team: [ { name: '김서윤', cohort: 14 }, { name: '윤동영', cohort: 14 }, { name: '박성하', cohort: 15 }, { name: '배소윤', cohort: 15 }, { name: '이세원', cohort: 15 }, { name: '이지원', cohort: 15 } ] },
    { id: 'eda-economy', semester: '2026-1', type: 'eda', field: 'ts', awarded: false,
      thumb: 'assets/projects/thumbs/eda-economy.webp', file: null, /* 'assets/projects/eda-economy.pdf' */
      title: { ko: '당신은 환율이 올라서 무서우신가요?', en: 'Are You Afraid of the Rising Exchange Rate?' },
      summary: { ko: '한국 외환시장에 특화된 ‘환율 공포지수(FXFI)’를 설계하고 실제 환율과의 동학적 상관관계를 분석', en: 'Designing a Korea-specific FX Fear Index (FXFI) and analyzing its dynamic relationship with the won–dollar rate' },
      overview: { ko: '경제팀은 원/달러 환율이 이례적으로 급등하고 변동성이 커지는 국면에서, 전통적인 거시 경제 변수만으로는 설명하기 어려운 ‘시장 내부의 심리 상태’를 수치화해 환율을 분석했습니다. 한미 금리차나 경상수지 등은 환율의 장기 추세는 설명하지만 단기적인 쏠림이나 특정 시점의 공포 증폭을 포착하는 데 한계가 있었기에, CNN 공포탐욕지수와 암호화폐 공포지수에서 착안해 한국 CDS 프리미엄, 네이버·구글의 ‘달러’·‘원달러’ 검색량, Risk Reversal 세 변수를 합산한 ‘환율 공포지수(FXFI)’를 설계했습니다. 분석 결과 환율과 FXFI는 전반적으로 비례하는 경향을 보였고, FXFI는 1~4일 이내 환율 변동에 대한 부분적 선행 정보성을 가졌으나 환율 변동이 공포지수에 반영되는 후행적 성격이 더 강하게 나타났습니다. 공포지수로 설명되지 않는 환율 이동은 잔차분석을 통해 자본유입, 경상수지 등 거시 지표로 설명할 수 있었습니다.', en: 'Amid an unusual surge and heightened volatility in the won–dollar rate, the economics team quantified “market sentiment” that traditional macro variables cannot explain. Since rate differentials and the current account explain long-run trends but miss short-term herding and fear spikes, the team designed an FX Fear Index (FXFI) — inspired by CNN’s Fear & Greed and the crypto fear index — combining Korea CDS premiums, Naver/Google search volume for “dollar”/“won-dollar,” and risk reversals. FXFI moved broadly in step with the exchange rate and carried partial leading information over 1–4 days, though its lagging response to rate moves was stronger. Residual analysis attributed the remaining moves to macro indicators such as capital flows and the current account.' },
      tech: ['Python', 'FXFI 지수 설계', 'CDS · 검색량 · Risk Reversal', '잔차분석'],
      result: { ko: 'FXFI가 환율 변동의 보조적 상태 지표로서 유의미함을 입증했습니다.', en: 'Validated FXFI as a meaningful auxiliary state indicator for exchange-rate movements.' },
      team: [ { name: '박창용', cohort: 14 }, { name: '고서연', cohort: 14 }, { name: '어희정', cohort: 14 }, { name: '김재현', cohort: 15 }, { name: '안재민', cohort: 15 } ] },
    /* ---------- 25-2 모델링 프로젝트 (노션 [25-2] 모델링 프로젝트 페이지 기준) ---------- */
    { id: 'm252-running', semester: '2025-2', type: 'modeling', field: 'rec', awarded: false,
      thumb: 'assets/projects/thumbs/m252-running.webp', file: null,
      title: { ko: '러닝코스 추천 시스템', en: 'Running Course Recommendation System' },
      summary: { ko: '서대문구 실제 도로망으로 생성한 3.8만 개 러닝 코스를 개인 선호에 맞춰 추천', en: 'Personalized recommendations over 38k running routes generated from Seodaemun-gu’s real road network' },
      overview: { ko: '추천시스템팀은 서대문구 실제 도로망 데이터를 기반으로 개인 맞춤형 러닝 코스 추천 시스템을 구축했습니다. OSM 기반 도로·지형·CCTV·조도 등 환경 정보를 통합해 표준화된 MegaDB를 구성하고, 경사·안전·경관 등을 가중치로 반영한 커스텀 다익스트라 알고리즘으로 약 3.8만 개의 순환형 러닝 코스를 생성했습니다. 이후 사용자 설문으로 수집한 개인 선호 데이터를 바탕으로 사용자–코스 상호작용 행렬을 구성하고, Two-Tower·KGAT·DCN+DeepFM 등 다양한 추천 모델을 Warm/Cold 환경에서 학습했습니다. 비교 결과 Two-Tower는 빠른 검색 성능을, KGAT는 지식그래프 기반 관계 추론으로 Cold-start에서 강점을, DCN+DeepFM은 복잡한 비선형 특성 조합을 효과적으로 포착했습니다.', en: 'The RecSys team built a personalized running-course recommender on Seodaemun-gu’s real road network. It integrated OSM roads, terrain, CCTV and lighting into a standardized MegaDB and generated ~38k loop courses with a custom Dijkstra weighted by slope, safety and scenery. User preferences collected via surveys formed a user–course interaction matrix, on which Two-Tower, KGAT and DCN+DeepFM models were trained under warm and cold settings: Two-Tower excelled at fast retrieval, KGAT at cold-start via knowledge-graph reasoning, and DCN+DeepFM at capturing complex nonlinear feature interactions.' },
      tech: ['OpenStreetMap', 'Dijkstra', 'Two-Tower', 'KGAT', 'DCN · DeepFM'],
      result: { ko: '실제 도로 기반 경로 생성과 딥러닝 추천모델을 통합해 사용자 선호를 반영한 정교한 러닝 코스 추천의 가능성을 제시했습니다.', en: 'Showed that real-road route generation and deep recommenders can be combined for fine-grained, preference-aware course recommendation.' },
      team: [ { name: '이채원', cohort: 13 }, { name: '곽도윤', cohort: 13 }, { name: '송채은', cohort: 13 }, { name: '구기현', cohort: 14 }, { name: '조재우', cohort: 14 } ] },
    { id: 'm252-idol', semester: '2025-2', type: 'modeling', field: 'gen', awarded: false,
      thumb: 'assets/projects/thumbs/m252-idol.webp', file: null,
      title: { ko: '생모팀, 데뷔하다: 올데싸 프로젝트', en: 'Idolization: K-pop Agency-Style Portrait Generation' },
      summary: { ko: '얼굴 정체성을 유지한 채 SM·YG·JYP 스타일을 입히는 ‘아이돌화’ 생성 파이프라인', en: 'An identity-preserving pipeline that renders a face in the visual style of SM, YG or JYP' },
      overview: { ko: '생성모델팀은 개인 얼굴 이미지를 기반으로 SM·YG·JYP 등 K-Pop 3대 기획사의 시각적 스타일을 적용하되 원본 얼굴의 정체성을 유지하는 ‘아이돌화(Idolization)’ 생성 파이프라인을 구축했습니다. 기획사별 고품질 정면 사진을 수집해 LoRA로 스타일 특성을 학습했고, IP-Adapter FaceID Plus v2를 적용해 생성 과정에서 사용자의 실제 얼굴 형태가 보존되도록 했습니다. 생성된 얼굴은 ReActor FaceSwap으로 실제 아이돌 사진과 자연스럽게 합성되었으며, RealESRGAN과 CodeFormer로 고해상도 복원과 디테일 개선을 수행했습니다. 전체 과정은 ComfyUI 워크플로우로 자동화되어 성별·기획사별 스타일 변환이 가능합니다.', en: 'The generative-model team built an “Idolization” pipeline that applies the visual style of Korea’s big three K-pop agencies (SM, YG, JYP) to a personal photo while preserving facial identity. Agency-specific styles were learned with LoRA from curated frontal photos; IP-Adapter FaceID Plus v2 preserved the user’s facial structure; ReActor FaceSwap composited the result onto real idol photos; and RealESRGAN + CodeFormer handled upscaling and detail restoration. The whole flow is automated in ComfyUI with gender- and agency-specific style switches.' },
      tech: ['LoRA', 'IP-Adapter FaceID', 'ReActor', 'RealESRGAN · CodeFormer', 'ComfyUI'],
      result: { ko: '스타일·정체성·사진 사실성 세 요소를 통합적으로 제어하는 생성 모델링 접근을 제시하고 엔터테인먼트 응용 가능성을 탐색했습니다.', en: 'Demonstrated joint control of style, identity and photorealism, and explored entertainment applications.' },
      team: [ { name: '이유주', cohort: 13 }, { name: '정주은', cohort: 13 }, { name: '이건일', cohort: 14 }, { name: '어희정', cohort: 14 } ] },
    { id: 'm252-hospital', semester: '2025-2', type: 'modeling', field: 'nlp', awarded: false,
      thumb: 'assets/projects/thumbs/m252-hospital.webp', file: null,
      title: { ko: '병원 예약 자동화 Multi-AI Agent', en: 'Hospital Booking Multi-AI Agent' },
      summary: { ko: 'LangGraph 기반 관리자·예약·RAG 에이전트가 협업해 병원 예약을 끝까지 자동화', en: 'LangGraph supervisor, booking and RAG agents that automate hospital reservations end to end' },
      overview: { ko: 'NLP2팀은 병원 예약 과정을 자동화하기 위해 LangGraph 기반의 Multi-Agent 시스템을 구축했습니다. 사용자 입력을 분석하는 관리자 에이전트, 예약 절차를 담당하는 예약 에이전트, 증상 기반 의료진 매칭을 수행하는 RAG 에이전트가 유기적으로 협업하는 구조를 설계했습니다. Supabase MCP 툴로 예약 생성·변경·조회 기능을 통합했고, Tavily 검색으로 운영시간·위치 등 병원 정보를 실시간으로 제공했습니다. 전체 워크플로우는 LangGraph로 관리되어 상태 추적과 라우팅이 자동화되며, RAG 서버와 연동된 의료진 추천 기능으로 사용자의 증상에 맞는 진료과를 안내합니다. LangGraph Studio와 터미널 인터페이스로 실시간 디버깅과 대화형 테스트도 지원합니다.', en: 'NLP2 built a LangGraph-based multi-agent system that automates hospital booking: a supervisor agent interprets user input, a booking agent handles the reservation flow, and a RAG agent matches symptoms to clinicians. Supabase MCP tools power create/update/lookup of reservations, and Tavily search supplies real-time hospital details such as hours and location. LangGraph manages state and routing, a RAG server recommends the right department, and LangGraph Studio plus a terminal UI enable live debugging and conversational testing.' },
      tech: ['LangGraph', 'Supabase MCP', 'Tavily', 'RAG', 'LLM'],
      result: { ko: '정보 수집·의사결정·데이터 입력까지 완전 자동화해 실사용에 가까운 LLM 기반 예약 시스템의 가능성을 보여주었습니다.', en: 'Fully automated information gathering, decision-making and data entry, showing a near-production LLM booking system.' },
      team: [ { name: '김건우', cohort: 12 }, { name: '김은희', cohort: 12 }, { name: '박세현', cohort: 13 }, { name: '신동준', cohort: 14 }, { name: '여준호', cohort: 14 } ] },
    { id: 'm252-welfare', semester: '2025-2', type: 'modeling', field: 'nlp', awarded: false,
      thumb: 'assets/projects/thumbs/m252-welfare.webp', file: null,
      title: { ko: 'AI 기반 음성 인식 및 복지정책 추천 시스템', en: 'Voice-Based Welfare Policy Recommendation' },
      summary: { ko: 'STT → 벡터 검색 → TTS로 이어지는 음성 복지정책 안내 파이프라인', en: 'An STT → vector search → TTS pipeline that answers welfare-policy questions by voice' },
      overview: { ko: 'NLP1팀은 음성 기반 복지정책 검색을 목표로 STT·벡터 검색·TTS까지 이어지는 End-to-End AI 파이프라인을 구축했습니다. Faster-Whisper와 OpenAI Whisper로 한국어 최적화 음성 인식을 구현하고, BGE-m3 임베딩과 Qdrant 벡터 데이터베이스로 의미 기반 정책 매칭을 수행했습니다. Edge TTS와 SpeechT5로 추천 결과를 자연스러운 한국어 음성으로 변환했으며, 전체 파이프라인은 FastAPI 기반 API로 통합되어 음성 입력 → 텍스트 변환 → 정책 추천 → 음성 응답까지 평균 3~4초 내에 처리됩니다.', en: 'NLP1 built an end-to-end voice pipeline for welfare-policy search: Korean-optimized speech recognition with Faster-Whisper and OpenAI Whisper, semantic policy matching with BGE-m3 embeddings in a Qdrant vector database, and natural Korean speech output via Edge TTS and SpeechT5. Integrated as a FastAPI service, the system goes from voice input to spoken recommendation in about 3–4 seconds.' },
      tech: ['Whisper · Faster-Whisper', 'BGE-m3', 'Qdrant', 'Edge TTS · SpeechT5', 'FastAPI'],
      result: { ko: '복잡한 복지정책 정보를 음성 인터페이스로 접근 가능하게 해 디지털 소외계층의 정책 탐색을 돕는 시스템을 제안했습니다.', en: 'Made complex welfare information reachable by voice, helping digitally underserved users find policies.' },
      team: [ { name: '김선기', cohort: 13 }, { name: '이진우', cohort: 13 }, { name: '신지원', cohort: 14 }, { name: '조재현', cohort: 14 } ] },
    { id: 'm252-quant', semester: '2025-2', type: 'modeling', field: 'rl', awarded: false,
      thumb: 'assets/projects/thumbs/m252-quant.webp', file: null,
      title: { ko: '팩터 퀀트 트레이딩 자동화', en: 'Automated Factor Quant Trading with RL' },
      summary: { ko: '금융 뉴스 JEPA 임베딩을 강화학습 정책에 통합한 뉴스 기반 포트폴리오 운용', en: 'News-driven portfolio management that feeds JEPA news embeddings into an RL trading policy' },
      overview: { ko: '강화학습팀은 금융 뉴스에서 시장 맥락을 학습한 임베딩을 활용해 포트폴리오를 자동으로 운용하는 뉴스 기반 RL 트레이딩 시스템을 구축했습니다. JEPA 방식으로 금융 뉴스 헤드라인을 학습해 일별 시장 임베딩을 생성하고, 이를 가격 정보 및 포트폴리오 상태와 결합한 강화학습 환경을 구성했습니다. Transformer 기반 정책망을 갖춘 SAC·Q-learning 에이전트를 훈련해 거래비용·포지션 제약·현금 보유를 고려한 자산 비중을 결정하도록 했으며, 뉴스 임베딩과 재무지표의 상관 분석, 시퀀스 길이·집계 방식 비교 실험을 거쳐 백테스트로 수익률·변동성·샤프지수를 평가했습니다.', en: 'The RL team built a news-driven trading system that manages a portfolio using market-context embeddings learned from financial news. Daily market embeddings were trained JEPA-style on headlines and combined with prices and portfolio state into an RL environment; SAC and Q-learning agents with Transformer policy networks allocated assets under transaction costs, position limits and cash constraints. Experiments compared sequence lengths and aggregation schemes, and backtests evaluated return, volatility and Sharpe ratio.' },
      tech: ['JEPA', 'SAC · Q-learning', 'Transformer', 'Backtesting'],
      result: { ko: '텍스트 기반 시장 신호를 강화학습 정책에 통합하는 접근을 제시하고, 뉴스가 시장 국면 전환 포착에 기여하는 정도를 정량적으로 검증했습니다.', en: 'Integrated text-based market signals into an RL policy and quantified how news helps detect regime shifts.' },
      team: [ { name: '박수빈', cohort: 13 }, { name: '조지성', cohort: 13 }, { name: '권나연', cohort: 14 }, { name: '박창용', cohort: 14 } ] },
    { id: 'm252-wave', semester: '2025-2', type: 'modeling', field: 'mm', awarded: false,
      thumb: 'assets/projects/thumbs/m252-wave.webp', file: null,
      title: { ko: 'WAVE: 일상의 소리로 나만의 음악을', en: 'WAVE: Image-to-Audio Music Generation' },
      summary: { ko: '이미지의 분위기를 해석해 효과음을 만들고, 이를 악기별로 구조화해 음악으로 확장', en: 'Turns an image’s mood into sound effects, then structures them by instrument into music' },
      overview: { ko: '멀티모달팀은 입력 이미지의 분위기·질감·상황을 해석해 그에 어울리는 효과음과 간단한 음악을 자동 생성하는 image-to-audio 시스템 WAVE를 구축했습니다. 파이프라인은 이미지로부터 소리를 만드는 Image-to-Sound 단계와 생성된 소스를 악기별로 구조화해 음악으로 확장하는 Sound-to-Music 단계로 구성됩니다. Image-to-Sound에서는 AudioLDM2가 가장 자연스럽고 높은 품질의 효과음을 생성한다는 실험 결과를 바탕으로 VLM 기반 이미지→텍스트 프롬프트 변환을 정교하게 설계했고, Sound-to-Music에서는 생성된 사운드를 드럼·기타·베이스·키보드 등 악기로 매핑하고 세션별 soundfont를 적용한 뒤 음계에 맞춰 조합해 하나의 음악으로 재구성했습니다.', en: 'The multimodal team built WAVE, an image-to-audio system that reads a scene’s mood, texture and context and generates matching sound effects and simple music. An Image-to-Sound stage uses VLM-derived prompts with AudioLDM2 (found to yield the most natural, highest-quality effects), and a Sound-to-Music stage maps the generated sounds to drums, guitar, bass and keys, applies per-session soundfonts, and arranges them on a scale into a single track.' },
      tech: ['AudioLDM2', 'VLM', 'SoundFont', 'Python'],
      result: { ko: '이미지의 시각적 요소를 청각적 표현으로 변환하는 멀티모달 생성 모델을 구현해 새로운 시각–음향 인터랙션 가능성을 제시했습니다.', en: 'Implemented a multimodal generator that translates visual elements into sound, opening new visual–audio interactions.' },
      team: [ { name: '박시현', cohort: 13 }, { name: '서승범', cohort: 13 }, { name: '한연주', cohort: 13 }, { name: '이재원', cohort: 14 } ] },
    { id: 'm252-face', semester: '2025-2', type: 'modeling', field: 'cv', awarded: false,
      thumb: 'assets/projects/thumbs/m252-face.webp', file: null,
      title: { ko: '관상가 양반~ 이 자가 내 운명의 상대인가?', en: 'Face Reader: Ideal-Type Generation & Physiognomy' },
      summary: { ko: '취향 학습 기반 이상형 생성과 얼굴 랜드마크 기반 관상 해석을 한 파이프라인으로 통합', en: 'One pipeline for preference-learned ideal-type generation and landmark-based face reading' },
      overview: { ko: 'CV팀은 사용자의 얼굴 사진을 기반으로 개인 취향을 반영한 ‘이상형 생성’과 얼굴 특징에 기반한 ‘관상 해석’을 하나의 파이프라인으로 통합한 얼굴 분석 모델을 구축했습니다. ArcFace 임베딩과 FAISS로 얼굴 데이터를 정제하고, 월드컵 방식 선호 학습으로 사용자 취향 벡터를 생성한 뒤 SDXL·IP-Adapter로 선호도가 반영된 이상형 이미지를 생성했습니다. 동시에 MediaPipe FaceMesh로 478개 얼굴 랜드마크를 추출해 눈·코·입·광대 등의 형태적 지표를 산출하고, 이를 관상 백과와 연결해 자동 해석 문장을 생성했습니다. 전체 과정은 Python·ComfyUI 기반으로 자동화되었습니다.', en: 'The CV team unified preference-aware “ideal type” generation and feature-based physiognomy in one face-analysis pipeline. ArcFace embeddings and FAISS clean the face data, a tournament-style preference game learns a taste vector, and SDXL with IP-Adapter generates an ideal-type image reflecting it. In parallel, MediaPipe FaceMesh extracts 478 landmarks to compute shape metrics for eyes, nose, mouth and cheekbones, which are mapped to a physiognomy reference to produce automatic readings. The whole flow is automated in Python and ComfyUI.' },
      tech: ['ArcFace', 'FAISS', 'SDXL · IP-Adapter', 'MediaPipe FaceMesh', 'ComfyUI'],
      result: { ko: '사진 한 장으로 개인 취향 기반 이상형 이미지와 얼굴 특징 분석 결과를 함께 제공하는 시스템을 완성했습니다.', en: 'Delivers a preference-based ideal-type image and a facial-feature reading from a single photo.' },
      team: [ { name: '백승이', cohort: 13 }, { name: '강승우', cohort: 13 }, { name: '신태희', cohort: 14 }, { name: '윤동영', cohort: 14 } ] },
    { id: 'm252-prellm', semester: '2025-2', type: 'modeling', field: 'rec', awarded: false,
      thumb: 'assets/projects/thumbs/m252-prellm.webp', file: null,
      title: { ko: 'PRELLM: LLM 기반 논문 추천 시스템', en: 'PRELLM: Paper Recommendation Integrated with LLM' },
      summary: { ko: '이질적 그래프 HGNN 임베딩과 LLM 문맥 표현을 결합한 하이브리드 논문 추천', en: 'Hybrid paper recommendation combining heterogeneous-graph HGNN embeddings with LLM context' },
      overview: { ko: '그래프추천팀은 기존 논문 추천 시스템의 한계를 보완하기 위해 LLM과 그래프 신호를 결합한 하이브리드 추천 구조를 구축했습니다. 논문·저자·키워드 등으로 구성된 이질적 그래프를 구축하고 HeCo·HGMAE·MVSE 등 다양한 HGNN 모델을 학습해 그래프 상의 의미적 관계를 임베딩으로 추출했습니다. 이후 LLM이 생성하는 문맥적 표현과 그래프 임베딩을 연동하는 파이프라인을 구성해, 검색 쿼리나 사용자 관심 분야를 그래프 구조와 일치시키는 방식으로 추천 품질을 향상시켰습니다.', en: 'The graph team built a hybrid paper recommender that fuses LLM and graph signals. It constructed a heterogeneous graph of papers, authors and keywords, trained HGNN models such as HeCo, HGMAE and MVSE to embed semantic relations, and linked those embeddings with LLM-generated contextual representations so that search queries and user interests align with graph structure.' },
      tech: ['Heterogeneous GNN', 'HeCo · HGMAE · MVSE', 'LLM', 'PyTorch'],
      result: { ko: 'LLM의 자연어 이해와 HGNN의 구조적 표현력을 통합해 기존 서비스보다 정교한 논문 탐색·추천 가능성을 제시했습니다.', en: 'Combined LLM language understanding with HGNN structural power for finer-grained paper discovery.' },
      team: [ { name: '양재화', cohort: 13 }, { name: '이승현', cohort: 13 }, { name: '고서연', cohort: 14 }, { name: '김서윤', cohort: 14 } ] },
    /* ---------- 25-2 EDA 프로젝트 (노션 [25-2] EDA 프로젝트 페이지 기준) ---------- */
    { id: 'e252-game', semester: '2025-2', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/e252-game.webp', file: null,
      title: { ko: '게임 퍼블리셔 유튜브 콘텐츠 마케팅 전략 연구', en: 'YouTube Content Marketing Strategies of Game Publishers' },
      summary: { ko: 'IGDB·YouTube·Google Trends를 결합해 영상 유형·업로드 시점이 게이머 관심도에 미치는 효과를 추정', en: 'Estimating how video type and timing move gamer interest, using IGDB, YouTube and Google Trends' },
      overview: { ko: '마케팅팀은 글로벌 AAA 퍼블리셔들의 유튜브 콘텐츠 전략이 게이머 관심도 변화에 어떤 영향을 미치는지 분석하기 위해 IGDB·YouTube API·Google Trends 데이터를 통합한 정량 분석을 수행했습니다. 퍼블리셔의 포트폴리오 규모·플랫폼·장르·언어 다양성을 바탕으로 PCA와 K-means 클러스터링으로 유형을 세분화한 뒤, 콘텐츠 공개 전후의 검색량 변화를 Mixed-Effect ITS 모델로 추정해 트레일러·개발자 콘텐츠·시네마틱 등 영상 유형별 효과를 비교했습니다. 트레일러는 즉각적 관심 상승 효과가 가장 컸고 최근에는 개발자 콘텐츠와 시네마틱의 영향력도 빠르게 증가했으며, 출시 90일 이상 이전 업로드는 효과가 크게 감소했습니다.', en: 'The marketing team quantified how global AAA publishers’ YouTube strategies shift gamer interest by combining IGDB, YouTube API and Google Trends data. Publishers were segmented with PCA and K-means on portfolio size, platforms, genres and languages, and a mixed-effect interrupted-time-series model estimated search-volume changes around each upload by video type. Trailers produced the largest immediate lift, developer and cinematic content have been gaining influence, and uploads more than 90 days before launch lost most of their effect.' },
      tech: ['YouTube API · IGDB', 'Google Trends', 'PCA · K-means', 'Mixed-Effect ITS'],
      result: { ko: 'AAA는 다국어·멀티플랫폼 트레일러, 중소형은 장르 특화 개발자 콘텐츠, 신규 퍼블리셔는 장기 예열 니치 타깃 전략이 효과적임을 제시했습니다.', en: 'Recommended multilingual trailer campaigns for AAA, genre-focused developer content for mid-size, and long-lead niche strategies for new publishers.' },
      team: [ { name: '송채은', cohort: 13 }, { name: '박세현', cohort: 13 }, { name: '이승현', cohort: 13 }, { name: '박창용', cohort: 14 }, { name: '조재현', cohort: 14 } ] },
    { id: 'e252-insurance', semester: '2025-2', type: 'eda', field: 'ts', awarded: false,
      thumb: 'assets/projects/thumbs/e252-insurance.webp', file: null,
      title: { ko: '건강보험 데이터를 활용한 공·사 건강보험제도 분석', en: 'Public and Private Health Insurance: A Data-Driven Analysis' },
      summary: { ko: '급여 의료비 추세를 ARIMA로 예측하고 비급여 위험 스코어로 보장 사각지대를 평가', en: 'Forecasting covered medical costs with ARIMA and scoring non-covered risk to find coverage gaps' },
      overview: { ko: '경제팀은 국민건강보험과 실손의료보험 데이터를 기반으로 급여 의료비의 중기 추세를 예측하고 비급여 질환군의 정책 타당성을 검증하기 위해 정량적 분석을 수행했습니다. 질병 분류 체계(KCD)를 정비하고 진료비·급여비·본인부담금·보장률 등 재정 변수를 전처리한 뒤, ARIMA 모델로 급여 의료비의 증가 경향과 4·5세대 실손보험 기준 적용 시 보험금 지출 변화를 추정했습니다. 비급여 영역에서는 질병 중증도와 경제적 부담을 결합한 위험 스코어로 고위험군을 도출하고, 이를 기존 산정특례 질환과 비교해 정책 기준의 반영 정도와 보장 사각지대를 평가했습니다.', en: 'The economics team analyzed National Health Insurance and private indemnity-insurance data to forecast covered medical spending and test the policy rationale for non-covered disease groups. After standardizing KCD disease codes and preprocessing fiscal variables, ARIMA models projected covered-cost growth and the change in payouts under 4th/5th-generation indemnity rules. For non-covered care, a risk score combining severity and financial burden identified high-risk groups, which were compared with existing special-calculation diseases to assess coverage gaps.' },
      tech: ['ARIMA', 'KCD 분류', 'Risk Scoring', 'Python'],
      result: { ko: '건강보험 재정 건전성과 실손보험 보장 체계 개선을 위한 데이터 기반 정책 인사이트를 제시했습니다.', en: 'Provided data-driven policy insights for NHI fiscal soundness and indemnity-insurance coverage design.' },
      team: [ { name: '박지은', cohort: 7 }, { name: '박수빈', cohort: 13 }, { name: '이채원', cohort: 13 }, { name: '권나연', cohort: 14 }, { name: '이건일', cohort: 14 } ] },
    { id: 'e252-housing', semester: '2025-2', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/e252-housing.webp', file: null,
      title: { ko: '25.6.27 대책의 단기 정책효과와 18.9.13 대책의 장단기 정책효과 분석', en: 'Short- and Long-Run Effects of the 6.27 (2025) and 9.13 (2018) Housing Policies' },
      summary: { ko: '여론 감성 분석·패널 회귀(DiD+FE)·클러스터링으로 부동산 대책의 실질 효과를 다각도로 검증', en: 'Sentiment analysis, DiD panel regression and clustering to test real-estate policy effects' },
      overview: { ko: '도시환경팀은 2025.6.27 대책의 단기 효과와 2018.9.13 대책의 장·단기 영향을 비교하기 위해 뉴스·댓글 감성 분석, 패널 회귀(DiD+FE), 클러스터링, 주담대 영향 분석을 종합적으로 수행했습니다. 네이버 뉴스·YouTube 댓글 분석에서는 6.27 대책 직후 뉴스량이 크게 늘고 “대출·규제” 키워드가 두드러졌으며 과거 대비 부정 여론은 상대적으로 완화된 것으로 나타났습니다. KOSIS·부동산원 데이터 기반 패널 회귀에서는 9.13 대책이 매매가격지수에 유의한 효과를 보였고 선형추세항으로 평행추세 위반 가능성을 보정했습니다. K-Means 클러스터링에서는 규제지역의 단기 효과와 비규제지역 일부의 풍선효과가 확인되었으며, 주담대 부채·자산 분석에서는 정책 충격이 중하위 소득층에 더 크게 작용하는 것으로 나타났습니다.', en: 'The urban-environment team compared the short-run effect of the June 27, 2025 measures with the short- and long-run effects of the September 13, 2018 measures using news/comment sentiment, DiD panel regression with fixed effects, clustering and mortgage-impact analysis. News volume spiked after 6.27 with “loan/regulation” keywords and relatively softer negative sentiment; panel regression on KOSIS and REB data showed 9.13 significantly affected the sales price index, with a pre-trend term correcting parallel-trend violations; K-Means revealed short-run effects in regulated areas and balloon effects in some unregulated ones; and mortgage analysis showed the policy shock hit lower-middle-income households hardest.' },
      tech: ['Sentiment Analysis', 'DiD + Fixed Effects', 'K-Means', 'KOSIS · 부동산원'],
      result: { ko: '다양한 데이터를 결합해 부동산 정책의 실질 효과를 다각도로 검증하고 지역별 정책 파급력에 대한 전망을 제시했습니다.', en: 'Validated real-estate policy effects from multiple angles and projected regional policy spillovers.' },
      team: [ { name: '곽도윤', cohort: 13 }, { name: '백승이', cohort: 13 }, { name: '조지성', cohort: 13 }, { name: '어희정', cohort: 14 }, { name: '이재원', cohort: 14 } ] },
    { id: 'e252-cgm', semester: '2025-2', type: 'eda', field: 'ts', awarded: false,
      thumb: 'assets/projects/thumbs/e252-cgm.webp', file: null,
      title: { ko: 'CGM: 연속 혈당 모니터링 데이터를 활용한 혈당 변화 패턴 분석 및 Insulin Sensitivity 정량화', en: 'CGM: Glucose Pattern Analysis and Insulin Sensitivity Quantification' },
      summary: { ko: '세 개의 1형 당뇨 CGM 데이터셋으로 인슐린·탄수화물·심박수가 혈당에 미치는 시간 지연 효과를 모델링', en: 'Modeling the lagged effects of insulin, carbs and heart rate on glucose across three T1D CGM datasets' },
      overview: { ko: '의료팀은 연속혈당모니터링(CGM) 데이터로 인슐린 투여·탄수화물 섭취·심박수 변화가 혈당 패턴에 미치는 영향을 정량 분석하고 개인별 인슐린 민감도를 추정했습니다. PEDAP·BrisT1D·HUPA-UCM 세 개의 국제 1형 당뇨 데이터셋으로 개인별 혈당–인슐린–섭취량 구조를 모델링했으며, Linear Mixed Model과 ARIMA 기반 시계열 모델로 시간 지연 효과와 개인별 인슐린 민감도를 도출했습니다. 나이·체중·BMI·HbA1c 등 개인 특성과 민감도의 상관을 분석하고, 심박수 상승이 인슐린 분포와 작용 속도에 미치는 영향을 정량화해 운동·활동량이 혈당 강하 효율을 높인다는 점을 확인했습니다.', en: 'The medical team used continuous glucose monitoring data to quantify how insulin doses, carbohydrate intake and heart-rate changes shape glucose patterns and to estimate individual insulin sensitivity. Using three international type-1 diabetes datasets (PEDAP, BrisT1D, HUPA-UCM), linear mixed models and ARIMA time-series models captured lagged effects and per-person sensitivity; correlations with age, weight, BMI and HbA1c were examined, and higher heart rate was shown to speed insulin action, confirming that activity improves glucose-lowering efficiency.' },
      tech: ['Linear Mixed Model', 'ARIMA', 'PEDAP · BrisT1D · HUPA-UCM', 'Python'],
      result: { ko: '1형 당뇨 환자의 상태별 인슐린 필요량을 객관적으로 산정할 근거를 마련하고 개인 맞춤형 투약 알고리즘으로의 확장 가능성을 제시했습니다.', en: 'Established a basis for objectively estimating insulin needs and a path toward personalized dosing algorithms.' },
      team: [ { name: '서승범', cohort: 13 }, { name: '박시현', cohort: 13 }, { name: '양재화', cohort: 13 }, { name: '신태희', cohort: 14 }, { name: '여준호', cohort: 14 } ] },
    { id: 'e252-baseball', semester: '2025-2', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/e252-baseball.webp', file: null,
      title: { ko: '한국 야구의 국제경쟁력: KBO-NPB 지표를 중심으로', en: 'Korea’s International Baseball Competitiveness: KBO vs. NPB' },
      summary: { ko: '2005~2024 리그 지표·한일전 Elo·PCA 리그 품질 지수로 대표팀 경쟁력 하락의 원인을 진단', en: 'League metrics 2005–2024, Korea–Japan Elo ratings and a PCA league-quality index to diagnose the national team’s decline' },
      overview: { ko: '스포츠팀은 한국 야구의 국제 경쟁력 약화 원인을 분석하기 위해 KBO와 일본 NPB의 장기 성적 지표, 한·일전 기록, 리그 품질 지수를 정량적으로 비교했습니다. 2005~2024년 KBO·NPB의 투수·타자·속도 지표를 수집해 추세를 살펴본 결과 KBO가 전반적으로 낮은 수준이지만 격차가 지속적으로 확대된다고 보기는 어려웠습니다. 한·일전 국제대회 데이터로 산출한 Elo 레이팅에서는 2010년대 이후 한국 대표팀의 경쟁력이 일본 대비 꾸준히 하락하는 경향이 두드러졌고, PCA로 6개 핵심 지표를 통합한 ‘리그 품질 지수’와 국제 경쟁력 간에는 뚜렷한 상관관계가 나타나지 않아 단기전 변동성, 대표팀 구성 방식 등 외적 요인의 영향이 크다는 점이 드러났습니다.', en: 'The sports team compared long-run KBO and NPB performance metrics, Korea–Japan head-to-head records and a league-quality index to explain Korea’s declining international competitiveness. Pitching, hitting and velocity metrics from 2005–2024 showed KBO trailing NPB without a clearly widening gap; Elo ratings from international games showed a steady decline for Korea since the 2010s; and a PCA-based league-quality index showed no clear link with national-team results, pointing to external factors such as short-series variance and roster construction.' },
      tech: ['Elo Rating', 'PCA', 'KBO · NPB Stats', 'Python'],
      result: { ko: '리그 자체의 퇴보로 단정하긴 어렵지만 대표팀 경쟁력 저하는 분명하며, 선수 육성 구조와 대표팀 운영 방식의 개선이 필요함을 시사했습니다.', en: 'Found no clear league decline but a definite drop in national-team competitiveness, calling for changes in player development and team operations.' },
      team: [ { name: '김선기', cohort: 13 }, { name: '정주은', cohort: 13 }, { name: '김서윤', cohort: 14 }, { name: '신동준', cohort: 14 }, { name: '조재우', cohort: 14 } ] },
    { id: 'e252-press', semester: '2025-2', type: 'eda', field: 'nlp', awarded: false,
      thumb: 'assets/projects/thumbs/e252-press.webp', file: null,
      title: { ko: '한국 언론의 정치 성향 분석: 후쿠시마 오염수 보도 분석을 중심으로', en: 'Political Leanings of Korean Media: The Fukushima Wastewater Coverage' },
      summary: { ko: '감성 분석·BERTopic·LLM 스탠스 분류로 12개 언론사를 보수·온건·중립·진보 군집으로 분류', en: 'Sentiment, BERTopic and LLM stance classification cluster 12 outlets into conservative, moderate, neutral and progressive' },
      overview: { ko: '문화미디어팀은 후쿠시마 오염수 방류 보도를 사례로 한국 주요 언론사의 정치 성향을 정량적으로 규명하기 위한 다단계 NLP 분석을 수행했습니다. BIG KINDS에서 수집한 12개 언론사의 기사 데이터에 감성 분석, BERTopic 기반 토픽 모델링, LLM을 활용한 스탠스 분류를 적용해 각 언론사의 입장과 감정 패턴을 추출했습니다. 스탠스 비율과 감성 PCA 구성값으로 계층적 군집화를 실시한 결과 보수·온건·중립·진보로 구분되는 네 개의 보도 군집이 도출되었고, 언론사별 보도 톤·감정 표현 방식·정책 및 외교 이슈에 대한 입장 차이를 명확히 확인했습니다.', en: 'The culture/media team ran a multi-stage NLP analysis of Fukushima wastewater coverage to quantify the political leanings of major Korean outlets. Articles from 12 outlets collected via BIG KINDS were analyzed with sentiment analysis, BERTopic topic modeling and LLM stance classification; hierarchical clustering on stance ratios and sentiment PCA components produced four clear clusters — conservative, moderate, neutral and progressive — revealing distinct tones, emotional styles and positions on policy and diplomacy.' },
      tech: ['BIG KINDS', 'BERTopic', 'LLM Stance Classification', 'Hierarchical Clustering'],
      result: { ko: '독자 편향성 완화와 균형 잡힌 뉴스 소비를 위한 데이터 기반 접근의 필요성을 제안했습니다.', en: 'Argued for data-driven approaches to reduce reader bias and support balanced news consumption.' },
      team: [ { name: '이유주', cohort: 13 }, { name: '한연주', cohort: 13 }, { name: '구기현', cohort: 14 }, { name: '윤동영', cohort: 14 } ] },
    { id: 'e252-tourism', semester: '2025-2', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/e252-tourism.webp', file: null,
      title: { ko: '온라인 리뷰·인프라 통합으로 본 국내 관광객 유입 요인 분석', en: 'What Draws Domestic Tourists: Reviews and Infrastructure Combined' },
      summary: { ko: '공공 관광 인프라 지표와 네이버 지도 리뷰 감성을 결합해 지역별 방문자 수 결정 요인을 분석', en: 'Combining public tourism-infrastructure data with Naver Map review sentiment to explain regional visitor counts' },
      overview: { ko: '관광팀은 공공 관광 인프라 데이터와 네이버 지도 리뷰 데이터를 통합해 지역별 방문자 수를 결정하는 핵심 요인을 분석했습니다. 관광안내소·숙박·축제 등 정량 인프라 지표를 행정구역 단위로 정리하고, 리뷰 텍스트에 감성 분석과 키워드 임베딩을 수행해 정성 정보를 수치화한 뒤 회귀분석과 공간 시각화로 인사이트를 도출했습니다. 안내소 수가 방문자 수 증가와 가장 강한 연관성을 보였고 축제는 약한 양의 효과를, 숙박 시설은 단순 수량만으로는 유의한 영향을 설명하지 못했습니다. 상위 방문지는 긍정 감성이 높은 반면 하위 방문지는 불친절·가격·소음 등 부정 키워드가 두드러졌습니다.', en: 'The tourism team merged public tourism-infrastructure data with Naver Map reviews to identify what drives regional visitor counts. Infrastructure indicators (information centers, lodging, festivals) were aggregated by district, review text was quantified with sentiment analysis and keyword embeddings, and regression plus spatial visualization surfaced insights: information centers had the strongest association with visits, festivals a weak positive effect, and lodging counts alone no significant effect; top destinations showed high positive sentiment while low-ranked ones were marked by complaints about rudeness, price and noise.' },
      tech: ['Sentiment Analysis', 'Keyword Embedding', 'Regression', 'Spatial Visualization'],
      result: { ko: '인프라 개선·축제 전략·숙박 품질 관리 등 지역 관광 활성화를 위한 실질적 정책·서비스 기획 방안을 제안했습니다.', en: 'Proposed concrete policy and service plans — infrastructure upgrades, festival strategy, lodging quality — to boost regional tourism.' },
      team: [ { name: '강승우', cohort: 13 }, { name: '이진우', cohort: 13 }, { name: '고서연', cohort: 14 }, { name: '신지원', cohort: 14 } ] },
    /* ---------- 25-1 모델링 프로젝트 (노션 [25-1] 모델링 프로젝트 페이지 기준) ---------- */
    { id: 'm251-scope', semester: '2025-1', type: 'modeling', field: 'cv', awarded: false,
      thumb: 'assets/projects/thumbs/m251-scope.webp', file: null,
      title: { ko: 'SCOPE: Slice Consistent Diffusion Model for Amyloid PET Scan Time Reduction', en: 'SCOPE: Slice-Consistent Diffusion for Amyloid PET Scan Time Reduction' },
      summary: { ko: '4분 촬영 PET 영상을 20분 촬영 수준으로 복원하는 슬라이스 일관 확산 모델', en: 'A slice-consistent diffusion model restoring 4-minute PET scans to 20-minute quality' },
      overview: { ko: 'CV팀은 PET 영상 촬영 과정에서 환자의 불편과 움직임으로 인한 영상 품질 저하 문제를 해결하기 위해 ADNI Amyloid PET 영상을 활용해 Slice Consistent Diffusion Model을 구현했습니다. 4분만 촬영된 PET 영상으로 전체 시간(20분) 촬영 수준의 품질을 복원하는 것을 목표로, 영상의 위치와 크기를 표준화하는 전처리를 수행하고 2D Brownian Bridge Diffusion Model(BBDM)에 Style Key Conditioning(SKC)과 Inter-Slice Trajectory Alignment(ISTA) 기법을 적용해 slice 간 일관성을 유지했습니다. Diffusion 기반 모델은 기존 GAN 대비 우수한 성능(NRMSE 0.042, SSIM > 0.9)을 보였습니다.', en: 'The CV team built a slice-consistent diffusion model on ADNI amyloid PET scans to counter quality loss from patient discomfort and motion, aiming to restore 4-minute acquisitions to full 20-minute quality. After standardizing image position and scale, a 2D Brownian Bridge Diffusion Model was augmented with Style Key Conditioning and Inter-Slice Trajectory Alignment to keep slices consistent. The diffusion model outperformed GAN baselines (NRMSE 0.042, SSIM > 0.9).' },
      tech: ['BBDM', 'Style Key Conditioning', 'ISTA', 'ADNI PET'],
      result: { ko: 'NRMSE 0.042 · SSIM > 0.9로 GAN 대비 우수한 복원 성능을 달성하고, 고품질 영상을 통한 알츠하이머 진단 정확도 향상 가능성을 입증했습니다.', en: 'Achieved NRMSE 0.042 and SSIM > 0.9, beating GANs and showing potential to improve Alzheimer’s diagnosis.' },
      team: [ { name: '이정우', cohort: 12 }, { name: '신영군', cohort: 12 }, { name: '서승범', cohort: 13 }, { name: '송채은', cohort: 13 } ] },
    { id: 'm251-webtoon', semester: '2025-1', type: 'modeling', field: 'gen', awarded: false,
      thumb: 'assets/projects/thumbs/m251-webtoon.webp', file: null,
      title: { ko: '웹툰 남주가 토르였으면', en: 'What If the Webtoon Lead Were Thor?' },
      summary: { ko: '웹툰 주인공 얼굴을 실제 인물로 교체하는 스타일 전이·페이스 스왑·인페인팅 파이프라인', en: 'A style-transfer, face-swap and inpainting pipeline that recasts a webtoon lead as a real person' },
      overview: { ko: '생성모델팀은 웹툰 『국세청 망나니』의 주인공을 실제 인물(예: 크리스 헴스워스)로 대체해 콘텐츠를 새롭게 생성하는 모델을 개발했습니다. 148화 분량의 웹툰 이미지를 수집하고 Face++ API로 얼굴 영역을 추출해 고화질 얼굴 데이터셋을 구축한 뒤, CLIP·Logistic Regression·파인튜닝한 VGG19로 얼굴 분류기를 만들었습니다. Style Transfer에는 JoJoGAN을 선택하고 Identity Loss를 추가해 캐릭터의 정체성을 보존하면서 자연스러운 전이를 구현했으며, Face Swap 모델로 표정·시선·각도를 맞추고 U-Net·PatchGAN 기반 Inpainting으로 합성 주변부를 복원했습니다. 마지막으로 OCR로 텍스트를 추출해 주인공 이름을 새 이름으로 교체했습니다.', en: 'The generative-model team recast the protagonist of the webtoon “국세청 망나니” as a real person (e.g., Chris Hemsworth). From 148 episodes it built a high-quality face dataset via Face++ detection, trained face classifiers (CLIP, logistic regression, fine-tuned VGG19), used JoJoGAN with an added identity loss for style transfer, aligned expression, gaze and pose with a face-swap model, cleaned seams with U-Net/PatchGAN inpainting, and swapped the character’s name in the text via OCR.' },
      tech: ['JoJoGAN', 'Face Swap', 'U-Net · PatchGAN Inpainting', 'CLIP · VGG19', 'OCR'],
      result: { ko: '이미지 생성·얼굴 합성·텍스트 교체를 통합해 웹툰 콘텐츠의 새로운 창작 가능성을 제시했습니다.', en: 'Integrated generation, face synthesis and text replacement to open new creative possibilities for webtoons.' },
      team: [ { name: '곽도윤', cohort: 13 }, { name: '김건우', cohort: 12 }, { name: '윤형진', cohort: 10 }, { name: '이유주', cohort: 13 } ] },
    { id: 'm251-jobfit', semester: '2025-1', type: 'modeling', field: 'nlp', awarded: false,
      thumb: 'assets/projects/thumbs/m251-jobfit.webp', file: null,
      title: { ko: 'JOB: Job-fit Optimization via Behavioral AI', en: 'JOB: Job-fit Optimization via Behavioral AI' },
      summary: { ko: '5천 건 채용 공고를 BGE-m3 임베딩으로 검색하고 LLM이 매칭 근거를 설명하는 추천 서비스', en: 'Semantic search over 5k job postings with BGE-m3 and LLM-written match explanations' },
      overview: { ko: 'NLP1팀은 취업 시장의 정보 과부하와 의미 불일치 문제를 해결하기 위해 5천여 건의 개발·경영·마케팅 공고를 크롤링·정제하고 BGE-m3 임베딩과 ChromaDB 기반 벡터 검색 파이프라인을 구축했습니다. 하드 필터(경력·지역·근무형태)와 소프트 필터(자격·복지 키워드)를 계층적으로 적용해 Top 5 공고를 실시간 추천하며, OpenAI LLM이 매칭 근거를 자연어로 설명해 사용자가 추천 이유를 즉시 확인할 수 있습니다. 오프라인 테스트에서 BGE-m3가 Jina-v3 대비 종합점수 +31점을 기록해 의미 기반 검색의 효과를 입증했습니다.', en: 'NLP1 tackled information overload and semantic mismatch in the job market by crawling and cleaning ~5,000 dev, business and marketing postings and building a BGE-m3 + ChromaDB vector search pipeline. Hierarchical hard filters (experience, region, work type) and soft filters (qualifications, benefits) return the top 5 postings in real time, while an OpenAI LLM explains each match in natural language. In offline tests BGE-m3 beat Jina-v3 by 31 points on the composite score.' },
      tech: ['BGE-m3', 'ChromaDB', 'OpenAI LLM', 'Python'],
      result: { ko: 'BGE-m3가 Jina-v3 대비 +31점으로 의미 기반 검색의 효과를 입증했으며, HR 챗봇·커리어 플랫폼으로의 확장 가능성을 제시했습니다.', en: 'BGE-m3 outscored Jina-v3 by +31, validating semantic search and pointing to HR chatbot and career-platform extensions.' },
      team: [ { name: '김은희', cohort: 12 }, { name: '추준식', cohort: 12 }, { name: '이승현', cohort: 13 }, { name: '이진우', cohort: 13 } ] },
    { id: 'm251-goldnews', semester: '2025-1', type: 'modeling', field: 'nlp', awarded: false,
      thumb: 'assets/projects/thumbs/m251-goldnews.webp', file: null,
      title: { ko: '금 나와라 뚝딱!', en: 'Beginner-Friendly Economic News Assistant' },
      summary: { ko: '경제 초보자를 위한 뉴스 요약·용어 설명·유사 뉴스 검색 개인화 시스템', en: 'Personalized economic-news summaries, term explanations and similar-article search for beginners' },
      overview: { ko: 'NLP2팀은 경제 이해도가 낮은 사용자도 쉽게 접근할 수 있도록 네이버 경제뉴스 데이터를 수집하고 주요 내용을 요약해 초보자 친화적인 설명을 제공하는 시스템을 구축했습니다. LLM 기반 용어 추출과 RAG 기반 용어 설명 모듈, NER 기반 유사 뉴스 검색, 사용자의 관심 기업·인물 중심 쿼리 확장 기능을 통해 개인화된 금융 뉴스 탐색을 구현했습니다.', en: 'NLP2 built a system that collects Naver economic news and summarizes it with beginner-friendly explanations for readers with low financial literacy. LLM-based term extraction with a RAG explanation module, NER-based similar-news search, and query expansion around users’ companies and people of interest enable personalized financial-news exploration.' },
      tech: ['LLM', 'RAG', 'NER', 'Python'],
      result: { ko: '요약·용어 설명·유사 뉴스 탐색을 결합해 경제 초보자를 위한 개인화 뉴스 탐색 경험을 구현했습니다.', en: 'Combined summarization, term explanation and similar-news search into a personalized experience for beginners.' },
      team: [ { name: '김지은', cohort: 12 }, { name: '조정흠', cohort: 12 }, { name: '백승이', cohort: 13 }, { name: '이채원', cohort: 13 }, { name: '한연주', cohort: 13 } ] },
    { id: 'm251-lookat', semester: '2025-1', type: 'modeling', field: 'mm', awarded: false,
      thumb: 'assets/projects/thumbs/m251-lookat.webp', file: null,
      title: { ko: 'LOOKAT: Live Online Observation for Keeping Attention Tracked with Eye-tracking', en: 'LOOKAT: Live Online Observation for Keeping Attention Tracked with Eye-tracking' },
      summary: { ko: '웹캠 시선 추적과 OCR로 난독증을 실시간 진단하고 맞춤 피드백을 주는 학습 지원 시스템', en: 'Webcam eye-tracking plus OCR to detect dyslexia in real time and give tailored reading feedback' },
      overview: { ko: '멀티모달팀은 온라인 학습 환경에서 학습자의 집중력 저하와 이해도 감소, 특히 난독증(Dyslexia) 학생의 학습 부진 문제를 해결하고자 했습니다. 웹캠을 활용한 실시간 시선 추적(Eye-Tracking) 시스템으로 학습자의 시선 데이터를 수집해 텍스트를 읽는 방식과 시선 이동 패턴을 분석하고, OCR과 분류모델을 접목해 시선 데이터와 읽기 행동을 종합적으로 해석함으로써 난독증의 주요 특성을 파악하도록 했습니다. 이를 통해 난독증 여부를 실시간으로 진단하고, 이해가 어려운 텍스트에 즉각적인 피드백을 제공하는 맞춤형 학습 지원 시스템을 개발했습니다.', en: 'The multimodal team addressed attention loss and comprehension drops in online learning, especially for students with dyslexia. A webcam-based real-time eye-tracking system captures gaze data to analyze reading patterns, and OCR combined with a classifier interprets gaze and reading behavior together to detect dyslexia’s key traits. The result is a support system that diagnoses dyslexia in real time and gives immediate feedback on hard-to-read text.' },
      tech: ['Eye-tracking', 'OCR', 'Classification', 'Webcam'],
      result: { ko: 'AI 교과서·특수교육 소프트웨어 등 교육 분야에 적용 가능한 실시간 난독증 진단·피드백 시스템을 제시했습니다.', en: 'Proposed a real-time dyslexia diagnosis and feedback system applicable to AI textbooks and special-education software.' },
      team: [ { name: '백민경', cohort: 12 }, { name: '서지니', cohort: 12 }, { name: '복지민', cohort: 12 }, { name: '양재화', cohort: 13 }, { name: '조지성', cohort: 13 } ] },
    { id: 'm251-wine', semester: '2025-1', type: 'modeling', field: 'rec', awarded: false,
      thumb: 'assets/projects/thumbs/m251-wine.webp', file: null,
      title: { ko: 'The Right Wine for You', en: 'The Right Wine for You' },
      summary: { ko: 'Vivino 크롤링 벤치마크에서 희소 그래프 데이터용 하이브리드 추천 모델 비교', en: 'Benchmarking hybrid recommenders for sparse graph data on a self-crawled Vivino dataset' },
      overview: { ko: '추천시스템팀은 와인 추천을 주제로 희소성이 강한 그래프 데이터에서의 하이브리드 추천 시스템 구축을 진행했습니다. Vivino 사이트를 직접 크롤링해 벤치마크를 구축하고, 기존 사용자와 신규 사용자 모두를 위한 추천을 목표로 하이브리드 추천 시스템 4가지와 baseline인 LightGCN을 구현해 성능을 비교했습니다. LightGCN·KGAT·MCCF·MKR·Gformer 중 Gformer가 Recall@20, NDCG@20, Precision@20 모두에서 가장 좋은 성능을 보였습니다.', en: 'The RecSys team built hybrid recommenders for highly sparse graph data using wine as the domain. It crawled Vivino to create a benchmark, targeted both existing and new users, and compared four hybrid models against a LightGCN baseline. Among LightGCN, KGAT, MCCF, MKR and Gformer, Gformer scored highest on Recall@20, NDCG@20 and Precision@20.' },
      tech: ['LightGCN', 'KGAT', 'MCCF · MKR', 'Gformer'],
      result: { ko: 'Gformer가 Recall@20·NDCG@20·Precision@20 전 지표에서 최고 성능을 기록하며 희소 데이터에 강한 모델임을 확인했습니다.', en: 'Gformer led on every metric, proving the most robust model for sparse data.' },
      team: [ { name: '한은결', cohort: 11 }, { name: '김민규', cohort: 12 }, { name: '김선기', cohort: 13 }, { name: '박세현', cohort: 13 }, { name: '정주은', cohort: 13 } ] },
    { id: 'm251-siuu', semester: '2025-1', type: 'modeling', field: 'rl', awarded: false,
      thumb: 'assets/projects/thumbs/m251-siuu.webp', file: null,
      title: { ko: 'SIUU: A Reinforcement-Learned Optimizer', en: 'SIUU: A Reinforcement-Learned Optimizer' },
      summary: { ko: 'Hand-made 옵티마이저와 LR 스케줄러를 모방학습 + PPO·DQN으로 대체하는 학습된 최적화기', en: 'Replacing hand-crafted optimizers and LR schedulers with a learned optimizer trained via imitation and PPO/DQN' },
      overview: { ko: '강화학습팀은 딥러닝 모델 학습에 쓰이는 optimizer가 모두 hand-made라는 점에 문제를 제기하고, 이를 신경망으로 자동화하는 한편 최적화 과정을 sequential decision 문제로 해석해 강화학습으로 최적화하는 방식을 제시했습니다. Optimizer의 차원이 커서 차원이 작은 LR 스케줄러(LRS)도 함께 최적화했으며, 기존 hand-made optimizer와 LRS를 imitation learning으로 학습한 뒤 PPO·DQN을 사용해 학습이 일정 threshold까지 빠르게 수렴하도록 reward를 설계해 훈련했습니다.', en: 'The RL team questioned why deep-learning optimizers are all hand-crafted, automating them with neural networks and framing optimization as a sequential decision problem solved with RL. Because optimizers are high-dimensional, the lower-dimensional LR scheduler was optimized jointly: existing optimizers and schedulers were first imitated, then PPO and DQN agents were trained with rewards for reaching a convergence threshold quickly.' },
      tech: ['Imitation Learning', 'PPO', 'DQN', 'Learned Optimizer'],
      result: { ko: '옵티마이저와 LR 스케줄러 설계를 강화학습으로 자동화하는 접근을 제시했습니다.', en: 'Proposed automating optimizer and LR-scheduler design with reinforcement learning.' },
      /* ※ 노션 표지에 팀원이 표기되지 않아 비워 둠 — 명단 확인 후 채워 주세요. (12·13기 중 다른 팀에 없는 인원: 전종욱, 강승우, 박수빈, 박시현) */
      team: [] },
    /* ---------- 25-1 EDA 프로젝트 (노션 [25-1] EDA 프로젝트 페이지 기준) ---------- */
    { id: 'e251-marketing', semester: '2025-1', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/e251-marketing.webp', file: null,
      title: { ko: '서울시 인구 이동·카드 소비 분석 및 지역 맞춤형 마케팅 전략 제안', en: 'Seoul Mobility & Card Spending Analysis for Local Marketing' },
      summary: { ko: '강남·서초·송파 상권의 인구 유입과 카드 소비 특성을 분석해 지역 특화 마케팅 전략을 제안', en: 'Analyzing footfall and card spending in Gangnam, Seocho and Songpa to propose district-specific marketing' },
      overview: { ko: '마케팅팀은 서울시 주요 상권(강남구·서초구·송파구)을 중심으로 인구 유입과 카드 소비 데이터를 분석해 지역별 소비 특성과 트렌드를 파악했습니다. 이를 바탕으로 SSG페이 연동 팝업스토어·커뮤니티 이벤트, 랜드마크 할인 패스, 시간대별 소액 결제 이벤트, 프리미엄 네트워킹 라운지 등 지역별로 특화된 마케팅 전략을 제안했습니다.', en: 'The marketing team analyzed population inflow and card-spending data for Seoul’s key commercial districts (Gangnam, Seocho, Songpa) to characterize local consumption patterns, then proposed district-specific strategies such as SSG Pay-linked pop-up stores and community events, landmark discount passes, time-of-day micro-payment promotions and premium networking lounges.' },
      tech: ['Card Spending Data', 'Population Mobility Data', 'EDA', 'Python'],
      result: { ko: '지역별 소비 특성에 맞춘 실행 가능한 마케팅 전략을 제안했습니다.', en: 'Delivered actionable, district-tailored marketing strategies.' },
      team: [ { name: '백두형', cohort: 11 }, { name: '백민경', cohort: 12 }, { name: '백승이', cohort: 13 }, { name: '강승우', cohort: 13 } ] },
    { id: 'e251-esg', semester: '2025-1', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/e251-esg.webp', file: null,
      title: { ko: 'ESG 활동이 기업 재무지표에 미치는 영향 분석', en: 'How ESG Activity Affects Corporate Financials' },
      summary: { ko: '코스피 상장사 패널 분석으로 ESG 등급과 8개 재무지표의 관계를 산업별로 비교', en: 'Panel analysis of KOSPI firms relating ESG ratings to eight financial metrics across industries' },
      overview: { ko: '경제팀은 기업의 ESG(환경·사회·지배구조) 활동이 재무지표에 미치는 영향을 분석하기 위해 코스피 상장 기업 데이터를 수집해 정량 분석을 수행했습니다. 수익성·안정성·활동성·유동성 등 8가지 재무지표를 중심으로 ESG 등급과의 관계를 패널 분석 기법으로 평가했으며, 당해년도와 다음 해의 영향을 구분해 살펴보았습니다. 산업별로는 18개 주요 산업군을 대상으로 개별 분석과 군집화를 진행해 ESG 영향력의 구조적 차이를 비교했습니다.', en: 'The economics team collected KOSPI-listed company data to quantify how ESG activity affects financial performance. Panel analysis related ESG ratings to eight metrics spanning profitability, stability, activity and liquidity, separating same-year and next-year effects, and 18 major industries were analyzed individually and clustered to compare structural differences in ESG impact.' },
      tech: ['Panel Analysis', 'Clustering', 'KOSPI Financial Data', 'Python'],
      result: { ko: '기업 전략 수립에 도움이 되는 산업별 ESG 영향 인사이트를 제공했습니다.', en: 'Provided industry-level ESG impact insights to inform corporate strategy.' },
      team: [ { name: '이정우', cohort: 12 }, { name: '서지니', cohort: 12 }, { name: '김선기', cohort: 13 }, { name: '이승현', cohort: 13 }, { name: '한연주', cohort: 13 } ] },
    { id: 'e251-climate', semester: '2025-1', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/e251-climate.webp', file: null,
      title: { ko: '기후동행카드 범위 확장을 위한 데이터 기반 분석 및 제안', en: 'Expanding the Climate Card: A Data-Driven Proposal' },
      summary: { ko: '지하철 이동·승하차 데이터와 DiD 분석으로 기후동행카드 확대 구간과 최적 가격을 산정', en: 'Subway flow data and DiD analysis to pick expansion segments and price points for Seoul’s Climate Card' },
      overview: { ko: '도시환경팀은 수도권 도시철도 중심의 기후동행카드 범위 확장을 위해 다양한 교통 데이터와 인구·상권 데이터를 활용해 분석을 수행했습니다. 지하철 이용자의 이동 경로 및 승하차 수요를 분석해 적용 범위 확대가 필요한 주요 역과 구간을 선정하고, DiD(Difference-in-Differences) 분석으로 정책 시행에 따른 승객 수 변화를 평가했습니다. 추가로 머신러닝·딥러닝 모델로 예측한 승객 수를 기반으로 클러스터링을 수행해 최적의 카드 가격을 산정했습니다.', en: 'The urban-environment team analyzed transit, population and commercial data to guide expansion of Seoul’s Climate Card across the metropolitan rail network. Passenger routes and boarding demand identified priority stations and segments, a difference-in-differences analysis measured ridership changes after the policy, and clustering on ML/DL ridership forecasts derived optimal card prices.' },
      tech: ['Difference-in-Differences', 'ML · DL Forecasting', 'Clustering', 'Transit Data'],
      result: { ko: '빅데이터 기반의 정량적 접근으로 정책 결정을 지원하고 이용자 중심의 교통 정책 수립 방향을 제시했습니다.', en: 'Supported policy decisions with quantitative evidence and charted a user-centered transit policy direction.' },
      team: [ { name: '김건우', cohort: 12 }, { name: '김은희', cohort: 12 }, { name: '박시현', cohort: 13 }, { name: '박세현', cohort: 13 } ] },
    { id: 'e251-er', semester: '2025-1', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/e251-er.webp', file: null,
      title: { ko: '응급실 과밀화 요인 분석 및 완화 방안 제안', en: 'Drivers of Emergency Room Overcrowding and How to Ease Them' },
      summary: { ko: '병상포화지수를 중심으로 사회적·개인적 요인을 분석해 응급실 과밀화 해소 방안을 제안', en: 'Analyzing social and individual factors behind ER bed saturation to propose relief measures' },
      overview: { ko: '의료팀은 응급실 과밀화 문제를 종합적으로 이해하고자 병상포화지수를 중심으로 사회적·개인적 요인에 대한 데이터를 분석했습니다. 사회적 요인에 대해서는 다양한 국가 통계 지표를 활용해 다중 회귀 분석을 실시했고, 개인적 요인은 한국의료패널 데이터로 응급실 이용 행태와 관련된 특성을 파악했습니다.', en: 'The medical team examined ER overcrowding through the bed-saturation index, running multiple regression on national statistics for social factors and analyzing Korea Health Panel data for individual ER-use behavior.' },
      tech: ['Multiple Regression', '한국의료패널', 'National Statistics', 'Python'],
      result: { ko: '중증응급환자 관리, 비응급환자 분산, 1차 의료기관 기능 강화 등 응급실 과밀화 해소를 위한 정책 방안을 제안했습니다.', en: 'Proposed policies including critical-patient management, non-urgent patient diversion and stronger primary care.' },
      team: [ { name: '추준식', cohort: 12 }, { name: '김지은', cohort: 12 }, { name: '곽도윤', cohort: 13 }, { name: '서승범', cohort: 13 } ] },
    { id: 'e251-sochi', semester: '2025-1', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/e251-sochi.webp', file: null,
      title: { ko: '2014 소치올림픽 판정 논란 공정성 분석', en: 'Fairness of Judging at the 2014 Sochi Olympics' },
      summary: { ko: '미디어·선수 기록·심판·국가 관점에서 여자 피겨 판정의 일관성과 편향을 분석', en: 'Examining consistency and bias in women’s figure-skating judging across media, records, judges and nations' },
      overview: { ko: '스포츠팀은 2014년 소치 동계올림픽 여자 피겨 스케이팅 판정 논란을 미디어, 선수 기록, 심판, 국가 등 다양한 관점에서 분석했습니다. 여러 분석 도구를 활용한 결과 피겨 스케이팅은 심판의 주관적 판단이 점수에 반영되는 종목이기 때문에 점수의 일관성이 떨어지는 경향이 있음을 확인했고, 강대국 출신 선수들이 상대적으로 높은 점수를 받는 경향도 발견했습니다.', en: 'The sports team analyzed the 2014 Sochi women’s figure-skating judging controversy from the perspectives of media, athlete records, judges and nations. The analysis showed that scores in a subjectively judged sport tend to be inconsistent, and that skaters from powerful nations tended to receive relatively higher marks.' },
      tech: ['EDA', 'Statistical Analysis', 'Figure Skating Scoring Data', 'Python'],
      result: { ko: '공정한 스포츠 환경 조성을 위해 심판 판정의 투명성을 강화할 필요가 있음을 제안했습니다.', en: 'Recommended greater transparency in judging to ensure fair competition.' },
      team: [ { name: '신영군', cohort: 12 }, { name: '김민규', cohort: 12 }, { name: '박수빈', cohort: 13 }, { name: '이유주', cohort: 13 }, { name: '조지성', cohort: 13 } ] },
    { id: 'e251-tvad', semester: '2025-1', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/e251-tvad.webp', file: null,
      title: { ko: '광고DB 데이터 기반 TV광고 시청률을 높이는 요인 분석', en: 'What Raises TV Ad Ratings: An Ad-Database Analysis' },
      summary: { ko: '광고 시간대·길이·제품 카테고리와 시청률의 관계를 분석해 편성 전략을 제안', en: 'Relating ad slot, length and product category to ratings to guide scheduling strategy' },
      overview: { ko: '미디어팀은 광고 DB 데이터를 바탕으로 TV 광고 시청률에 영향을 미치는 다양한 요인을 분석했습니다. 광고 시간대, 광고 길이, 제품 카테고리 등 변수 간의 관계를 살펴보고 시청률과의 상관성을 파악해, 광고 효과를 극대화할 수 있는 전략적 시간대 선택, 시청률이 높은 광고 유형 식별, 광고 길이 최적화 등의 인사이트를 도출했습니다.', en: 'The media team analyzed an advertising database to identify what drives TV ad ratings, examining relationships among time slot, ad length and product category and their correlation with ratings, and deriving insights on strategic slot selection, high-rating ad types and length optimization.' },
      tech: ['Advertising DB', 'Correlation Analysis', 'EDA', 'Python'],
      result: { ko: '보다 효과적인 광고 기획 및 편성 전략 수립을 위한 데이터 기반 의사결정 방안을 제안했습니다.', en: 'Proposed data-driven decision support for more effective ad planning and scheduling.' },
      team: [ { name: '복지민', cohort: 12 }, { name: '송채은', cohort: 13 }, { name: '이채원', cohort: 13 }, { name: '정주은', cohort: 13 } ] },
    { id: 'e251-school', semester: '2025-1', type: 'eda', field: 'da', awarded: false,
      thumb: 'assets/projects/thumbs/e251-school.webp', file: null,
      title: { ko: '학령인구 감소에 따른 폐교 위험 학교 예측 프로젝트', en: 'Predicting Schools at Risk of Closure amid Declining Enrollment' },
      summary: { ko: '학교 위치·입학생·출생아 데이터로 초·중·고·대학의 폐교 위험을 예측하고 지역 격차를 분석', en: 'Forecasting closure risk for schools and universities from location, enrollment and birth data' },
      overview: { ko: '교육팀은 출산율 저하로 인한 학령인구 감소 문제를 바탕으로 초·중·고·대학교의 폐교 위험을 예측하기 위해 다양한 교육 및 인구 통계 데이터를 분석했습니다. 학교 위치, 입학생 수, 출생아 수 등의 정보를 종합해 향후 수십 년 내 폐교 가능성이 높은 학교들을 예측하고, 수도권과 비수도권 간 대학 입학생 격차의 심화도 함께 분석했습니다.', en: 'The education team analyzed education and demographic data to predict which elementary, secondary and tertiary schools face closure as the school-age population shrinks. Combining school locations, enrollment and birth counts, it forecast schools likely to close within decades and examined the widening enrollment gap between the capital region and other areas.' },
      tech: ['Demographic Data', 'Prediction', 'EDA', 'Python'],
      result: { ko: '데이터 기반 교육 정책 수립과 지역별 맞춤형 대응 전략 마련에 실질적인 인사이트를 제공했습니다.', en: 'Provided practical insights for data-driven education policy and region-specific responses.' },
      team: [ { name: '전종욱', cohort: 12 }, { name: '조정흠', cohort: 12 }, { name: '양재화', cohort: 13 }, { name: '이진우', cohort: 13 } ] },
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

  /* ---------- 운영진 ----------
     ★ 운영진 수정 방법: people 배열의 항목을 고치세요. dept 는 groups 의 id 와 맞춰야 합니다.
       tagline / highlights 는 비워도 됩니다(해당 영역이 숨겨짐).
       projects 에는 위 projects 배열의 id 를 넣으면 프로젝트 상세로 연결되는 칩이 표시됩니다.
       photo: 'assets/people/파일명.png' 로 사진 고정, null 이면 드래그&드롭 슬롯. */
  staff: {
    title: { ko: '운영진', en: 'Leadership' },
    intro: { ko: '2026학년도 2학기 Data Science Lab을 이끄는 15기 운영진입니다. 회장단과 학술부·운영부·홍보부가 세션 커리큘럼, 프로젝트, 기업 협력, 대외 소통을 나누어 맡고 있습니다.', en: 'The 15th-cohort leadership team running Data Science Lab in Fall 2026. The executives and the Academic, Operations and PR teams share responsibility for curriculum, projects, corporate partnerships and communications.' },
    term: { ko: '2026-2 · 15기 운영진', en: 'Fall 2026 · 15th Cohort' },
    projectsLabel: { ko: 'DSL 프로젝트', en: 'DSL projects' },
    note: { ko: '운영진에게 연락하시려면 학회 공식 이메일로 문의해 주세요.', en: 'To reach the leadership team, please write to the official DSL email.' },
    groups: [
      { id: 'exec', title: { ko: '회장단', en: 'Executives' }, featured: true,
        desc: { ko: '학회 운영 전반을 총괄하고, 지도교수님·기업 파트너와의 소통을 담당합니다.', en: 'Oversees the society and represents DSL to the advisor and corporate partners.' } },
      { id: 'academic', title: { ko: '학술부', en: 'Academic Team' },
        desc: { ko: '세션 커리큘럼과 스터디를 설계하고, 프로젝트 방향과 품질을 함께 관리합니다.', en: 'Designs the session curriculum and studies, and guides project direction and quality.' } },
      { id: 'ops', title: { ko: '운영부', en: 'Operations Team' },
        desc: { ko: '정기 세션·행사 운영, 일정과 예산, 학회 내부 인프라를 관리합니다.', en: 'Runs sessions and events, and manages schedules, budget and internal infrastructure.' } },
      { id: 'pr', title: { ko: '홍보부', en: 'PR Team' },
        desc: { ko: '모집 홍보와 SNS·홈페이지 등 대외 채널을 운영하고 학회 활동을 기록합니다.', en: 'Handles recruiting campaigns, social and web channels, and documents DSL activities.' } }
    ],
    people: [
      { id: 'kim-jaehyun', dept: 'exec', cohort: 15,
        name: { ko: '김재현', en: 'Jaehyun Kim' },
        role: { ko: '회장', en: 'President' },
        major: { ko: '컴퓨터과학과 22', en: 'Computer Science ’22' },
        tagline: { ko: '생성형 AI와 프로덕트 개발을 잇는 PM·프론트엔드 개발자', en: 'PM and frontend developer bridging generative AI and product.' },
        highlights: [
          { ko: '연세대학교 제1회 Gen AI 경진대회 금상', en: 'Gold Prize, 1st Yonsei Gen AI Competition' },
          { ko: '연세대학교 산학협력 앱 개발 프로젝트 PM / Frontend Developer', en: 'PM & frontend developer, Yonsei industry-academia app project' },
          { ko: 'LG Aimers 7기 수료', en: 'LG Aimers 7th cohort' },
          { ko: 'Popup Studio Korea AI Engineer 인턴', en: 'AI engineer intern, Popup Studio Korea' }
        ],
        projects: ['heart-cvgnal', 'eda-economy'],
        photo: null },
      { id: 'lee-jiwon', dept: 'exec', cohort: 15,
        name: { ko: '이지원', en: 'Jiwon Lee' },
        role: { ko: '부회장', en: 'Vice President' },
        major: { ko: '응용통계학과 23', en: 'Applied Statistics ’23' },
        tagline: { ko: 'Diffusion·RAG로 실제 서비스를 만드는 데이터 사이언티스트', en: 'Data scientist building real services with diffusion models and RAG.' },
        highlights: [
          { ko: 'DSL 기업연계 프로젝트 — Diffusion 기반 개인 맞춤형 시술 결과 이미지 생성 모델 개발 (지도: 박태영 교수)', en: 'DSL corporate project — diffusion-based personalized treatment-outcome image generation (Advisor: Prof. Taeyoung Park)' },
          { ko: '(전) Data Mining Lab 학부인턴 (지도: 김현중 교수)', en: 'Former undergraduate intern, Data Mining Lab (Advisor: Prof. Hyunjoong Kim)' },
          { ko: '2026 IRMA 공모전 우수상 — 통합 RAG 기반 민원 의도 분석·복합민원 처리 지원 서비스', en: '2026 IRMA Competition Excellence Award — RAG-based civil-complaint intent analysis service' },
          { ko: '2026 Y-Compass 학생창업팀 선정 — 기업–대학생 학회 프로젝트 매칭 플랫폼 ‘UniLink’', en: '2026 Y-Compass student startup team — ‘UniLink’, a corporate–student society project matching platform' },
          { ko: '2026 전국민 AI Rookie 본선 진출', en: 'Finalist, 2026 National AI Rookie' }
        ],
        projects: ['eda-education'],
        photo: null },
      { id: 'hyun-seungwon', dept: 'academic', cohort: 15,
        name: { ko: '현승원', en: 'Seungwon Hyun' },
        role: { ko: '학술부', en: 'Academic Team' },
        major: { ko: '응용통계학과 22', en: 'Applied Statistics ’22' },
        tagline: null,
        highlights: [],
        projects: ['igoda', 'eda-media'],
        photo: null },
      { id: 'lee-eunmin', dept: 'academic', cohort: 15,
        name: { ko: '이은민', en: 'Eunmin Lee' },
        role: { ko: '학술부', en: 'Academic Team' },
        major: { ko: 'IT융합공학과 23', en: 'IT Convergence Engineering ’23' },
        tagline: { ko: '의료 영상과 생성 모델을 연구하는 학부연구생', en: 'Undergraduate researcher in medical imaging and generative models.' },
        highlights: [
          { ko: '(현) 연세대학교 Multimedia Computing & Machine Learning Lab 학부연구생 — AIGI Detection (지도: 이종석 교수)', en: 'Undergraduate researcher, Yonsei MCML Lab — AI-generated image detection (Advisor: Prof. Jong-Seok Lee)' },
          { ko: '(전) 연세대학교 Medical AI Lab 학부연구생 — Diffusion 기반 의료영상 생성 연구 (지도: 백종덕 교수)', en: 'Former undergraduate researcher, Yonsei Medical AI Lab — diffusion-based medical image synthesis (Advisor: Prof. Jongduk Baek)' },
          { ko: '2026 CT Meeting 국제학회 논문 발표 (SynthCaries, 공동 제1저자)', en: 'Co-first author, SynthCaries — presented at CT Meeting 2026' },
          { ko: 'KAIST Development Camp 수료 (앱·웹 개발)', en: 'KAIST Development Camp (app & web development)' }
        ],
        projects: ['chim-avatar', 'eda-media'],
        photo: null },
      { id: 'ahn-jaemin', dept: 'academic', cohort: 15,
        name: { ko: '안재민', en: 'Jaemin Ahn' },
        role: { ko: '학술부', en: 'Academic Team' },
        major: { ko: '인공지능학과 22', en: 'Artificial Intelligence ’22' },
        tagline: { ko: '추천 시스템과 AI 서비스 아이디어를 실험하는 인공지능 전공자', en: 'AI major experimenting with recommender systems and AI service ideas.' },
        highlights: [
          { ko: '책이음 AI 활용 아이디어 공모전 장려상', en: 'Encouragement Award, Chaek-i-eum AI Idea Competition' },
          { ko: '(현) 한화생명 미래금융인재 공모전 본선 진출', en: 'Finalist, Hanwha Life Future Finance Talent Competition' }
        ],
        projects: ['igoda', 'eda-economy'],
        photo: null },
      { id: 'cho-yubin', dept: 'ops', cohort: 15,
        name: { ko: '조유빈', en: 'Yubin Cho' },
        role: { ko: '운영부장', en: 'Head of Operations' },
        major: { ko: '응용통계학과 24', en: 'Applied Statistics ’24' },
        tagline: null,
        highlights: [],
        projects: ['attention-explainable', 'eda-media'],
        photo: null },
      { id: 'park-sungha', dept: 'pr', cohort: 15,
        name: { ko: '박성하', en: 'Sungha Park' },
        role: { ko: '홍보부장', en: 'Head of PR' },
        major: { ko: '응용통계학과 22', en: 'Applied Statistics ’22' },
        tagline: { ko: 'LLM 시대의 검색·추천을 고민하는 통계학도', en: 'Statistics major exploring search and recommendation in the LLM era.' },
        highlights: [
          { ko: '(현) DSL 기업연계 프로젝트 — LLM GEO 서비스 개발 (지도: 박태영 교수)', en: 'DSL corporate project — LLM GEO service development (Advisor: Prof. Taeyoung Park)' },
          { ko: '2026 AI Rookie 본선 진출 (진행 중)', en: 'Finalist, 2026 AI Rookie (ongoing)' }
        ],
        projects: ['heart-cvgnal', 'eda-education'],
        photo: null }
    ]
  },

  /* ---------- 알럼나이 (수료 학회원) ----------
     ★ 기수 추가 방법: cohorts 배열에 { id, title, members } 블록을 추가하세요.
       위쪽에 있는 그룹이 먼저 표시됩니다 (최근 기수부터 정렬 권장).
       구성원 형식은 활동 구성원과 동일합니다.
     ※ 명단은 26-2 활동 인원 연명부 기준입니다. */
  alumni: {
    title: { ko: '알럼나이', en: 'Alumni' },
    intro: { ko: '활동을 수료한 14기 이전 학회원들입니다. 수료 후에도 세미나·강연·프로젝트 멘토링으로 학회와 함께하고 있습니다.', en: 'Members of the 14th and earlier cohorts who completed the program — staying connected through seminars, talks and mentoring.' },
    careersTitle: { ko: '수료 후 진로', en: 'Where alumni go' },
    careersDesc: { ko: '수료 학회원은 IT 대기업·금융사·스타트업의 데이터 직군과 국내외 대학원으로 진출하고 있습니다.', en: 'Alumni join data roles at major tech firms, financial institutions and startups, or continue to graduate school at home and abroad.' },
    cohorts: [
      { id: 'cohort14',
        title: { ko: '14기', en: '14th Cohort' },
        members: [
          { name: { ko: '고서연' }, sub: { ko: '계량위험관리학과 22' } },
          { name: { ko: '구기현' }, sub: { ko: '언론홍보영상학부 22' } },
          { name: { ko: '권나연' }, sub: { ko: '영어영문학과 22' } },
          { name: { ko: '김서윤' }, sub: { ko: '교육학과 (석사) 25' } },
          { name: { ko: '박창용' }, sub: { ko: '응용통계학과 22' } },
          { name: { ko: '신동준' }, sub: { ko: '응용통계학과 22' } },
          { name: { ko: '신지원' }, sub: { ko: '실내건축학과 (석사) 25' } },
          { name: { ko: '신태희' }, sub: { ko: '응용통계학과 24' } },
          { name: { ko: '어희정' }, sub: { ko: '응용통계학과 23' } },
          { name: { ko: '여준호' }, sub: { ko: '산업공학과 21' } },
          { name: { ko: '윤동영' }, sub: { ko: 'UD 생명과학공학과 20' } },
          { name: { ko: '이건일' }, sub: { ko: '경영학과 21' } },
          { name: { ko: '이재원' }, sub: { ko: '사회학과 21' } },
          { name: { ko: '조재우' }, sub: { ko: '사학과 22' } },
          { name: { ko: '조재현' }, sub: { ko: '산업공학과 21' } }
        ] },
      { id: 'cohort13',
        title: { ko: '13기', en: '13th Cohort' },
        members: [
          { name: { ko: '강승우' }, sub: { ko: 'IT융합공학과 22' } },
          { name: { ko: '곽도윤' }, sub: { ko: '행정학과 21' } },
          { name: { ko: '김선기' }, sub: { ko: '언론홍보영상학부 21' } },
          { name: { ko: '박수빈' }, sub: { ko: '컴퓨터과학과 22' } },
          { name: { ko: '박세현' }, sub: { ko: 'UD경제학과 20' } },
          { name: { ko: '박시현' }, sub: { ko: '응용통계학과 23' } },
          { name: { ko: '백승이' }, sub: { ko: '산업공학과 20' } },
          { name: { ko: '서승범' }, sub: { ko: '의예과 23' } },
          { name: { ko: '송채은' }, sub: { ko: '응용통계학과 22' } },
          { name: { ko: '양재화' }, sub: { ko: '바이오융합과 19' } },
          { name: { ko: '이승현' }, sub: { ko: '응용통계학과 22' } },
          { name: { ko: '이유주' }, sub: { ko: '응용통계학과 22' } },
          { name: { ko: '이진우' }, sub: { ko: 'IT융합공학과 21' } },
          { name: { ko: '이채원' }, sub: { ko: '불어불문학과 23' } },
          { name: { ko: '정주은' }, sub: { ko: '응용통계학과 23' } },
          { name: { ko: '조지성' }, sub: { ko: '경영학과 20' } },
          { name: { ko: '한연주' }, sub: { ko: '교육학과 23' } }
        ] },
      { id: 'cohort12',
        title: { ko: '12기', en: '12th Cohort' },
        members: [
          { name: { ko: '김건우' }, sub: { ko: '산업공학과 23' } },
          { name: { ko: '김민규' }, sub: { ko: '통계데이터사이언스학과 대학원 25' } },
          { name: { ko: '김은희' }, sub: { ko: '도시공학과 21' } },
          { name: { ko: '김지은' }, sub: { ko: '응용통계학과 22' } },
          { name: { ko: '백민경' }, sub: { ko: '컴퓨터과학과 22' } },
          { name: { ko: '복지민' }, sub: { ko: '계량위험관리학과 20' } },
          { name: { ko: '서지니' }, sub: { ko: '경제학과 21' } },
          { name: { ko: '신영군' }, sub: { ko: '응용정보공학과 22' } },
          { name: { ko: '이정우' }, sub: { ko: '응용통계학과 20' } },
          { name: { ko: '전종욱' }, sub: { ko: '전기전자공학과 20' } },
          { name: { ko: '조정흠' }, sub: { ko: '교육학과 20' } },
          { name: { ko: '추준식' }, sub: { ko: '응용통계학과 19' } }
        ] },
      { id: 'cohort11',
        title: { ko: '11기', en: '11th Cohort' },
        members: [
          { name: { ko: '김민석' }, sub: { ko: '대기과학과 19' } },
          { name: { ko: '김여원' }, sub: { ko: '응용통계학과 21' } },
          { name: { ko: '김정우' }, sub: { ko: '일반대학원 IT융합공학 25' } },
          { name: { ko: '김주연' }, sub: { ko: '계량위험관리학과 20' } },
          { name: { ko: '김현진' }, sub: { ko: '산업공학과 21' } },
          { name: { ko: '남예진' }, sub: { ko: '응용통계학과 22' } },
          { name: { ko: '백두형' }, sub: { ko: '심리학과 19' } },
          { name: { ko: '송예원' }, sub: { ko: '응용통계학과 21' } },
          { name: { ko: '윤정수' }, sub: { ko: '계량위험관리학과 20' } },
          { name: { ko: '한은결' }, sub: { ko: '사회학과 22' } },
          { name: { ko: '황채민' }, sub: { ko: '사회학과 21' } }
        ] },
      { id: 'cohort10',
        title: { ko: '10기', en: '10th Cohort' },
        members: [
          { name: { ko: '김영호' }, sub: { ko: '경제학과 19' } },
          { name: { ko: '박성원' }, sub: { ko: '철학과 20' } },
          { name: { ko: '박태정' }, sub: { ko: '아동가족학과 18' } },
          { name: { ko: '신재우' }, sub: { ko: '응용통계학과 19.5' } },
          { name: { ko: '유현동' }, sub: { ko: '응용통계학과 19' } },
          { name: { ko: '윤형진' }, sub: { ko: 'UIC 바이오융합과 19' } },
          { name: { ko: '임창재' }, sub: { ko: '응용통계학과 19' } },
          { name: { ko: '정성오' }, sub: { ko: '응용통계학과 18' } }
        ] },
      { id: 'cohort9',
        title: { ko: '9기', en: '9th Cohort' },
        members: [
          { name: { ko: '김진하' }, sub: { ko: '응용통계학과 18' } },
          { name: { ko: '남승우' }, sub: { ko: '경제학과 17' } },
          { name: { ko: '신소연' }, sub: { ko: '계량위험관리학과 21' } },
          { name: { ko: '이성균' }, sub: { ko: '통계데이터사이언스학과 대학원 24' } },
          { name: { ko: '이승원' }, sub: { ko: '응용통계학과 22' } },
          { name: { ko: '유선재' }, sub: { ko: '응용통계학과 21' } },
          { name: { ko: '장현빈' }, sub: { ko: '생화학과 19' } },
          { name: { ko: '전재병' }, sub: { ko: '통계데이터사이언스학과 대학원 24' } },
          { name: { ko: '조세린' }, sub: { ko: '생명공학과 19' } }
        ] },
      { id: 'cohort8',
        title: { ko: '8기', en: '8th Cohort' },
        members: [
          { name: { ko: '강건우' }, sub: { ko: 'UIC 경제학과 18' } },
          { name: { ko: '김지희' }, sub: { ko: '응용통계학과 19' } },
          { name: { ko: '황진우' }, sub: { ko: '응용통계학과 21' } }
        ] },
      { id: 'cohort7',
        title: { ko: '7기', en: '7th Cohort' },
        members: [
          { name: { ko: '권수현' }, sub: { ko: '응용통계학 20' } },
          { name: { ko: '김경한' }, sub: { ko: '통계데이터사이언스학과 대학원 23' } }
        ] },
      { id: 'cohort6',
        title: { ko: '6기', en: '6th Cohort' },
        members: [
          { name: { ko: '박수빈' }, sub: { ko: '통계데이터사이언스학과 대학원 24' } }
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
