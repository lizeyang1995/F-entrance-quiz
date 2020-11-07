import React, { Component } from 'react';
import Group from './Group';

class Groups extends Component {
  showGroups = () => {
    if (this.props.randomGroup !== null) {
      this.props.randomGroup.map((groups, index) => {
        console.log('groups[0].name:', groups);
        return <Group key={groups.group[0].name} students={groups} count={index + 1} />;
      });
    }
  };

  render() {
    return <section>{this.showGroups()}</section>;
  }
}

export default Groups;
