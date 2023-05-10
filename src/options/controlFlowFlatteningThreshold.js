// Original Code:
function calculate(a, b, c) {
  let result = 0;
  if (c === 0) {
    result = a + b;
  } else {
    result = a - b;
  }
  return result;
}

console.log(calculate(5, 3, 0));

// Obfuscated Code with controlFlowFlatteningThreshold set to 1:
// const _0x3f8b=["\x61\x2B\x62","\x61\x2D\x62"];function _0x1e23(_0x4d8f,_0x5a99,_0x1956){let _0x261f=[_0x3f8b[0],_0x3f8b[1]];if(_0x1956===0){eval(_0x261f[0]);}else{eval(_0x261f[1]);}}console.log(_0x1e23(5,3,0));

// Obfuscated Code with controlFlowFlatteningThreshold set to 0:
// const _0x78d6=["\x61","\x2B","\x62","\x2D"];function _0x1674(_0x58c8,_0x1da4,_0x59f4){let _0x37ec=_0x78d6[0];if(_0x59f4===0){_0x37ec=_0x78d6[0]+_0x78d6[1]+_0x78d6[2];}else{_0x37ec=_0x78d6[0]+_0x78d6[3]+_0x78d6[2];}return _0x37ec;}console.log(_0x1674(5,3,0));
