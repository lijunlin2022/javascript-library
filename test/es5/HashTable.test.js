const { HashTable } = require("../../src/es5/HashTable");

test("测试 hashFun", () => {
  const ht = new HashTable();
  expect(ht.hashFun("abc", 7)).toBe(4);
  expect(ht.hashFun("cba", 7)).toBe(3);
  expect(ht.hashFun("nba", 7)).toBe(5);
  expect(ht.hashFun("mba", 7)).toBe(1);
});

test("测试 set 和 get 方法", () => {
  const ht = new HashTable();
  ht.set("key1", "value1");
  expect(ht.get("key1")).toBe("value1");
});

test("测试 toString", () => {
  const ht = new HashTable();
  expect(ht.toString()).toBe("[[], [], [], [], [], [], []]");
  ht.set("A", 1);
  expect(ht.toString()).toBe("[[], [], [[\"A\", 1]], [], [], [], []]");
  ht.set("B", 2);
  expect(ht.toString()).toBe("[[], [], [[\"A\", 1]], [[\"B\", 2]], [], [], []]");
  ht.set("C", {
    name: "andy",
    age: 20
  });
  expect(ht.toString()).toBe("[[], [], [[\"A\", 1]], [[\"B\", 2]], [[\"C\", {\"name\":\"andy\",\"age\":20}]], [], []]");
});