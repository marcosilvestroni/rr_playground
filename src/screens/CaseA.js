import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Container from "../containers/Container";
import {
  doParentStateSet,
  doParentStateReset,
  doFirstChildSet,
  doFirstChildReset,
  doSecondChildSet,
  doSecondChildReset
} from "../state/ducks/duck";

const Parent = connect(
  null,
  { onClickSet: doParentStateSet, onClickReset: doParentStateReset }
)(Container);

const FirstChild = connect(
  null,
  { onClickSet: doFirstChildSet, onClickReset: doFirstChildReset }
)(Container);

const SecondChild = connect(
  null,
  { onClickSet: doSecondChildSet, onClickReset: doSecondChildReset }
)(Container);

export default class CaseA extends Component {
  render() {
    return (
      <Fragment>
        <h2>Case A</h2>
        <Parent label="PARENT">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FirstChild label="FIRST CHILD" />
            <SecondChild label="SECOND CHILD" />
          </div>
        </Parent>
      </Fragment>
    );
  }
}
