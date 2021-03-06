import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onClick, label } = this.props;
    return <button onClick={onClick}>{label}</button>;
  }
}

export default Button;
