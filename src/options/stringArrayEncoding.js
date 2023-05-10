// Original code:
function encryptMessage(message) {
  let encryptedMessage = '';
  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i) + 1;
    encryptedMessage += String.fromCharCode(charCode);
  }
  return encryptedMessage;
}

let secretMessage = 'Hello, world!';
let encryptedMessage = encryptMessage(secretMessage);
console.log(`Secret message: ${encryptedMessage}`);

// Obfuscated code with stringArrayEncoding: true option enabled:
var _0x8aee = [
  '\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74',
  '\x63\x68\x61\x72\x43\x6F\x64\x65',
  '\x2B\x31',
  '\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65',
  '\x6C\x65\x6E\x67\x74\x68',
  '\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65\x41\x74',
  '\x63\x68\x61\x72\x41\x74',
  '\x2E\x63\x68\x61\x72\x43\x6F\x64\x65',
  '\x53\x65\x63\x72\x65\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x3A\x20',
];
function _0x2d46(_0x3052c2, _0x2f1c7e) {
  _0x3052c2 = _0x3052c2 - 0x0;
  var _0x8aeea2 = _0x8aee[_0x3052c2];
  return _0x8aeea2;
}
function encryptMessage(_0x5a5b5d) {
  var _0x4f1ea4 = '';
  for (
    var _0x15c9b1 = 0x0;
    _0x15c9b1 < _0x5a5b5d[_0x2d46('0x1')];
    _0x15c9b1++
  ) {
    var _0x14f6a9 = _0x5a5b5d[_0x2d46('0x0')](_0x15c9b1) + 0x1;
    _0x4f1ea4 += String[_0x2d46('0x5')](_0x14f6a9);
  }
  return _0x4f1ea4;
}
var _0x4d4244 = 'Hello, world!';
var _0x1c9e2d = encryptMessage(_0x4d4244);
console[_0x2d46('0x6')](_0x2d46('0x7') + _0x1c9e2d);
