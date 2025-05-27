function myNew(Constructor, ...args) {
    // 1. 创建新对象
    const obj = {};
    
    // 2. 设置原型链
    obj.__proto__ = Constructor.prototype;
    
    // 3. 绑定this并执行构造函数
    const result = Constructor.apply(obj, args);
    
    // 4. 判断返回值
    return result instanceof Object ? result : obj;
}

// 使用示例
function Person(name) {
    this.name = name;
}

const p1 = new Person('Alice');
const p2 = myNew(Person, 'Bob');
// p1和p2的效果相同