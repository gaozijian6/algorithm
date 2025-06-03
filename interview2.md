### webpack:
webpack是一个现代js的静态打包器，他会递归的构建依赖关系图，将项目中所需的模块打包成一个或多个bundle。
入口（entry）：告诉webpack从哪个文件开始构建依赖图，默认是src/index.js
输出（output）：告诉webpack将打包后的文件输出到哪里，默认是dist/index.js
加载器（loader）：webpack本身只能理解js和json文件，加载器让webpack能处理其他类型的文件
插件（plugin）：
babel-loader做js、ts、jsx、tsx转换
css-loader做css转换
ts-loader：专门的ts转换，相比babel-loader在构建时能做额外的类型检查

### vite：
下一代的构建工具，启动速度很快，基于ESM的冷启动，按需编译，利用浏览器缓存策略，开发环境是esbuild在转换，生产环境使用Rollup打包