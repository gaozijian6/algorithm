function debounce(func, delay) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args); // 简单地传递参数
    }, delay);
  };
}

// 使用
const handleInput = debounce((e) => {
  console.log("搜索:", e.target.value);
}, 500);

document.getElementById("search").addEventListener("input", handleInput);

function throttle(func, delay) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      func(...args); // 简单地传递参数
    }
  };
}

// 使用
const handleScroll = throttle(() => {
  console.log("滚动了");
}, 200);

window.addEventListener("scroll", handleScroll);
