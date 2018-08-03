import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Container from "../containers/Container";
import { doParentStateSet, doParentStateReset } from "../state/ducks/duck";

const Parent = connect(
  null,
  { onClickSet: doParentStateSet, onClickReset: doParentStateReset }
)(Container);

const FirstChild = connect(state => ({ detailText: state.duck.parent }))(
  Container
);

export default class CaseB extends Component {
  render() {
    return (
      <Fragment>
        <h2>Case B</h2>
        <Parent label="PARENT">
          <FirstChild label="FIRST CHILD" />
        </Parent>
      </Fragment>
    );
  }
}
