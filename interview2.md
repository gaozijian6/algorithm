### webpack:
webpack是一个现代js的静态打包器，他会递归的构建依赖关系图，将项目中所需的模块打包成一个或多个bundle。
入口（entry）：告诉webpack从哪个文件开始构建依赖图，默认是src/index.js
输出（output）：告诉webpack将打包后的文件输出到哪里，默认是dist/index.js
加载器（loader）：webpack本身只能理解js和json文件，加载器让webpack能处理其他类型的文件
插件（plugin）：
optimization：{
minimize：true //开启代码压缩
}
副作用：打印语句、导入整个文件、window挂属性、操作dom、原型链修改、本地存储操作、网络请求等

### antd常用组件：
Form、Form.item、Input、Select、Option、Card、Form.List、DatePicker、Table、Message、Modal、Drawer、Tabs、Spin、Steps、Upload、Row、Col、各种Icon、Button

Form：form、layout、initialValues、labelCol、wrapperCol、onFinish、onFinishFailed
Form.item：name、label

Input：placeholder、allowclear、maxlength、showcount、defaultValue、value、disabled、readOnly、onChange、onFocus、onBlur、onPressEnter

Select：placeholder、options、mode、onChange、showsearch、allowclear、filterOption、defaultValue、value、disabled

Option：key、value、label

Spin：spining

