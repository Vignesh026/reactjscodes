import React, { Component } from "react";

class One extends Component {
  constructor() {
    super();
    this.state = Date();
  }
  render() {
    return (
      <div>
        <h1>{this.state}</h1>
      </div>
    );
  }
}
export default One;

