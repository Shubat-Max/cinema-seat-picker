import {
  ADD_SEAT_TO_ORDER,
  REMOVE_SEAT_FROM_ORDER,
  RESERVE_ORDER,
  BUY_ORDER
} from "../config/actionconst";

export const addSeatToOrder = (
  row_id,
  seat_id,
  row,
  seat,
  price
) => dispatch => {
  dispatch({
    type: ADD_SEAT_TO_ORDER,
    payload: {
      row_id,
      seat_id,
      row,
      seat,
      price
    }
  });
};

export const removeSeatFromOrder = (row_id, seat_id) => dispatch => {
  dispatch({
    type: REMOVE_SEAT_FROM_ORDER,
    payload: {
      row_id,
      seat_id
    }
  });
};

export const reserveOrder = () => dispatch => {
  dispatch({
    type: RESERVE_ORDER
  });
};

export const buyOrder = () => dispatch => {
  dispatch({
    type: BUY_ORDER
  });
};
