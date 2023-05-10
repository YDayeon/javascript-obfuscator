// Original Code:
function calculate(a, b, c) {
  let result = a * b;

  if (c > 0) {
    result += c;
  }

  return result;
}

let finalResult = calculate(2, 5, 0);
console.log(`The final result is ${finalResult}`);

// Obfuscated Code with deadCodeInjection option enabled:
function _0x18f1d1(_0x3199c1, _0x2ddce2, _0x279de3) {
  var _0x3f3d08 = _0x3199c1 * _0x2ddce2;
  if (_0x279de3 > 0) {
    _0x3f3d08 += _0x279de3;
  }
  return _0x3f3d08;
}
function calculate(a, b, c) {
  var result = _0x18f1d1(a, b, c);
  return result;
}
var finalResult = calculate(2, 5, 0);
console.log(`The final result is ${finalResult}`);
