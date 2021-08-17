const { hashFun } = require("../../src/es5/HashTable");

test("测试 hashFunc", () => {
  expect(hashFun("abc", 7)).toBe(4);
  expect(hashFun("cba", 7)).toBe(3);
  expect(hashFun("nba", 7)).toBe(5);
  expect(hashFun("mba", 7)).toBe(1);
});