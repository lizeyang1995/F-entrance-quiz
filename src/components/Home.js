import React, { Component } from 'react';
import '../style/home.scss';
import '../style/students.scss';
import Students from './Students';
import Groups from './Groups';
import { myHeaders, groupsApi, studentsApi } from './apiAction';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      randomGroup: [],
    };
  }

  randomGroup = () => {
    fetch(groupsApi, {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          randomGroup: data,
        });
      });
  };

  componentDidMount = () => {
    fetch(studentsApi, {
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
    fetch(groupsApi, {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          randomGroup: data,
        });
      });
  };

  render() {
    return (
      <article className="home">
        <section className="group-list">
          <header className="header">
            <h3>分组列表</h3>
            <button type="button" onClick={this.randomGroup}>
              分组学员
            </button>
          </header>
          <Groups randomGroup={this.state.randomGroup} />
        </section>
        <Students students={this.state.students} />
      </article>
    );
  }
}
export default Home;
