// 创建100MB数组可能需要几秒时间
console.time('创建100MB数组');
const hugeArray = new Array(6500000).fill(0); // 约100MB
console.timeEnd('创建100MB数组'); // 可能需要1-3秒