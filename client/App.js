import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTask: '',
      tasks: []
    };
  }

  render() {
    return (
      <div>
        <h3>Todo list</h3>
        <input />
        <button>Add Task</button>
      </div>
    );
  }
}
