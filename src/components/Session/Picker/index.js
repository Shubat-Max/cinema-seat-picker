import React from "react";
import { Hall, Screen, Wrapper } from "./Picker.sc";
import Row from "./Row";
import uuid from "uuid";
import { connect } from "react-redux";

const Picker = ({ rows }) => {
  const getRows = () =>
    rows.map((row, index) => <Row id={index} key={uuid()} />);

  return (
    <Wrapper>
      <Screen>SCREEN</Screen>
      <Hall>{getRows()}</Hall>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  rows: state.session.entities.hall.rows
});

export default connect(mapStateToProps)(Picker);
