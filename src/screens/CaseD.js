import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Container from "../containers/Container";
import { doFirstChildSet, doFirstChildReset } from "../state/ducks/duck";

const Parent = connect(state => ({ detailText: state.duck.firstChild }))(
  Container
);

const FirstChild = connect(
  null,
  { onClickSet: doFirstChildSet, onClickReset: doFirstChildReset }
)(Container);

export default class CaseD extends Component {
  render() {
    return (
      <Fragment>
        <h2>Case D</h2>
        <Parent label="PARENT">
          <FirstChild label="FIRST CHILD" />
        </Parent>
      </Fragment>
    );
  }
}
