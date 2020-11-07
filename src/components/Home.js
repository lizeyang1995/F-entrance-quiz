import React, { Component } from 'react';
import '../style/home.scss';
import '../style/students.scss';
import Students from './Students';
import Groups from './Groups';

// TODO GTB-4: - API请求相关内容可以抽到Api请求层中，解耦请求与渲染
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

  // TODO GTB-4: - 页面加载后也应该请求分组列表，通过列表数据判断是否应该显示
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
    fetch(randomGroupApi, {
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
    // TODO GTB-3: - 不用使用count，使用map的index即可
    // let count = 0;

    return (
      // TODO GTB-3: - 语义化标签的使用还可以加强
      <article className="home">
        <section className="group-list">
          {/* TODO GTB-3: - 这里可以直接用header标签 */}
          <section className="header">
            <h3>分组列表</h3>
            <button type="button" onClick={this.randomGroup}>
              分组学员
            </button>
          </section>
          {/* TODO GTB-4: - 分组列表可以直接作为一个组件，而不是Group */}
          {/* <section> */}
          {/*  {this.state.randomGroup.map((groups) => { */}
          {/*    count += 1; */}
          {/*    return <Group key={groups[0].name} students={groups} count={count} />; */}
          {/*  })} */}
          {/* </section> */}
          <Groups randomGroup={this.state.randomGroup} />
        </section>
        {/* TODO GTB-4: - 学员列表可以作为一个组件 */}
        {/* <div className="student-list"> */}
        {/*  <h3>学员列表</h3> */}
        {/*  <section className="all-student"> */}
        {/*    {this.state.students.map((student) => { */}
        {/*      return <Student key={student.id} id={student.id} studentName={student.name} />; */}
        {/*    })} */}
        {/*    <AddStudent /> */}
        {/*  </section> */}
        {/* </div> */}
        <Students students={this.state.students} />
      </article>
    );
  }
}
export default Home;
