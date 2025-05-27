### 数组api：
实例：push pop unshift shift length includes sort forEach map reduce
filter find findIndex indexOf lastIndexOf slice splice concat join some every fill reverse flat
静态：isArray from of

### react的hook：
useState useRef useEffect useLayoutEffect useCallback useMemo useReducer useContext 

### vue常用hook：
beforeCreate created beforeMount mounted beferUpdate updated beforeDestroy destroyed
beforeCreate：完成实例初始化，没有数据观测和虚拟dom
created：数据观测完成，可以访问data、computed等方法，虚拟dom完成
mounted：真实dom渲染完成
Vue 3 中 setup 函数执行时机确实代替了 beforeCreate 和 created

### vue常用api：
ref reactive computed watch watchEffect defineProps defineEmits v-model nextTick

usememo和computed都是只有被访问了才计算一次，计算后的结果被缓存，后续再被访问直接走缓存

### Vue 2 中更新引用数据类型来触发渲染：
1.替换整个对象
2.Vue.set

### 前端性能优化：
1.优化算法 
2.react里的usememo、memo、usecallback 
3.vue使用computed、keep-alive 
4、不写内联样式  
5、使用开销小的组件 
6、zustand单个读取  
7.防抖和节流
8、数据预加载、懒加载、按需加载 
9.图片压缩 
10、骨架屏 
11、代码压缩混淆
12、编译器优化
13、更换构建工具 
14、http缓存 
15、CDN 
16、服务端渲染 
17、cpu密集任务开多线程、调用原生、使用WASM技术
18、合理使用script标签进行加载


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
400：服务器无法理解请求，请求可是有误
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
instanceof   只能检测引用数据类型，当前以及祖先类型都会返回true（检测对象的原型链上是否存在构造函数的prototype）
constructor  只能检测当前类型，检测基本类型js会自动包装也可以检测，但无法检测null和undefined（检测对象收否由某个构造函数创建）
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

### 继承
原型链继承  构造函数继承   组合继承   class继承

### 解析html过程：
浏览器对文件从上到下扫描，通过词法分析和语法分析创建dom节点，中途遇到script标签（四种情况）进行相应情形处理，css文件的下载不会阻塞html解析单会阻塞页面渲染

### display属性
1.inline：不独占一行，不能设置宽高，内容决定大小，只能设置水平方向的margin、padding
2.inline-block：不独占一行，可以设置宽高，可设置所有方向的margin、padding
3.block：独占一行，可以设置宽高，可以设置所有方向的margin、padding
4.none：有dom但是不渲染不占位
5.flex：
父元素可设置justify-content：flex-start、center、flex-end、space-between（两端对齐，中间间距相同）align-items同理、align-content是多轴线对齐也是同理、space-around（两侧间距是中间间距的一半）、space-evenly（两侧和中间的间距相同）。flex-direction：row、row-reverse、coloum、column-reverse。flex-wrap：nowrap、wrap  
子元素可设置order默认是0，数值越小排名越靠前。flex-grow默认值是0，当父亲元素没有填满时，所有子元素根据值自动分配比例放缩。flex-shrink同理缩小。flex本身设置值：其他内容宽度、指定宽度分配完后，会自动根据flex比例分配剩余宽度，如果没有剩余空间，会根据某种策略压缩空间
6.grid：
父元素可设置grid-template-rows、grid-template-colums对行和列进行布局，可以用repeat，第一个参数是数量，第二个参数可以是固定单位也可以是fr，fr就是比例分配，也可以不写repeat。父元素设置grid-template-areas，子元素要搭配grid-area来使用，可以清晰分配网格

### this指向：
浏览器里的this指向window
node环境里指向的是全局对象
普通函数里的this指向它直接调用者
箭头函数this继承外层作用域里的this
通过new的构造函数里的this指向实例本身

### call、apply、bind区别：
三个的第一个参数都是要绑定的this值，call和apply后面的参数只是传参形式不一样，bind只是绑定this对象但不会立即执行

### new的过程：
1.创建新对象
2.将新对象的原型指向构造函数的ptototype
3.将构造函数里的this绑定到新对象上，然后执行构造函数里的代码
4.判断构造函数里的返回值，如果是新对象就返回这个对象，否则就返回之前创建的新对象

this易混淆点：
1.显式赋值更换函数
2.隐式赋值更换函数（向一个函数里传回调函数、函数里return另一个函数）
3.返回新对象的new
4.定时器里的普通函数的this，但要注意箭头函数
5.监听事件里的普通函数this指向被监听对象，箭头函数this和定时器类似

### DNS解析流程：
拿到域名后先查浏览器的本地缓存，再查本地DNS服务器，然后递归查询根域名服务器、顶级域名服务器、权威域名服务器

### udp和tcp使用场景：
tcp：文件传输、远程登陆等
udp：流媒体传输

### http和https区别：
http：明文传输，端口号80
https：除三次握手外还有加密步骤，SEO好

### ES6:
1.let const 块级作用域
2.模板字符串
3.解构赋值
4.对象字面量简写
5.箭头函数
6.默认参数
7.剩余参数
8.扩展运算符
9.Class类
10.Promise
11.模块系统
12.Map、Set
13.数组和字符串的一些新方法

### Promise
1.用来解决回调地狱，三种状态：进行中、成功、失败，成功走then，失败走catch，不管成功和失败finally都会执行，可以链式调用，失败的话会有链式穿透
2.静态方法：
Promise.all()：接受一个数组，当里面所有都成功才会走then，只要有一个失败了就会走catch
Promise.race()：谁最快就根据成功或失败走相应then或catch
Promise.resolve()、Promise.reject()

### 前端通信
1.localStorage
2.postMessage
3.sharedWorker
4.WebRTC
5.websocket（需要服务器）


### 原型链：
每个对象都有一个__proto__属性指向其原型对象，原型对象也通过__proto__指向它的原型对象，这样一直向上查找，直到Object.prototype，而Object.prototype.__proto__为null
