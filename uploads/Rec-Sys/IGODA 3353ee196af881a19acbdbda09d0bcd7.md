# IGODA

Type: RecSys
Github: https://github.com/DataScience-Lab-Yonsei/26-1_DSL_Modeling_RecSys_CTR--Intent-Recommendation

[26-1 Modeling 추천시스템.pdf](IGODA/26-1_Modeling_%EC%B6%94%EC%B2%9C%EC%8B%9C%EC%8A%A4%ED%85%9C.pdf)

<aside>
💡 추천시스템팀은 쿠키 기반 데이터가 제한되는 환경에서의 광고 추천 성능 저하 문제를 해결하기 위해, 사용자 행동 데이터와 텍스트 기반 의도 정보를 결합한 추천 모델을 설계했습니다. 기존 협업필터링 방식은 클릭 이력에 의존하기 때문에 Cold-start 및 sparse 데이터 환경에서 성능이 급격히 저하되는 한계가 있습니다. 이를 보완하기 위해, 먼저 전체 시퀀스 데이터를 활용한 Transformer 기반 모델(BST)을 구현하여 이론적 상한 성능(Upper Bound)을 정의했습니다.
이후 실제 광고 환경을 반영한 sparse 데이터 조건에서 DeepFM 기반 Baseline 모델을 구축하고, 사용자 행동 로그로부터 생성한 퍼널 기반 파생 변수를 자연어 템플릿으로 변환한 뒤 Sentence Transformer를 활용한 ‘의도 임베딩 피처’를 추가한 Enhanced 모델을 설계했습니다. 모델 비교 결과, 제안한 모델은 특히 sparse 유저 그룹에서 AUC가 유의미하게 개선되며, 상한 성능에 근접하는 수준까지 성능을 회복함을 확인했습니다.
본 프로젝트는 단순한 클릭 기반 추천을 넘어, 제한된 데이터 환경에서도 성능을 끌어올릴 수 있는 방법론을 제시합니다.

</aside>