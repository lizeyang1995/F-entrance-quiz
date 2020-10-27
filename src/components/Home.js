import React, { Component } from 'react';
import '../style/home.scss';
import '../style/students.scss';
import Student from './Students';

const myHeaders = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  Accept: 'application/json',
});
const api = 'http://localhost:8080/students';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount = () => {
    fetch(api, {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          students: data,
        });
      });
  };

  render() {
    return (
      <div className="home">
        <div className="group-list">
          <div className="header">
            <h3>分组列表</h3>
            <button type="button">分组学员</button>
          </div>
        </div>
        <div className="student-list">
          <h3>学员列表</h3>
          <section className="all-student">
            {this.state.students.map((student) => {
              return <Student key={student.id} id={student.id} studentName={student.name} />;
            })}
          </section>
        </div>
      </div>
    );
  }
}
export default Home;
