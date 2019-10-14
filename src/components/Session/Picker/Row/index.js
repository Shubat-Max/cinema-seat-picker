import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { StyledRow, RowLeftTitle, RowRightTitle, RowContent } from "./Row.cs";
import Seat from "../Seat";

const Row = ({ row, id }) => {
  const { seats, number } = row;

  const getSeats = () =>
    seats.map((seat, index) => (
      <Seat seat_id={index} row_id={id} row_number={number} key={uuid()} />
    ));

  return (
    <StyledRow>
      <RowContent style={{}}>
        {getLTitle(number)}

        {getSeats()}

        {getRTitle(number)}
      </RowContent>
    </StyledRow>
  );
};

const getLTitle = number =>
  number ? <RowLeftTitle>{number}</RowLeftTitle> : <RowLeftTitle />;
const getRTitle = number =>
  number ? <RowRightTitle>{number}</RowRightTitle> : <RowRightTitle />;

const mapStateToProps = (state, ownProps) => ({
  row: state.session.entities.hall.rows[ownProps.id]
});

export default connect(mapStateToProps)(Row);
