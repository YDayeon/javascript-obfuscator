// Original Code:
function foo() {
  let a = 5;
  let b = 10;
  if (a > 3) {
    b = 20;
  }
  console.log(b);
}
foo();

// Obfuscated Code with deadCodeInjectionThreshold set to 0:
// function _0x1806(){console[_0x4078[1]](_0x4078[0]);}_0x1806();

// Obfuscated Code with deadCodeInjectionThreshold set to 1:
// function _0x7f3b(){let _0x24c6=5;let _0x1f3a=10;if(_0x24c6>3){_0x1f3a=20;}console[_0x4078[1]](_0x1f3a);}_0x7f3b();
