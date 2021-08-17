const { HashTable } = require("../../src/es5/HashTable");

test("测试 hashFun", () => {
  const ht = new HashTable();
  expect(ht.hashFun("abc", 7)).toBe(4);
  expect(ht.hashFun("cba", 7)).toBe(3);
  expect(ht.hashFun("nba", 7)).toBe(5);
  expect(ht.hashFun("mba", 7)).toBe(1);
});

test("测试 toString", () => {
  const ht = new HashTable();
  console.log(ht.toString());
  ht.set("A", 1);
  console.log(ht.toString());
  ht.set("B", 2);
  console.log(ht.toString());
  ht.set("C", {
    name: "andy",
    age: 20
  });
  console.log(ht.toString());
});