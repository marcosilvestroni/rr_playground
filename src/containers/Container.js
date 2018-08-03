import React, { Component } from "react";
import { Button, Detail } from "../components";

class Container extends Component {
  render() {
    const {
      onClickSet,
      onClickReset,
      detailText,
      label,
      children
    } = this.props;
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
        <div style={{ flexDirection: "row" }}>
          <Button onClick={onClickSet} label="Set state" />
          <Button onClick={onClickReset} label="Reset state" />
        </div>
        {children}
      </div>
    );
  }
}

export default Container;
