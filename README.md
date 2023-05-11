## JavaScript Obfuscator 🗝️key options

#### 목차

- [목적](#목적)
- [장단점](#장단점)

#### 목적

| Option                           | 주요 목적                                                                                                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compact`                        | - 코드의 크기를 줄이고 가독성을 떨어뜨리는 것<br>- 코드 크기가 중요한 경우에 유용<br>(최종 출력 파일의 크기를 줄일 수 있습니다.)                                                                              |
| `controlFlowFlattening`          | - 코드의 흐름을 복잡하게 만드는 데 유용<br>- 코드가 보안적으로 중요한 경우 코드를 보호하는 데 유용                                                                                                            |
| `controlFlowFlatteningThreshold` | - \*[제어 흐름 평탄화(control flow flattening)](#제어-흐름-평탄화) 기능을 활성화할 때 사용(이를 통해 사용자는 얼마나 깊이 중첩된 코드 블록까지도 평탄화를 적용할 것인지 결정 가능)                            |
| `deadCodeInjection`              | - 사용되지 않는 코드를 삽입하여 코드 해석을 어렵게 만듦<br>- 코드 분석을 시도하는 공격자에 대한 보안 강화<br>- 코드 실행 시간이 짧은 경우 코드 해석 어렵게 만들어 성능을 향상시키는 데 도움이 될 수 있음      |
| `deadCodeInjectionThreshold`     | - deadCodeInjection 옵션과 함께 사용<br>- 적용 가능한 코드 중 최소한으로 살려둘 코드의 비율을 설정하는 데 사용                                                                                                |
| `stringArray`                    | - 문자열 리터럴을 숨기기 위해 문자열 배열을 사용하여 변환하는 기능<br>- 안정성과 보안성을 높이는 데 도움                                                                                                      |
| `stringArrayEncoding`            | - 문자열 배열을 인코딩하는 방식을 지정하는 데 사용<br>- 주로 문자열 리터럴을 숨기는 데 사용                                                                                                                   |
| `stringArrayThreshold`           | - 문자열 배열을 만들기 전에 문자열 리터럴의 사용 횟수를 제한하는 데 사용<br>- 문자열 배열을 생성하거나 리터럴 문자열을 사용하는 것 간의 균형점을 찾는 데 도움                                                 |
| `unicodeEscapeSequence`          | - 전역 스코프의 변수와 함수 이름을 임의의 문자열로 변환<br>- JavaScript 코드를 유니코드 이스케이프 시퀀스로 변환<br>- 코드를 다른 문자 집합으로 변환해야 하는 경우 유용<br>- 코드를 보안적으로 숨기는 데 사용 |
| `renameGlobals`                  | - 주로 공격자가 코드를 역공학하는 것을 방지하기 위해 사용<br>- 민감한 정보를 포함하는 코드나 인터넷 상에서 배포되는 코드의 경우 유용                                                                          |
| `rotateStringArray`              | - 문자열 배열을 회전하여 코드를 난독화<br>- 문자열을 사용하는 경우, 이를 배열에 저장하여 회전하면 더욱 안전하게 보호<br>- 문자열 배열의 순서를 변경하여 해독 과정을 어렵게 만듦                               |
| `transformObjectKeys`            | - 객체 키 이름을 변환하여 코드를 난독화<br>- 프로덕션 환경에서 코드 난독화를 위해 사용<br>- 코드를 제출하거나 다른 사람과 코드를 공유해야 할 때 사용하며 코드의 출처를 숨기기 유용                            |
| `splitStrings`                   | - 문자열 리터럴을 무작위의 부분 문자열로 분할<br>- 대규모 코드베이스에서 가장 효과적<br>(특히 많은 문자열 리터럴을 포함하고 있는 경우)                                                                        |
| `debugProtection`                | - 디버깅 정보를 제거<br>- 코드가 개인 정보나 중요한 데이터를 다룰 때 특히 유용<br>(특히 많은 문자열 리터럴을 포함하고 있는 경우)                                                                              |
| `debugProtectionInterval`        | - 디버그 모드에서 실행되는 경우 자동으로 중지되도록 하는 JavaScript 코드를 생성<br>(디버깅 지시문이 삽입되는 것을 방지)<br>- 디버깅이 필요 없는 경우에 유용<br>- 보안 측면에서 유용하게 사용 가능             |
| `disableConsoleOutput`           | - 콘솔 출력을 비활성화하는 데 사용<br>- 프로덕션 환경에서 디버깅 정보가 노출되는 것을 방지하는 데 도움<br>- 보안 강화를 위해 프로덕션 환경에서 사용하는 것 추천                                               |
| `identifierNamesGenerator`       | - 변수 및 함수 이름을 무작위로 생성하는 데 사용<br>- 자바스크립트 코드를 공유하는 경우에 유용<br>- 프로젝트에서 여러 사람이 작업하는 경우 특히 유용                                                           |
| `selfDefending`                  | - 코드가 실행될 때 스스로를 보호하기 위해 약간의 보호 코드 생성<br>- 일반적으로 보안이 중요한 웹 사이트나 애플리케이션에서 유용                                                                               |
| `numbersToExpressions`           | - 숫자 리터럴을 표현식으로 변환하는 기능 제공<br>- 난독화된 코드를 이해하기 어려운 상황을 조금 더 개선<br>- 특히 민감한 데이터를 다루는 애플리케이션에서 유용<br>- 악성 코드나 해킹 시도를 방어하는데 도움    |

### 장단점

| Option                           | 장점                                                                                                                                                                                                                                            | 단점                                                                                                                                                                                                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compact`                        | - 불필요한 공백과 주석을 제거하여 코드가 간결해짐<br>- 파일 용량이 작아지므로 네트워크 로딩 속도가 빨라짐<br>- 코드를 분석하고 이해하기 어려워짐으로써 코드를 보호할 수 있음                                                                    | - 읽기 어려운 코드를 생성하여 유지보수가 어려워질 수 있음<br>- 코드가 짧아지면서 가독성이 떨어질 수 있음<br>- 코드 최적화와 관련된 이슈가 발생할 가능성이 있음                                                                                             |
| `controlFlowFlattening`          | - 코드를 해석하거나 분석하는 데 어려움<br>- 코드 가독성 저하<br>- 코드를 분석하는 도구를 헷갈리게 하여 코드 보호 수준 향상<br>- 코드를 역공학하는 시간이 오래 걸림<br>- 코드 안전성 향상                                                        | - 코드를 디버깅하는 것이 어려워짐<br>- 코드의 크기가 증가하여 다운로드 시간이 늘어남<br>- 코드를 이해하는 데 어려움<br>- 코드 오류를 찾기 어려워짐.                                                                                                        |
| `controlFlowFlatteningThreshold` | - controlFlowFlatteningThreshold 값이 높을수록 코드가 더욱 복잡해지며, 해독하기가 어려워짐                                                                                                                                                      | - controlFlowFlatteningThreshold 값이 너무 높으면 코드가 실행되는 데 필요한 자원의 양이 증가하여 프로그램의 성능이 저하<br>- 값이 너무 낮으면 코드 안전성 감소                                                                                             |
| `deadCodeInjection`              | - 실행되지 않는 무작위로 생성된 코드 단편을 사용하여 코드를 난독화하는 추가적인 보안 계층을 제공<br>- 코드를 역공학으로부터 보호하기 위해서는 공격자가 주입된 코드에서 실제 코드를 식별해야 하므로, 공격자가 코드를 역분석하는 것을 어렵게 만듦 | - 프로그램 실행에 필요하지 않은 추가적인 코드를 추가하여 성능에 영향<br>- 주입된 코드에 문법 오류나 다른 문제가 포함되어 있으면 프로그램이 실패할 가능성 높아짐                                                                                            |
| `deadCodeInjectionThreshold`     | - 코드에 더 많은 무작위성을 추가하지 않고 코드 중심의 무작위성을 증가시킴<br>- 낮은 임계값을 설정하면 dead code injection이 코드를 보호하는 데 유용                                                                                             | - 높은 임계값을 설정하면 코드를 읽기 어렵게 만들기는 어려움<br>- 임계값을 너무 높게 설정하면 dead code injection이 효과가 없을 수 있음                                                                                                                     |
| `stringArray`                    | - 문자열 배열 인코딩은 소스 코드를 분석하는 것을 더 어렵게 만들어, 코드의 보안성 향상<br>- 변수 이름으로 문자열 값을 사용하므로, 문자열 값이 변경될 경우 변수 이름만 변경하면 되므로 코드 유지보수 용이                                         | - 문자열 배열을 생성하고 문자열 값을 할당하는 작업이 추가되어 코드 크기가 증가<br>- 코드가 가독성을 떨어뜨릴 수 있으므로, 개발자들이 이해하기 어려움                                                                                                       |
| `stringArrayEncoding`            | - 문자열 리터럴을 배열 형태로 변환하여 보호<br>- 난독화된 코드를 디코딩하는 것을 어렵게 만듦<br>코드 크기 축소 가능                                                                                                                             | - 실행 속도가 느려질 수 있음<br>- 다른 코드 난독화 기술을 함께 사용할 때 충돌 발생 가능<br>문자열 리터럴의 사용이 많은 코드에서는 변환된 배열의 이름과 인덱스를 추적하기 어려움                                                                            |
| `stringArrayThreshold`           | - 다운로드 시간 단축 가능<br>- 역공학 공격으로부터 보호되는 효과                                                                                                                                                                                | - 런타임 성능이 저하<br>- 코드의 실행 속도 저하<br>메모리 사용량이 증가                                                                                                                                                                                    |
| `unicodeEscapeSequence`          | - 문자열을 유니코드 이스케이프 시퀀스로 변환하여 분석이 어려워짐<br>- 코드를 복호화하려는 공격자들이 해독할 때 시간 오래 소요됨                                                                                                                 | - 디버깅이 어려워짐<br>- 코드 크기가 증가하고, 이로 인해 페이지 로딩 시간이 늘어남                                                                                                                                                                         |
| `renameGlobals`                  | - 코드의 보안성 향상<br>- 코드를 역으로 추적하여 해독하는 것이 더 어려워짐<br>- 함수 및 클래스 이름의 충돌을 방지하고 전역 변수 이름을 보호                                                                                                     | - 코드를 역으로 추적하거나 디버깅할 때, 변경된 이름을 이해하기 어렵고 불편<br>- 코드의 가독성이 저하 및 코드의 유지 보수 및 수정이 어려워짐                                                                                                                |
| `rotateStringArray`              | - 일반적인 디컴파일러나 코드 분석 툴에서는 이를 파악하기 어려움<br>- 코드의 복잡성이 증가하여, 난독화된 코드를 해석하는 것이 어려워지며, 해킹 시도를 어렵게 만듦                                                                                | - 코드 크기가 증가<br>- 성능에 영향                                                                                                                                                                                                                        |
| `transformObjectKeys`            | - 해킹 방지<br>- 코드의 가독성을 낮춤                                                                                                                                                                                                           | - 디버깅이 어려워짐<br>- 코드의 동작이 변경될 수 있음                                                                                                                                                                                                      |
| `splitStrings`                   | - 공격자가 문자열 리터럴의 길이와 내용을 알아내는 것을 어렵게 함<br>- 코드를 분석하는 데 필요한 시간과 노력을 증가시켜 코드 보호<br>- 코드의 가독성을 낮추어 역공학 공격으로부터 코드 보호                                                      | - 실행 시간에 오버헤드 초래<br>- 런타임 오류가 발생<br>- 디버깅 과정에서 문자열 리터럴을 식별하고 추적하는 것이 어려워짐                                                                                                                                   |
| `debugProtection`                | - 디버그를 통한 코드 분석 방지<br>- 코드의 안전성을 향상                                                                                                                                                                                        | - 디버깅이 필요한 경우에는 문제가 될 수 있음<br>- 코드를 이해하려는 개발자나 유지보수자들에게 불편함을 줄 수 있음                                                                                                                                          |
| `debugProtectionInterval`        | - 디버거에서 코드를 분석하는 것을 어렵게 만듦<br>- 디버깅 작업 중에 발생할 수 있는 보안 문제 방지<br>코드 보안성 향상                                                                                                                           | - 코드가 실행될 때 디버깅을 하지 않는 한, 코드 실행에 영향끼칠 수 있음<br>- 디버그가 필요한 상황에서 디버깅을 어렵게 만듦<br>일부 디버거는 debugProtectionInterval을 우회하는 기능 보유                                                                    |
| `debugProtectionInterval`        | - 디버거에서 코드를 분석하는 것을 어렵게 만듦<br>- 디버깅 작업 중에 발생할 수 있는 보안 문제 방지<br>코드 보안성 향상                                                                                                                           | - 코드가 실행될 때 디버깅을 하지 않는 한, 코드 실행에 영향끼칠 수 있음<br>- 디버그가 필요한 상황에서 디버깅을 어렵게 만듦<br>일부 디버거는 debugProtectionInterval을 우회하는 기능 보유                                                                    |
| `disableConsoleOutput`           | - 콘솔 출력을 비활성화하여 코드를 숨길 수 있음<br>- 악성 코드가 콘솔 출력을 사용하여 디버깅하는 것을 방지<br>프로그램의 성능을 약간 향상                                                                                                        | - 디버깅을 어렵게 만들 수 있음<br>- 콘솔 출력이 필요한 경우에는 이 옵션 사용 불가                                                                                                                                                                          |
| `identifierNamesGenerator`       | - 콘솔 출력을 비활성화하여 코드를 숨길 수 있음<br>- 악성 코드가 콘솔 출력을 사용하여 디버깅하는 것을 방지<br>프로그램의 성능을 약간 향상                                                                                                        | - 코드의 가독성이 낮아져 디버깅이 어려워짐<br>- 코드가 직관적이지 않아 유지보수가 어려움<br>생성된 식별자 이름이 의미없이 길어질 수 있어서 코드의 크기 커질 우려                                                                                           |
| `selfDefending`                  | - 코드를 분석하거나 수정하려는 공격자에게 일부 취약점을 숨길 수 있음<br>- 악성 코드를 배포하는 사람들을 방지할 수 있음<br>악성 스크립트를 검출하고 제거하는 보안 소프트웨어나 서비스에서 탐지를 어렵게 만듦                                     | - 코드가 복잡해지고 이해하기 어려워질 수 있음<br>- 앱의 성능이 손상될 여지(실행 시간이 더 길어지므로 일부 환경에서는 성능 문제를 유발 가능)<br>보안성을 높이는 데 도움이 되지만 완벽한 보안을 제공하지는 않기 때문에 다른 보안 메커니즘과 함께 사용해야 함 |
| `numbersToExpressions`           | - 코드 해석을 방해하는 데 도움<br>- 숫자 리터럴을 표현식으로 변환하여 숫자 리터럴을 직접 사용하는 것보다 코드 크기 축소 가능<br>코드 난독화 수준 향상                                                                                           | - 코드 실행 속도 저하<br>- 가독성이 떨어질 수 있어 코드 유지보수를 어려움<br>특정 상황에서는 수학적으로 정확하지 않은 결과를 반환                                                                                                                          |

### 제어 흐름 평탄화

제어 흐름 구조를 복잡하게 만들어 코드를 분석하거나 이해하기 어렵게 만드는 기법입니다. 이를 통해 코드의 복잡성을 증가시켜 해킹이나 코드 분석을 어렵게 만듭니다.
`controlFlowFlatteningThreshold` 옵션은 제어 흐름 평탄화를 적용할 블록 크기를 제어하므로, 코드 분석 및 해킹에 대한 보호 수준을 조절할 수 있습니다.

예를 들어, controlFlowFlatteningThreshold 옵션을 0.75로 설정하면, 75% 이상의 블록이 평탄화됩니다. 즉, 크기가 4인 블록 중 3개 이상의 블록이 평탄화됩니다. 이를 통해 코드를 분석하거나 해킹하는 것을 어렵게 만들 수 있습니다.
