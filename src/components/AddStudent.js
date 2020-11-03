import React, { Component } from 'react';
import '../style/addStudent.scss';

// TODO GTB-4: - 重复代码，抽取请求层可以解决
const myHeaders = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  Accept: 'application/json',
});
const api = 'http://localhost:8080/student';
class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO GTB-4: - 冗余的state，这里没必要做双向绑定，用keyUp事件event中value即可
      name: '',
    };
  }

  // TODO GTB-4: - 同name，可以不用写
  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  // TODO GTB-4: - 这里其实不是form提交，用onKeyUp加keyCode判断即可
  handleSubmit = (event) => {
    event.preventDefault();
    fetch(api, {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      body: JSON.stringify({
        name: this.state.name,
      }),
    }).then((res) => res.json());
  };

  render() {
    return (
      // TODO GTB-4: - 同上，不是form
      <form className="add-student" onSubmit={this.handleSubmit}>
        <input placeholder="+添加学员" onChange={this.handleChange} value={this.state.name} />
      </form>
    );
  }
}
export default AddStudent;
