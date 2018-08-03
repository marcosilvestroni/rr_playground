import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import BaseContainer from "../containers/BaseContainer";
import Container from "../containers/Container";
import { doFirstChildSet, doFirstChildReset } from "../state/ducks/duck";

const FirstChild = connect(
  state => ({ detailText: state.duck.firstChild }),
  { onClickSet: doFirstChildSet, onClickReset: doFirstChildReset }
)(Container);

export default class CaseH extends Component {
  render() {
    return (
      <Fragment>
        <h2>Case J</h2>
        <BaseContainer label="PARENT">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FirstChild label="FIRST CHILD" />
            <BaseContainer label="SECOND CHILD" />
          </div>
        </BaseContainer>
      </Fragment>
    );
  }
}
