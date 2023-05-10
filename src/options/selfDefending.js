// Original code:
function multiply(a, b) {
  return a * b;
}

let result = multiply(2, 3);
console.log(`Result is ${result}`);

// Obfuscated code with selfDefending: true option enabled:
!(function () {
  function _0x203c8d(a, b) {
    return a * b;
  }
  let _0x1e9e42 = _0x203c8d(2, 3);
  console[_0x2778('0x0')](_0x2778('0x1') + _0x1e9e42);
})();
