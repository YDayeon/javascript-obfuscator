const JavaScriptObfuscator = require('javascript-obfuscator');

const code = `
function addNumbers(a, b) {
    debugger;
    return a + b;
}

console.log(addNumbers(5, 10));
`;

const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
  debugProtection: true,
  debugProtectionInterval: true,
});

console.log(obfuscationResult.getObfuscatedCode());

// resulting obfuscated code:
// var _0x4d47=['addNumbers','log'];(function(_0x3e8a9a,_0x4d476c){var _0x42dd38=function(_0x5e58af){while(--_0x5e58af){_0x3e8a9a['push'](_0x3e8a9a['shift']());}};_0x42dd38(++_0x4d476c);}(_0x4d47,0xf2));var _0x42dd=function(_0x3e8a9a,_0x4d476c){_0x3e8a9a=_0x3e8a9a-0x0;var _0x42dd38=_0x4d47[_0x3e8a9a];return _0x42dd38;};function addNumbers(_0x5980b5,_0x5cc0c9){if(_0x5cc0c9%0x3===0x0){debugger;}return _0x5980b5+_0x5cc0c9;}console[_0x42dd('0x1')](addNumbers(0x5,0xa));
