import React, { Component } from 'react';
import '../style/home.scss';
import '../style/students.scss';
import Student from './Students';
import Group from './Group';

const myHeaders = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  Accept: 'application/json',
});
const api = 'http://localhost:8080/students';
const randomGroupApi = 'http://localhost:8080/groups';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      randomGroup: [],
    };
  }

  randomGroup = () => {
    fetch(randomGroupApi, {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          randomGroup: data,
        });
      });
  };

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
    let count = 0;

    return (
      <div className="home">
        <div className="group-list">
          <div>
            <section className="header">
              <h3>分组列表</h3>
              <button type="button" onClick={this.randomGroup}>
                分组学员
              </button>
            </section>
            <section>
              {this.state.randomGroup.map((groups) => {
                count += 1;
                return <Group key={groups[0].name} students={groups} count={count} />;
              })}
            </section>
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
