// positive lookahead

const regex1 = /dog(?=cat)/; // dog followed by cat
console.log(regex1.test("dogcat")); // true
console.log(regex1.test("dog")); // false
console.log(regex1.test("catdog")); // false

// negative lookahead
const regex2 = /dog(?!cat)/; // dog not followed by cat
console.log(regex2.test("dogcat")); // false
console.log(regex2.test("dog")); // true
console.log(regex2.test("catdog")); // true

// positive lookbehind
const regex3 = /(?<=cat)dog/; // dog preceded by cat
str = "dogcat catdog doghouse cat catdogcat"
console.log(str.match(regex3));

// negative lookbehind
const regex4 = /(?<!cat)dog/; // dog not preceded by cat
console.log(regex4.test("catdog")); // false
console.log(regex4.test("dog")); // true
console.log(regex4.test("dogcat")); // true