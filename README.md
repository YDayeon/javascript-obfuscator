## JavaScript Obfuscator 🗝️key options

#### 목차

- [목적](#목적)
- [장단점](#장단점)

#### 목적

| Option                  | 주요 목적                                                                                                                                     |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `compact`               | - 코드의 크기를 줄이고 가독성을 떨어뜨리는 것<br>- 코드 크기가 중요한 경우에 유용(최종 출력 파일의 크기를 줄일 수 있습니다.)                  |
| `controlFlowFlattening` | - 코드의 흐름을 복잡하게 만드는 데 유용<br>- 코드가 보안적으로 중요한 경우 코드를 보호하는 데 유용                                            |
| `deadCodeInjection`     | - 코드 분석을 시도하는 공격자에 대한 보안 강화<br>- 코드 실행 시간이 짧은 경우 코드 해석 어렵게 만들어 성능을 향상시키는 데 도움이 될 수 있음 |
| `stringArray`           | - 안정성과 보안성을 높이는 데 도움                                                                                                            |
| `unicodeEscapeSequence` | - 코드를 다른 문자 집합으로 변환해야 하는 경우 유용<br>- 코드를 보안적으로 숨기는 데 사용                                                     |
| `renameGlobals`         | - 주로 공격자가 코드를 역공학하는 것을 방지하기 위해 사용<br>- 민감한 정보를 포함하는 코드나 인터넷 상에서 배포되는 코드의 경우 유용          |
| `rotateStringArray`     | - 문자열을 사용하는 경우, 이를 배열에 저장하여 회전하면 더욱 안전하게 보호<br>- 문자열 배열의 순서를 변경하여 해독 과정을 어렵게 만듦         |
| `transformObjectKeys`   | - 프로덕션 환경에서 코드 난독화를 위해 사용<br>- 코드를 제출하거나 다른 사람과 코드를 공유해야 할 때 사용하며 코드의 출처를 숨기기 유용       |
| `splitStrings`          | - 대규모 코드베이스에서 가장 효과적(특히 많은 문자열 리터럴을 포함하고 있는 경우)                                                             |

#### 장단점

| Option                  | 장점                                                                                                                                                                                                                                            | 단점                                                                                                                                                            |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compact`               | - 불필요한 공백과 주석을 제거하여 코드가 간결해짐<br>- 파일 용량이 작아지므로 네트워크 로딩 속도가 빨라짐<br>- 코드를 분석하고 이해하기 어려워짐으로써 코드를 보호할 수 있음                                                                    | - 읽기 어려운 코드를 생성하여 유지보수가 어려워질 수 있음<br>- 코드가 짧아지면서 가독성이 떨어질 수 있음<br>- 코드 최적화와 관련된 이슈가 발생할 가능성이 있음  |
| `controlFlowFlattening` | - 코드를 해석하거나 분석하는 데 어려움<br>- 코드 가독성 저하<br>- 코드를 분석하는 도구를 헷갈리게 하여 코드 보호 수준 향상<br>- 코드를 역공학하는 시간이 오래 걸림<br>- 코드 안전성 향상                                                        | - 코드를 디버깅하는 것이 어려워짐<br>- 코드의 크기가 증가하여 다운로드 시간이 늘어남<br>- 코드를 이해하는 데 어려움<br>- 코드 오류를 찾기 어려워짐.             |
| `deadCodeInjection`     | - 실행되지 않는 무작위로 생성된 코드 단편을 사용하여 코드를 난독화하는 추가적인 보안 계층을 제공<br>- 코드를 역공학으로부터 보호하기 위해서는 공격자가 주입된 코드에서 실제 코드를 식별해야 하므로, 공격자가 코드를 역분석하는 것을 어렵게 만듦 | - 프로그램 실행에 필요하지 않은 추가적인 코드를 추가하여 성능에 영향<br>- 주입된 코드에 문법 오류나 다른 문제가 포함되어 있으면 프로그램이 실패할 가능성 높아짐 |
| `stringArray`           | - 문자열 배열 인코딩은 소스 코드를 분석하는 것을 더 어렵게 만들어, 코드의 보안성 향상<br>- 변수 이름으로 문자열 값을 사용하므로, 문자열 값이 변경될 경우 변수 이름만 변경하면 되므로 코드 유지보수 용이                                         | - 문자열 배열을 생성하고 문자열 값을 할당하는 작업이 추가되어 코드 크기가 증가<br>- 코드가 가독성을 떨어뜨릴 수 있으므로, 개발자들이 이해하기 어려움            |
| `unicodeEscapeSequence` | - 문자열을 유니코드 이스케이프 시퀀스로 변환하여 분석이 어려워짐<br>- 코드를 복호화하려는 공격자들이 해독할 때 시간 오래 소요됨                                                                                                                 | - 디버깅이 어려워짐<br>- 코드 크기가 증가하고, 이로 인해 페이지 로딩 시간이 늘어남                                                                              |
| `renameGlobals`         | - 코드의 보안성 향상<br>- 코드를 역으로 추적하여 해독하는 것이 더 어려워짐<br>- 함수 및 클래스 이름의 충돌을 방지하고 전역 변수 이름을 보호                                                                                                     | - 코드를 역으로 추적하거나 디버깅할 때, 변경된 이름을 이해하기 어렵고 불편<br>- 코드의 가독성이 저하 및 코드의 유지 보수 및 수정이 어려워짐                     |
| `rotateStringArray`     | - 일반적인 디컴파일러나 코드 분석 툴에서는 이를 파악하기 어려움<br>- 코드의 복잡성이 증가하여, 난독화된 코드를 해석하는 것이 어려워지며, 해킹 시도를 어렵게 만듦                                                                                | - 코드 크기가 증가<br>- 성능에 영향                                                                                                                             |
| `transformObjectKeys`   | - 해킹 방지<br>- 코드의 가독성을 낮춤                                                                                                                                                                                                           | - 디버깅이 어려워짐<br>- 코드의 동작이 변경될 수 있음                                                                                                           |
| `splitStrings`          | - 공격자가 문자열 리터럴의 길이와 내용을 알아내는 것을 어렵게 함<br>- 코드를 분석하는 데 필요한 시간과 노력을 증가시켜 코드 보호<br>- 코드의 가독성을 낮추어 역공학 공격으로부터 코드 보호                                                      | - 실행 시간에 오버헤드 초래<br>- 런타임 오류가 발생<br>- 디버깅 과정에서 문자열 리터럴을 식별하고 추적하는 것이 어려워짐                                        |
