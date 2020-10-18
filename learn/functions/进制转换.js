const Stack = require('../数据结构/stack').Stack

function baseConverter(decNumber, base) {//计数器转换函数
    if (!(base >= 2 && base <= 36)) return '';//判断是否是2-36进制
    const remStack = new Stack();//实例化一个栈
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';//将固定的数存入字符串转化的时候使用
    let number = decNumber;//定义一个变量存入十进制的数
    let rem;//得到转化后的每一个数字
    let baseString = '';//转化后的数存入字符转返回
    while (number > 0) {
        rem = Math.floor(number % base); //其中转化的第一个数
        remStack.push(rem);//存入栈中
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];//将存入栈中的数取出
    }
    return baseString
}

console.log(baseConverter(100345, 16))  //187F9
