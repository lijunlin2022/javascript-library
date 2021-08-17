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
  expect(ht.get("key1")).toBe(null);
  ht.set("key1", "value1");
  expect(ht.get("key1")).toBe("value1");
});

test("测试 remove 方法", () => {
  const ht = new HashTable();
  ht.set("key1", "value1");
  ht.remove("key1");
  expect(ht.get("key1")).toBe(null);
});

test("测试 isEmpty 方法", () => {
  const ht = new HashTable();
  expect(ht.isEmpty()).toBe(true);
  ht.set("key1", "value1");
  expect(ht.isEmpty()).toBe(false);
  ht.remove("key1");
  expect(ht.isEmpty()).toBe(true);
});

test("测试 size 方法", () => {
  const ht = new HashTable();
  expect(ht.size()).toBe(0);
  ht.set("key1", "value1");
  expect(ht.size()).toBe(1);
  ht.remove("key1");
  expect(ht.size()).toBe(0);
});

test("测试 resize 方法", () => {
  const ht = new HashTable();
  ht.set("key1", "value1");
  ht.set("key2", "value2");
  ht.set("key3", "value3");
  ht.set("key4", "value4");
  ht.set("key5", "value5");
  ht.set("key6", "value6");
  ht.set("key7", "value7");
  ht.resize(17);
  expect(ht.get("key1")).toBe("value1");
  expect(ht.get("key2")).toBe("value2");
  expect(ht.get("key3")).toBe("value3");
  expect(ht.get("key4")).toBe("value4");
  expect(ht.get("key5")).toBe("value5");
  expect(ht.get("key6")).toBe("value6");
  expect(ht.get("key7")).toBe("value7");
});

test("测试 set 和 remove 的自动扩容与缩容", () => {
  const ht = new HashTable();
  ht.set("key1", "value1");
  ht.set("key2", "value2");
  ht.set("key3", "value3");
  ht.set("key4", "value4");
  ht.set("key5", "value5");
  console.log(ht.toString());
  ht.set("key6", "value6");
  console.log(ht.toString()); // 超过 7 * 0.75 = 5.25 应该扩容
  ht.remove("key6");
  ht.remove("key5");
  ht.remove("key4");
  console.log(ht.toString()); // 小于 14 * 0.25 = 3.5 应该缩容
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