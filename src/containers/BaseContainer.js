import React, { Component } from "react";
import { Detail } from "../components";

class BaseContainer extends Component {
  render() {
    const { detailText, label, children } = this.props;
    console.log(`Rendering ${label}`);
    
    return (
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          margin: 5,
          padding: 5
        }}
      >
        <h2>{label}</h2>
        <Detail text={detailText} />
        {children}
      </div>
    );
  }
}

export default BaseContainer;
