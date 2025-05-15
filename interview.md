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