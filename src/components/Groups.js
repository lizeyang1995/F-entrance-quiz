import React, { Component } from 'react';
import Group from './Group';

class Groups extends Component {
  showGroups = () => {
    if (this.props.randomGroup.length > 0) {
      return this.props.randomGroup.map((groups, index) => (
        <Group key={groups.group[0].name} students={groups.group} count={index + 1} />
      ));
    }
    return [];
  };

  render() {
    return <section>{this.showGroups()}</section>;
  }
}

export default Groups;
