import React, { Component } from 'react';
import Student from './Student';
import AddStudent from './AddStudent';

class Students extends Component {
  render() {
    return (
      <div className="student-list">
        <h3>学员列表</h3>
        <section className="all-student">
          {this.props.students.map((student) => {
            return <Student key={student.id} id={student.id} studentName={student.name} />;
          })}
          <AddStudent />
        </section>
      </div>
    );
  }
}
export default Students;
