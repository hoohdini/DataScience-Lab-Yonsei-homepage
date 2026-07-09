# Is Attention Explainable?

Type: NLP
Github: https://github.com/DataScience-Lab-Yonsei/26-1_DSL_Modeling_NLP1

[26-1 Modeling NLP1.pdf](Is%20Attention%20Explainable/26-1_Modeling_NLP1.pdf)

<aside>
💡

NLP1팀은 "Attention은 과연 모델의 추론 근거를 설명할 수 있는가?"라는 질문을 검증하기 위해, 수능 영어 순서배열·문장삽입 문제(SOP 태스크)를 풀고 근거를 제시하는 모델을 구현했습니다. arXiv 논문 요약 40만 건으로 기초 학습을 수행한 뒤 2017~2025년 수능·교육청 기출 문제로 도메인 파인튜닝하는 2단계 전이학습 구조를 설계했으며, BERT, BiLSTM, CNN 세 모델을 동일 조건에서 비교했습니다.
핵심 발견은 Attention과 Gradient의 일치도(Kendall τ)가 전 모델에서 0.17~0.21에 그쳤다는 점입니다. LLM(ChatGPT·Gemini·Claude) 및 인간 피험자의 근거 단어와 비교했을 때도 Attention에 비해 Gradient가 더 높은 일치도를 보였습니다.
추가로 DeBERTa 기반 문장삽입 모델(PMR 최대 95.0%)과 RoBERTa+FusionTransformer 기반 순서배열 모델(PMR 최대 87.9%)도 구현해 성능 상한을 함께 탐색했습니다.
본 프로젝트는 Attention을 설명 근거로 직접 사용하는 것의 한계를 실증하고, Gradient 기반 해석이 보다 신뢰할 수 있는 대안임을 수능이라는 구체적 벤치마크로 검증했습니다.

</aside>