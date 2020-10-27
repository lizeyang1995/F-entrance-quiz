import React, { Component } from 'react';
import Student from './Students';
import '../style/group.scss';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
