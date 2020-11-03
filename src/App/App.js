import React, { Component } from 'react';
import './App.scss';
import Home from '../components/Home';

// TODO GTB-1: * 样式还原度较高，存在缺陷添加学员后学员没有立刻显示在学员列表中，刷新页面没有显示已分组的分组列表
// TODO GTB-1: * 基本上完成所有需求，存在一些实现与需求不符的情况
// TODO GTB-2: * 没有测试
// TODO GTB-3: * 有做组件拆分和组件复用，还可以加强。注意文件命名；划分Page级别和Component级别组件
// TODO GTB-3: * 有使用语义化标签，还可以加强使用
// TODO GTB-3: * 有用到flex布局，使用了scss但没有使用scss任何特性
// TODO GTB-3: * 运用了ES6+语法及fetch
// TODO GTB-3: * 运用React相关知识点
// TODO GTB-4: * 小步提交做的不错
// TODO GTB-4: * 没有抽出Api请求层
// TODO GTB-4: * 组件但抽象和复用做的还可以，不过还可以优化；代码组织还可以加强
// TODO GTB-4: * eslint没有error和warning
class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Home />
      </div>
    );
  }
}

export default App;
