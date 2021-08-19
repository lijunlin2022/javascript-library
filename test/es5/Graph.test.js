const { Graph } = require("../../src/es5/Graph");

test("测试 graph 的 addVertex 方法", () => {
  const myVertex = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const g = new Graph();
  myVertex.forEach(item => {
    g.addVertex(item);
  });
  expect(g.toString()).toBe(
    `A->\nB->\nC->\nD->\nE->\nF->\nG->\nH->\nI->`
  );
});

test("测试 graph 的 addEdge 方法", () => {
  const myVertex = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const graph = new Graph();
  myVertex.forEach(item => {
    graph.addVertex(item);
  });
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("A", "D");
  graph.addEdge("C", "D");
  graph.addEdge("C", "G");
  graph.addEdge("D", "G");
  graph.addEdge("D", "H");
  graph.addEdge("B", "E");
  graph.addEdge("B", "F");
  graph.addEdge("E", "I");
  expect(graph.toString()).toBe(
    `A->B,C,D
     B->A,E,F
     C->A,D,G
     D->A,C,G,H
     E->B,I
     F->B
     G->C,D
     H->D
     I->E`.split(" ").join(""));
});
