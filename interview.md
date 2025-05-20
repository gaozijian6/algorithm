### 数组api：
实例：push pop unshift shift length includes sort forEach map reduce
filter find findIndex indexOf lastIndexOf slice splice concat join some every fill
静态：isArray from of

### react常用hook：
useState useRef useEffect useCallback useMemo useReducer useContext useLayoutEffect

### vue常用hook：
beforeCreate created beforeMount mounted beferUpdate updated beforeDestroy destroyed

### vue常用api：
ref reactive computed watch watchEffect defineProps defineEmits v-model nextTick

### 前端性能优化：
1.优化算法 2.图片压缩 3.react里的usememo、memo、usecallback 4.vue使用computed、keep-alive 5、代码压缩混淆
6、服务端渲染 7、数据预加载、懒加载、按需加载 8、骨架屏 9、更换构建工具 10、flatlist 11、http缓存 12、CDN 13、编译器优化
14、不写内联样式 15、条件渲染 display：none visibility：hidden合理使用  16、zustand单个读取

### http缓存
强缓存：  
1、基于Cache-Control：第一次请求数据后响应头带有Cache-Control: max-age=86400，有效期内使用缓存数据，不请求服务器
2、基于Expires：第一次请求数据后响应头带有Expires: Fri, 16 May 2025 10:00:00 GMT，有效期内使用缓存数据，不请求服务器  
协商缓存：  
1、基于ETag：第一次请求数据后响应头有Cache-Control: no-cache、ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
后续请求的请求头有If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"，未变化返回304，否则返回新的两个字段
2、基于Last-Modified：第一次请求数据后响应头有Cache-Control: no-cache、Last-Modified: Wed, 15 May 2024 10:30:00 GMT
后续请求的请求头有If-Modified-Since: Wed, 15 May 2024 10:30:00 GMT，未变化返回304，否则返回新的两个字段

### no-cache no-store区别：
no-cache表示启用协商缓存
no-store表示不启用缓存策略

### 不启用和启用 defer async：
不启用：串行下载与执行，阻塞解析
defer：下载和解析并行执行，解析完成后再按defer顺序依次执行
async：下载和解析并行执行，谁先下载完谁就先执行

### 闭包：
内部函数可以访问外部函数的变量，即使外部函数已经执行完毕

### 类组件和函数组件区别：
写法区别，函数组件性能更好，代码更简洁

条件渲染：不创建DOM
display none：创建DOM但不执行布局
visibility hidden：执行布局但不绘制
opacity 0：执行完整流程
后三种监听都会起作用，但visibility会挤占空间不绘制所以点击没反应

### 页面中多个计时器，怎么避免页面卡顿：
1、看不见的不运行 2、使用requestAnimationFrame  3、定时器放在Web Workers

### http状态码：
200：成功
304：资源未修改
401：未登录
403：登录了但未授权
404：找不到资源
500：服务器内部错误
504：服务器响应超时

### js数据类型：
基本数据类型：number、string、boolean、null、undefined、symbol、bigint
引用数据类型：Object

### 类型检测：
typeof     null和引用数据类型均会被检测未Object
instanceof   只能检测引用数据类型，当前以及祖先类型都会返回true
constructor  只能检测当前类型，检测基本类型js会自动包装也可以检测，但无法检测null和undefined
Object.prototype.toString.call()  可检测任何类型

### 0.1+0.2!==0.3：
计算机的位数无法精确表示0.1和0.2，(0.1*10 + 0.2*10) / 10 == 0.3 // true

### css选择器优先级：
!important  内联  ID  （类、伪类、属性）  元素  通用（*、>,+,~）
判定优先级，先看css内部的样式是否相同，相同的话再看前面的选择器优先级是否相同，再相同的话才看书写的先后顺序
注意：如果伪类事件没有被触发是不会参与优先级比较

### 跨域方式：
1、CORS  2、JSONP  3、代理服务器  4、postMessage  5、WebSocket

### 同源策略：
协议、域名、端口号全部相同就是同源

### 本地存储：
1、localStorage：大小在5MB作用，遵守同源策略，只能存储字符串类型，数据永久保存
2、sessionStorage：与localStorage类似，只不过关闭页签数据就会丢失
3、Cookies：大小在4KB左右，可以设置过期时间与安全属性，会随着http请求自动发送服务器
4、IndexedDB

### cookies的安全属性：
expires：到期时间
max-age：有效期
Domain：指定哪些域名可以访问cookie
samesite：strict不允许跨站请求   lax允许部分跨站请求   none允许任何跨站请求
secure：只能通过https传输
httponly：不能通过document.cookie访问

### js事件流：
描述了页面中元素接受事件的顺序，分为三个阶段：
捕获阶段：从根元素沿着dom到目标元素
目标阶段：已经达到目标元素
冒泡阶段：从目标元素沿dom传到根元素
addEventListener默认是在冒泡阶段执行，将第三个参数设置为true可以在捕获阶段执行，stopPropagation可以阻止事件传播

前端安全：
XSS攻击：1、反射性：攻击者构造恶意url群发用户，用户点击后将敏感信息泄露   2、存储型：攻击者通过留言板等功能将恶意代码片段存到数据库里，别的用户在加载具有这段留言时浏览器会自动执行恶意代码    3、DOM型：和反射型很像，就是不经过服务器
现代浏览器一般不会执行innerHTML里的script但是img可以
