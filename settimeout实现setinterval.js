function mySetInterval(callback, delay) {
    let timerId;
    
    function run() {
        callback();
        timerId = setTimeout(run, delay);
    }
    
    timerId = setTimeout(run, delay);
    
    // 返回一个对象，包含清除定时器的方法
    return {
        clear: function() {
            clearTimeout(timerId);
        }
    };
}

// 使用示例
const interval = mySetInterval(() => {
    console.log('每2秒执行一次');
}, 2000);

