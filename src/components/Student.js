import React, { Component } from 'react';
import '../style/students.scss';

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
