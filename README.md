## JavaScript Obfuscator 🗝️key options

#### 목차

- [목적](#목적)
- [장단점](#장단점)

#### 목적

| Option    | 주요 목적                                                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| `compact` | - 코드의 크기를 줄이고 가독성을 떨어뜨리는 것<br>- 코드 크기가 중요한 경우에 유용(최종 출력 파일의 크기를 줄일 수 있습니다.) | `controlFlowFlattening` | - 코드의 흐름을 복잡하게 만드는 데 유용<br>- 코드가 보안적으로 중요한 경우 코드를 보호하는 데 유용 |

#### 장단점

| Option    | 장점                                                                                                                                                                         | 단점                                                                                                                                                           |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compact` | - 불필요한 공백과 주석을 제거하여 코드가 간결해짐<br>- 파일 용량이 작아지므로 네트워크 로딩 속도가 빨라짐<br>- 코드를 분석하고 이해하기 어려워짐으로써 코드를 보호할 수 있음 | - 읽기 어려운 코드를 생성하여 유지보수가 어려워질 수 있음<br>- 코드가 짧아지면서 가독성이 떨어질 수 있음<br>- 코드 최적화와 관련된 이슈가 발생할 가능성이 있음 | `controlFlowFlattening` | - 코드를 해석하거나 분석하는 데 어려움<br>- 코드 가독성 저하<br>- 코드를 분석하는 도구를 헷갈리게 하여 코드 보호 수준 향상<br>- 코드를 역공학하는 시간이 오래 걸림<br>- 코드 안전성 향상 | - 코드를 디버깅하는 것이 어려워짐<br>- 코드의 크기가 증가하여 다운로드 시간이 늘어남<br>- 코드를 이해하는 데 어려움<br>- 코드 오류를 찾기 어려워짐. |
