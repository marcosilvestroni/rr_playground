import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import BaseContainer from "../containers/BaseContainer";
import Container from "../containers/Container";
import { doFirstChildSet, doFirstChildReset } from "../state/ducks/duck";

const FirstChild = connect(
  null,
  { onClickSet: doFirstChildSet, onClickReset: doFirstChildReset }
)(Container);

const SecondChild = connect(state => ({ detailText: state.duck.secondChild }))(
  Container
);

export default class CaseF extends Component {
  render() {
    return (
      <Fragment>
        <h2>Case G</h2>
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
