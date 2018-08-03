import React, { Component } from "react";

class Detail extends Component {
  render() {
    const { text } = this.props;
    return <p>{text}</p>;
  }
}

Detail.defaultProps = {
  text: "No state"
};

export default Detail;
