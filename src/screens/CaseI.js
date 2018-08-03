import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import BaseContainer from "../containers/BaseContainer";
import Container from "../containers/Container";
import { doParentStateSet, doParentStateReset } from "../state/ducks/duck";

const Parent = connect(
  state => ({ detailText: state.duck.firstChild }),
  { onClickSet: doParentStateSet, onClickReset: doParentStateReset }
)(Container);

export default class CaseA extends Component {
  render() {
    return (
      <Fragment>
        <h2>Case I</h2>
        <Parent label="PARENT">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <BaseContainer label="FIRST CHILD" />
            <BaseContainer label="SECOND CHILD" />
          </div>
        </Parent>
      </Fragment>
    );
  }
}
