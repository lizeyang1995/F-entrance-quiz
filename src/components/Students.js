import React, { Component } from 'react';
import Student from './Student';
import '../style/addStudent.scss';
import { myHeaders, studentsApi } from './apiAction';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      props,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { students } = nextProps;
    const { props } = prevState;
    if (students !== props.students) {
      return {
        students,
        props: {
          students,
        },
      };
    }
    return null;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      fetch(studentsApi, {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        body: event.target.value,
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            students: data,
          });
        });
    }
  };

  render() {
    return (
      <div className="student-list">
        <h3>学员列表</h3>
        <section className="all-student">
          {this.state.students.map((student) => {
            return <Student key={student.id} id={student.id} studentName={student.name} />;
          })}
          <section className="add-student">
            <input placeholder="+添加学员" onKeyUp={this.handleSubmit} />
          </section>
        </section>
      </div>
    );
  }
}
export default Students;
