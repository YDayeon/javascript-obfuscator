// Original Code:
function calculate(a, b, c) {
  let result = a * b;

  if (c > 0) {
    result += c;
  } else {
    result -= c;
  }

  return result;
}

let finalResult = calculate(2, 5, 3);
console.log(`The final result is ${finalResult}`);

// Obfuscated Code with controlFlowFlattening option enabled:
function _0x65a6b7(_0x58aa19, _0x139638, _0x222d1e) {
  var _0x1e6b05 = _0x58aa19 * _0x139638;
  if (_0x222d1e > 0) {
    _0x1e6b05 += _0x222d1e;
  } else {
    _0x1e6b05 -= _0x222d1e;
  }
  return _0x1e6b05;
}
function calculate(a, b, c) {
  var result = _0x65a6b7(a, b, c);
  return result;
}
var finalResult = calculate(2, 5, 3);
console.log(`The final result is ${finalResult}`);
