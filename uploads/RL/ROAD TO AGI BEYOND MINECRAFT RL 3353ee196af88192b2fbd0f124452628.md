# ROAD TO AGI: BEYOND MINECRAFT RL

Type: Reinforcement Learing

[26-1 Modeling RL.pdf](ROAD%20TO%20AGI%20BEYOND%20MINECRAFT%20RL/26-1_Modeling_RL.pdf)

<aside>
💡

강화학습팀은 마인크래프트라는 자율적인 환경에서 에이전트가 지속 가능한 생존 전략을 스스로 학습하는 프로젝트를 수행했습니다. 단순히 게임을 플레이하는 것을 넘어, 깊은 이해력과 합리적인 추론 능력을 바탕으로 다양한 과업을 수행하는 인공일반지능(AGI)으로 나아가는 경로를 탐색하는 것이 목표입니다.

본 프로젝트는 복잡한 생존 과업을 사냥(Hunting), 채굴(Mining), 건축(Building)의 세 가지 핵심 태스크로 분해하여 접근했습니다:  사냥(Hunting): PPO 알고리즘과 Dense Reward Shaping을 활용해 몬스터와의 적정 거리를 유지하며 안정적으로 원거리 교전을 수행하는 루프를 구현했습니다.  채굴(Mining): 보상 희소성 문제를 해결하기 위해 계층적 강화학습(Hierarchical RL)과 내재적 호기심 모듈(Intrinsic Curiosity Module)을 도입하여 광물을 탐색하고 확보하는 과정을 최적화했습니다.  건축(Building): 행동 모방 학습(Behavior Cloning)을 통해 기초 가이드라인을 잡고, 이를 PPO로 미세 조정하여 안전한 거점을 구축하는 전략을 학습했습니다.

결론적으로, 강화학습(RL)만으로는 마인크래프트의 무한한 변수와 복잡한 환경을 모두 일반화하는 데 한계가 있음을 확인했습니다. 팀은 이를 극복하기 위해 에이전트가 외부 지식(공략집 등)을 읽고 이를 계층적 행동으로 변환하는 RAG 기반의 Knowledge-guided policy를 향후 연구 방향으로 제시하며, 이를 통해 진정한 AGI로의 확장 가능성을 강조했습니다.

</aside>