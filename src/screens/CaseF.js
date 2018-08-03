import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Container from "../containers/Container";
import BaseContainer from "../containers/BaseContainer";
import { doFirstChildSet, doFirstChildReset } from "../state/ducks/duck";

const FirstChild = connect(
  null,
  { onClickSet: doFirstChildSet, onClickReset: doFirstChildReset }
)(Container);

const SecondChild = connect(state => ({ detailText: state.duck.firstChild }))(
  Container
);

export default class CaseF extends Component {
  render() {
    return (
      <Fragment>
        <h2>Case F</h2>
        <BaseContainer label="PARENT">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FirstChild label="FIRST CHILD" />
            <SecondChild label="SECOND CHILD" />
          </div>
        </BaseContainer>
      </Fragment>
    );
  }
}
