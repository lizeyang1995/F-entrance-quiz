import React, { Component } from 'react';
import '../style/addStudent.scss';

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
      name: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

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
      <form className="add-student" onSubmit={this.handleSubmit}>
        <input placeholder="+添加学员" onChange={this.handleChange} value={this.state.name} />
      </form>
    );
  }
}
export default AddStudent;
