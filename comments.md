### 完成度：

- 样式还原度较高，存在缺陷添加学员后学员没有立刻显示在学员列表中，刷新页面没有显示已分组的分组列表
- 基本上完成所有需求，存在一些实现与需求不符的情况

**Details:**

### 测试：

- 没有测试

**Details:**

### 知识点：

- 有做组件拆分和组件复用，还可以加强。注意文件命名；划分 Page 级别和 Component 级别组件
- 有使用语义化标签，还可以加强使用
- 有用到 flex 布局，使用了 scss 但没有使用 scss 任何特性
- 运用了 ES6+语法及 fetch
- 运用 React 相关知识点

**Details:**

- \- scss 中可以使用嵌套
- \- 不用使用 count，使用 map 的 index 即可
- \- 语义化标签的使用还可以加强
- \- 这里可以直接用 header 标签
- \- 纯 UI 组件可以写成函数组件，或 constructor 可以省略
- \- 纯 UI 组件可以写成函数组件，或 constructor 可以省略

### 工程实践：

- 小步提交做的不错
- 没有抽出 Api 请求层
- 组件但抽象和复用做的还可以，不过还可以优化；代码组织还可以加强
- eslint 没有 error 和 warning

**Details:**

- \- API 请求相关内容可以抽到 Api 请求层中，解耦请求与渲染
- \- 页面加载后也应该请求分组列表，通过列表数据判断是否应该显示
- \- 分组列表可以直接作为一个组件，而不是 Group
- \- 学员列表可以作为一个组件
- \- 这里注意 class 命名和文件名一致
- \- 重复代码，抽取请求层可以解决
- \- 冗余的 state，这里没必要做双向绑定，用 keyUp 事件 event 中 value 即可
- \- 同 name，可以不用写
- \- 这里其实不是 form 提交，用 onKeyUp 加 keyCode 判断即可
- \- 同上，不是 form
