import React, { Component } from 'react';
import Student from './Student';
import '../style/group.scss';

class Group extends Component {
  render() {
    return (
      <section className="group">
        <p className="group-name">{this.props.count} 组</p>
        <section className="students">
          {this.props.students.map((student) => {
            return <Student key={student.id} id={student.id} studentName={student.name} />;
          })}
        </section>
      </section>
    );
  }
}
export default Group;
