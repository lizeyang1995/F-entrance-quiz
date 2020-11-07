import React, { Component } from 'react';
import '../style/students.scss';

// TODO GTB-3: - 纯UI组件可以写成函数组件，或constructor可以省略
// TODO GTB-4: - 这里注意class命名和文件名一致
class Student extends Component {
  render() {
    return (
      <p className="student">
        {this.props.id}.{this.props.studentName}
      </p>
    );
  }
}
export default Student;
