import React, { Component } from 'react';
import Group from './Group';

class Groups extends Component {
  render() {
    return (
      <section>
        {this.props.randomGroup.map((groups, index) => {
          return <Group key={groups[0].name} students={groups} count={index + 1} />;
        })}
      </section>
    );
  }
}

export default Groups;
