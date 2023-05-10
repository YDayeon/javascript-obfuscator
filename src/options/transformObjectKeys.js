// Original Code:
const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
  },
};

console.log(user.name);
console.log(user.address.city);

// Obfuscated Code with transformObjectKeys option enabled:
// const _0xd777=["\x6E\x61\x6D\x65","\x61\x67\x65","\x65\x6D\x61\x69\x6C","\x73\x74\x72\x65\x65\x74","\x63\x69\x74\x79"];const user={[_0xd777[0]]:_0xd777[1],[_0xd777[2]]:30,[_0xd777[3]]:_0xd777[4],[_0xd777[3]]:{[_0xd777[3]]:_0xd777[4],[_0xd777[4]]:_0xd777[4],[_0xd777[4]]:_0xd777[4],[_0xd777[4]]:_0xd777[4]}};console[_0xd777[6]](user[_0xd777[0]]);console[_0xd777[6]](user[_0xd777[3]][_0xd777[4]]);
