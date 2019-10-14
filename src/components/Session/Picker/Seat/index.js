import React from "react";
import { StyledSeat, Tip, TipSeat, TipRow, TipPrice } from "./Seat.sc";
import { connect } from "react-redux";
import { toggleSeat } from "../../../../actions/session";
import { addSeatToOrder, removeSeatFromOrder } from "../../../../actions/order";

const Seat = ({
  seat: { skip, span, number, isSelected, isReserved, isPurchased, price },
  seat_id,
  row_id,
  row_number,
  toggleSeat,
  addSeatToOrder,
  removeSeatFromOrder
}) => {
  const handleSeatClick = () => {
    if (!(isReserved || isPurchased)) {
      toggleSeat(row_id, seat_id, isSelected);
      isSelected
        ? removeSeatFromOrder(row_id, seat_id)
        : addSeatToOrder(row_id, seat_id, row_number, number, price);
    }
  };

  return (
    <StyledSeat
      skip={skip}
      span={span}
      onClick={handleSeatClick}
      isSelected={isSelected}
      isReserved={isReserved}
      isPurchased={isPurchased}
    >
      {isReserved || isPurchased ? null : (
        <Tip>
          <TipRow>Row: {row_number}</TipRow>, <TipSeat>Seat: {number}</TipSeat>
          <TipPrice>{price} $</TipPrice>
        </Tip>
      )}

      {number}
    </StyledSeat>
  );
};

const mapStateToProps = (state, ownProps) => ({
  seat:
    state.session.entities.hall.rows[ownProps.row_id].seats[ownProps.seat_id]
});

export default connect(
  mapStateToProps,
  {
    toggleSeat,
    addSeatToOrder,
    removeSeatFromOrder
  }
)(Seat);
