function Stack() {
    this.dataStore = [];  // 保存栈内元素
    this.top = 0;  // 记录栈顶位置
    this.push = push;  // 压入栈
    this.pop = pop;  // 弹出栈
    this.peek = peek;  // 返回栈顶元素
    this.length = length;  // 栈内元素的长度
    this.clear = clear;  // 清空栈
    this.isEmpty = isEmpty;  //
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function pop() {
    return this.dataStore[--this.top];
}
function peek() {
    return this.dataStore[this.top - 1];
}
function length() {
    return this.top;
}
function clear() {
    this.top = 0;
}
function isEmpty() {
    return this.top === 0;
}


exports.Stack = Stack
