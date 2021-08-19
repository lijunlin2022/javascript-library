function Graph() {
  this.vertexes = []; // 顶点用数组表示
  this.edges = new Map(); // 邻接表 adjoin List
}

Graph.prototype.addVertex = function (v) {
  this.vertexes.push(v);
  this.edges.set(v, []);
}

Graph.prototype.addEdge = function (v1, v2) {
  this.edges.get(v1).push(v2);
  this.edges.get(v2).push(v1);
}

Graph.prototype.toString = function () {
  var resArr = [];
  for (var i = 0; i < this.vertexes.length; i++) {
    var v = this.vertexes[i];
    var vEdges = this.edges.get(v);
    var vStr = v + "->" + vEdges.join(",");
    resArr.push(vStr);
  }
  return resArr.join("\n");
}

module.exports = {
  Graph
};
