### webpack:

webpack 是一个现代 js 的静态打包器，他会递归的构建依赖关系图，将项目中所需的模块打包成一个或多个 bundle。
入口（entry）：告诉 webpack 从哪个文件开始构建依赖图，默认是 src/index.js
输出（output）：告诉 webpack 将打包后的文件输出到哪里，默认是 dist/index.js
加载器（loader）：webpack 本身只能理解 js 和 json 文件，加载器让 webpack 能处理其他类型的文件
插件（plugin）：
babel-loader 做 js、ts、jsx、tsx 转换
css-loader 做 css 转换
ts-loader：专门的 ts 转换，相比 babel-loader 在构建时能做额外的类型检查

### vite：

下一代的构建工具，启动速度很快，基于 ESM 的冷启动，按需编译，利用浏览器缓存策略，开发环境是 esbuild 在转换，生产环境使用 Rollup 打包
optimization：{
minimize：true //开启代码压缩
}
副作用：打印语句、导入整个文件、window 挂属性、操作 dom、原型链修改、本地存储操作、网络请求等

### antd 常用组件：

Form、Form.item、Input、Select、Option、Card、Form.List、DatePicker、RangePicker、Table、Message、Modal、Drawer、Tabs、Spin、Steps、Upload、Row、Col、各种 Icon、Button、Tag

Form：form、layout、initialValues、labelCol、wrapperCol、onFinish、onFinishFailed
Form.item：name、label、rules

Input：placeholder、allowclear、maxlength、showcount、defaultValue、value、disabled、readOnly、onChange、onFocus、onBlur、onPressEnter

Select：placeholder、options、mode、onChange、showsearch、allowclear、filterOption、defaultValue、value、disabled

Option：key、value、label

Spin：spining

Card：title

Form.List：name、fields、add、remove

Button、type、onClick、icon、disabled、loading

datePicker：placeholder、onChange、showtime、defaultValue

table：datasource、columns、columns里的render和sorter、可以选择是否分页、边框，rowSelection

tabs：items属性接受一个数组
