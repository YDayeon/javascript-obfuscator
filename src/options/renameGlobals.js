// Original Code:
let x = 10;
let y = 20;

function sum() {
  return x + y;
}

console.log(sum());

// Obfuscated Code with renameGlobals option enabled:
let a = 10;
let b = 20;

function c() {
  return a + b;
}

console.log(c());
