import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Count: {this.state.count}</h2>
        <h2>Location: Pileru</h2>
        <h3>Mail: akkiraju@</h3>
      </div>
    );
  }
}

export default UserClass;
