import { Stack } from "./stack.mjs";

var stack = new Stack();

// 测试入栈
stack.push(0);
stack.push(1);
stack.push(5);
console.log(stack.toString());

// 测试出栈
stack.pop();
console.log(stack.toString());

// 测试获取栈顶元素
var top = stack.peek();
console.log(top);

// 测试判空
console.log(stack.isEmpty());

// 测试深度
console.log(stack.size());
