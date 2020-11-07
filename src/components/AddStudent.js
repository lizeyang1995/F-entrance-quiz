import React, { Component } from 'react';
import '../style/addStudent.scss';

// TODO GTB-4: - 重复代码，抽取请求层可以解决
const myHeaders = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  Accept: 'application/json',
});
const api = 'http://localhost:8080/students';
class AddStudent extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      fetch(api, {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        body: JSON.stringify({
          name: event.target.value,
        }),
      }).then((res) => res.json());
    }
  };

  render() {
    return (
      <section className="add-student">
        <input placeholder="+添加学员" onKeyUp={this.handleSubmit} />
      </section>
    );
  }
}
export default AddStudent;
