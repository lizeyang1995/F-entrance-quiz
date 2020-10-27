import React, { Component } from 'react';
import '../style/home.scss';

class Home extends Component {
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
        </div>
      </div>
    );
  }
}
export default Home;
