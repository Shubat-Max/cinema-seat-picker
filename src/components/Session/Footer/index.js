import React from "react";
import { connect } from "react-redux";
import { buyOrder, reserveOrder } from "../../../actions/order";
import Legend from "../Legend";
import {
  ActionButton,
  StyledFooter,
  OrderInfo,
  ShortOverall,
  FullOverall
} from "./Footer.sc";

const Footer = ({
  totalSelected,
  totalPrice,
  reserveOrder,
  buyOrder,
  seats
}) => {
  const getFullOverall = () => {
    return (
      <FullOverall enabled={!!totalSelected}>
        {seats.map(seat => (
          <div>
            Row {seat.row}, Seat {seat.seat}
          </div>
        ))}
      </FullOverall>
    );
  };

  return (
    <StyledFooter>
      <Legend />

      <OrderInfo>
        <ShortOverall enabled={!!totalSelected}>
          {getFullOverall()}
          {totalSelected} ticket(s) - {totalPrice} $
        </ShortOverall>
        <ActionButton
          enabled={!!totalSelected}
          onClick={() => totalSelected && reserveOrder()}
        >
          RESERVE
        </ActionButton>
        or
        <ActionButton
          enabled={!!totalSelected}
          onClick={() => totalSelected && buyOrder()}
        >
          BUY
        </ActionButton>
      </OrderInfo>
    </StyledFooter>
  );
};

const mapStateToProps = state => ({
  seats: state.order.seats,
  totalSelected: state.order.seats.size,
  totalPrice: state.order.seats.reduce((acc, seat) => acc + seat.price, 0)
});

export default connect(
  mapStateToProps,
  {
    reserveOrder,
    buyOrder
  }
)(Footer);
