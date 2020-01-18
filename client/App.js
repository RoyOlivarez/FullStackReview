import React from 'react';  // - - > imports React library



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  };

  render() {
    return (
      <div>
        <h4>React page is working</h4>
      </div>
    )
  }
};  