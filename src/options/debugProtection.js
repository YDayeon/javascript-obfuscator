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
});

console.log(obfuscationResult.getObfuscatedCode());

// resulting obfuscated code:
// var _0x5aa5=['addNumbers','log'];(function(_0x4ddab3,_0x5aa557){var _0x43a79e=function(_0x4d6f07){while(--_0x4d6f07){_0x4ddab3['push'](_0x4ddab3['shift']());}};_0x43a79e(++_0x5aa557);}(_0x5aa5,0x1e6));var _0x43a7=function(_0x4ddab3,_0x5aa557){_0x4ddab3=_0x4ddab3-0x0;var _0x43a79e=_0x5aa5[_0x4ddab3];return _0x43a79e;};function addNumbers(_0x4ad6ad,_0x146e18){return _0x4ad6ad+_0x146e18;}console[_0x43a7('0x1')](addNumbers(0x5,0xa));
