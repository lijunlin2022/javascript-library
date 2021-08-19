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

Graph.prototype.initializeColor = function () {
  var colorMap = new Map();
  for (var i = 0; i < this.vertexes.length; i++) {
    colorMap.set(this.vertexes[i], "white");
  }
  return colorMap;
}

Graph.prototype.bfs = function (initV, handler) {
  // 初始化颜色
  var colorMap = this.initializeColor();
  var queue = [];
  // 将顶点加入队列
  queue.push(initV);

  while (queue.length !== 0) {
    // 从队列中取出一个顶点
    var v = queue.shift();
    // 获取该节点相邻的其他节点
    var vAdjList = this.edges.get(v);
    // 将顶点的颜色变为灰色
    colorMap.set(v, "gray");

    // 将没有访问过的相邻节点加入队列
    vAdjList.forEach(item => {
      if (colorMap.get(item) === "white") {
        colorMap.set(item, "gray");
        queue.push(item);
      }
    });

    // 处理节点
    handler(v);

    colorMap.set(v, "black");
  }
}

Graph.prototype.bfsToString = function (initV) {
  var arr = [];
  this.bfs(initV, function (v) {
    arr.push(v);
  });
  return "[" + arr.join(", ") + "]";
}

module.exports = {
  Graph
};
