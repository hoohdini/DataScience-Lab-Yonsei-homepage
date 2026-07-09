# IRMA: Administrative Agent

Type: NLP

[26-1 Modeling NLP2.pdf](IRMA%20Administrative%20Agent/26-1_Modeling_NLP2.pdf)

<aside>
💡 NLP2팀은 기존 정부 주도의 분절적인 민원 서비스 시스템과 수동적인 챗봇 인터페이스의 한계를 극복하기 위해, 사용자의 맥락과 의도를 능동적으로 파악하여 최적의 행정 서비스를 연결하는 Interactive Routing Multi-Agent(IRMA) 시스템을 구축했습니다. LangGraph 프레임워크를 기반으로 세 가지 에이전트가 계층적으로 결합된 다중 구조를 채택했습니다.
Supervisor Agent는 사용자와의 멀티턴 대화를 통해 쿼리를 분석하고 구조화된 JSON 필드를 생성하여 전체 워크플로우를 제어합니다. Knowledge Agent는 약 2만 건의 고신뢰 공공 데이터를 바탕으로 자체 구축한 Supabase DB(index, light, detail 테이블 체계)와 자체 개발한 NLP Mapping Tool을 활용하여 정교한 서비스 탐색 및 증강된 키워드 매칭을 수행합니다. Action Agent는 탐색 결과를 종합하여 최종 답변을 생성하며, DB 외부 정보가 필요한 경우 외부 서치 툴을 활용해 정보의 완결성을 확보합니다.
성능 평가 결과, 1,200개의 난이도별 평가셋에서 JSON 파싱 및 검색 영역 모두 70% 이상의 높은 정합성을 기록하며 실전 배포 가능성을 확인했습니다. 특히 고성능 LLM에 대한 의존도를 낮추고 자체 NLP 툴과 효율적인 DB 구조를 설계함으로써, 개발 및 실험 전 과정에서 단 10달러 내외의 비용만을 지출하여 압도적인 경제성과 행정 도입의 타당성을 증명했습니다.
본 프로젝트는 행정안전부에서 진행한 “ AI 기반 민원 서비스 혁신 시나리오 및 개발방법 공모전”을 기반으로 하였으며, 우수상을 수상하여 가능성을 인정받았습니다.

</aside>