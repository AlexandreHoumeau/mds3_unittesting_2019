const isAnagram = require('../src/anagram');

/*

* Anagram Testing file

*/

test('isAnagram function exists', () => {
  expect(isAnagram).toBeDefined();
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema','iceman' )).toBe(true)
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram('Dormitory','dirty room##' )).toBe(true)
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram('Hello','Aloha' )).toBe(false)
});

/*

* Various functions Testing file

*/

const func = require('../src/variousfunctions');

const nameCheck = () => console.log('Checking Name.');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(func.createUser().firstName = user).toBe(user);
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(func.createUser().firstName = user).toBe(user);
  });
});

test('Adds 2 + 2 to equal 4', () => {
  expect(func.add(2,2)).toBe(4)
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(func.add(2,2)).not.toBe(5)
});

/*

* Informations

*/

// CHECK FOR true & false VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  expect(func.isNull('')).toBeNull()
});

// toBeFalsy
test('Should be falsy', () => {
  expect(func.checkValue()).toBeUndefined();
});

// toEqual
test('User should be Marc Antoine object', () => {
  expect(typeof (func.createUser())).toBe('object');
});

// Less than and greater than
test('Should be under or equal 1000', () => {
  const load1 = 500;
  const load2 = 500;
  expect(func.add(load1,load2)).toBeLessThanOrEqual(1000);
});

// Regex
test('There is no I in the word team', () => {
  const word = 'team';
  expect(word).not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
  
});

// Working with async data

// Async Await since ES7
test('User fetched name should be Leanne Graham', async () => {
  const data = await func.fetchUser();
  expect(data.name).toBe('Leanne Graham');
});

/*

* ReverseString Testing file

*/

const reverseString = require('../src/reversestr');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('animal')).toBe('lamina')
});

test('String reverses with uppercase', () => {
  expect(reverseString('ANIMAL')).toBe('lamina')
});
