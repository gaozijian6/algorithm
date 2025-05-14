### 数组api
实例：push pop unshift shift length includes sort forEach map reduce
filter find findIndex indexOf lastIndexOf slice splice concat join some every fill
静态：isArray from of

### react常用hook
useState useRef useEffect useCallback useMemo useReducer useContext useLayoutEffect

### vue常用hook
beforeCreate created beforeMount mounted beferUpdate updated beforeDestroy destroyed

### vue常用api
ref reactive computed watch watchEffect defineProps defineEmits v-model nextTick

### 前端性能优化
1.优化算法 2.图片压缩 3.react里的usememo、memo、usecallback 4.vue使用computed、keep-alive 5、代码压缩混淆
6、服务端渲染 7、数据预加载、懒加载、按需加载 8、骨架屏 9、更换构建工具 10、flatlist 11、http缓存 12、CDN 13、编译器优化

### http缓存
强缓存：第一次请求数据后响应头带有max-age字段，有效期内使用缓存数据，不请求服务器
协商缓存：
1、基于ETag：第一次请求数据后响应头有no-cache、ETag
2、基于Last-Modified：